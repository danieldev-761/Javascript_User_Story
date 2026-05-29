// Select elements
const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const addBtn = document.getElementById("addBtn");
const syncBtn = document.getElementById("syncBtn");
const productList = document.getElementById("productList");
const messageContainer = document.getElementById("messageContainer");

// Global state
let products = [];
let editingId = null; // Track if we are editing an item
const API_URL = "http://localhost:3000/products";

// Displays a dynamic message in the DOM.

function showMessage(text, type) {
    const msgDiv = document.createElement("div");
    msgDiv.className = type === "success" ? "msg-success" : "msg-error";
    msgDiv.textContent = text;

    messageContainer.innerHTML = ""; // Clear previous messages
    messageContainer.appendChild(msgDiv);

    // Auto-remove message after 3 seconds
    setTimeout(() => {
        msgDiv.remove();
    }, 3000);
}

// --- LOCAL STORAGE HELPERS ---

function saveToStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

function loadFromStorage() {
    const saved = localStorage.getItem("products");
    if (saved) {
        products = JSON.parse(saved);
        renderProducts();
        console.log("Data loaded from Local Storage:", products);
    } else {
        fetchInitialData(); // GET initial data if storage is empty
    }
}

// FETCH API OPERATIONS 

// GET - Fetch initial data from API
async function fetchInitialData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("API GET Response:", data);

        // Map API data to our product structure
        products = data.map(item => ({
            id: item.id,
            name: item.name,
            price: Number(item.price)
        }));

        saveToStorage();
        renderProducts();
        
        console.log("Initial data fetched and synced");
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// DOM MANIPULATION 

// Render products to the DOM using manual node creation 
function renderProducts() {
    productList.innerHTML = ""; // Clear list

    products.forEach((product, index) => {
        // Create <li> element manually
        const li = document.createElement("li");
        li.setAttribute("data-id", product.id);
        
        // Create info span
        const span = document.createElement("span");
        span.innerHTML = `<strong>${product.name}</strong> - $${product.price}`;
        
        // Create button container
        const btnContainer = document.createElement("div");
        
        // Create Edit button
        const editBtn = document.createElement("button");
        editBtn.className = "btn-edit";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editProduct(index);
        
        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteProduct(index, product.id);
        
        // Assemble elements
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(btnContainer);
        
        // Use appendChild for dynamic modification
        productList.appendChild(li);
    });
}

// Add or Update product
addBtn.addEventListener("click", async () => {
    const name = nameInput.value.trim();
    const priceValue = priceInput.value.trim();

    // Validation to prevent empty data
    if (!name || !priceValue) {
        showMessage("Please fill all fields!", "error");
        return;
    }

    // Convert price to number (Numerical Validation)
    const price = Number(priceValue);
    if (isNaN(price) || price <= 0) {
        showMessage("Please enter a valid price greater than 0.", "error");
        return;
    }

    if (editingId) {
        // UPDATE MODE 
        const index = products.findIndex(p => p.id === editingId);
        if (index !== -1) {
            const updatedProduct = {
                ...products[index],
                name: name,
                price: price
            };

            // Update local state
            products[index] = updatedProduct;
            saveToStorage();
            renderProducts();

            // Reset UI
            editingId = null;
            addBtn.textContent = "Add Product";
            addBtn.style.backgroundColor = "";
            
            showMessage("Product updated locally. Sync to save to API.", "success");
        }
    } else {
        //  ADD MODE 
        const newProduct = {
            id: Date.now(), // Unique ID
            name: name,
            price: price
        };

        products.push(newProduct);
        saveToStorage();
        renderProducts();
        
        showMessage("Product added locally. Remember to sync with the API!", "success");
    }
    
    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
    console.log("Local state updated:", products);
});


//  DELETE - Remove product using removeChild 

async function deleteProduct(index, id) {
    if (!confirm("Are you sure you want to delete this product?")) return;

    // Reset form if deleting current edit
    if (editingId === id) {
        editingId = null;
        addBtn.textContent = "Add Product";
        addBtn.style.backgroundColor = "";
        nameInput.value = "";
        priceInput.value = "";
    }

    try {
        // Attempt to delete from API
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        console.log("API DELETE Response status:", response.status);
        
        // Remove from DOM
        const liToRemove = productList.querySelector(`li[data-id='${id}']`);
        if (liToRemove) {
            productList.removeChild(liToRemove);
        }

        // Update state and storage
        products.splice(index, 1);
        saveToStorage();
        
        if (response.ok) {
            showMessage("Product deleted from API and local storage", "success");
        } else {
            showMessage("Product removed locally", "success");
        }
    } catch (error) {
        console.error("Delete error:", error);
        showMessage("Connection error, product removed locally", "error");
        
        // Update UI anyway for UX
        const liToRemove = productList.querySelector(`li[data-id='${id}']`);
        if (liToRemove) productList.removeChild(liToRemove);
        products.splice(index, 1);
        saveToStorage();
    }
}


// Prepares the form for editing 

function editProduct(index) {
    const product = products[index];
    
    // Fill inputs
    nameInput.value = product.name;
    priceInput.value = product.price;

    // Change button UI
    editingId = product.id;
    addBtn.textContent = "Save Product";
    addBtn.style.backgroundColor = "#ffc107";
    addBtn.style.color = "black";

    showMessage("Editing: " + product.name, "success");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// BATCH SYNCHRONIZATION 

syncBtn.addEventListener("click", async () => {
    syncBtn.disabled = true;
    syncBtn.textContent = "Syncing...";
    showMessage("Syncing data with server...", "success");

    let successCount = 0;

    try {
        for (const product of products) {
            const checkResponse = await fetch(`${API_URL}/${product.id}`);
            
            if (checkResponse.ok) {
                // Update existing
                await fetch(`${API_URL}/${product.id}`, {
                    method: "PUT",
                    body: JSON.stringify(product),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                });
            } else {
                // Create new
                await fetch(API_URL, {
                    method: "POST",
                    body: JSON.stringify(product),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                });
            }
            successCount++;
        }
        console.log("Sync successful. Items processed:", successCount);
        showMessage(`Sync complete! ${successCount} items processed.`, "success");

    } catch (error) {
        console.error("Sync error:", error);
        showMessage("Sync error. Check server connection.", "error");
    } finally {
        syncBtn.disabled = false;
        syncBtn.textContent = "Sync with API";
    }
});

// Start application
loadFromStorage();
