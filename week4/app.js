// Select elements
const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const addBtn = document.getElementById("addBtn");
const syncBtn = document.getElementById("syncBtn");
const productList = document.getElementById("productList");

// Global state
let products = [];
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Local Storage Helpers
function saveToStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

function loadFromStorage() {
    const saved = localStorage.getItem("products");
    if (saved) {
        products = JSON.parse(saved);
        renderProducts();
        console.log("Data loaded from Local Storage");
    } else {
        fetchInitialData(); // GET initial data if storage is empty
    }
}

// GET - Fetch initial data from API
async function fetchInitialData() {
    try {
        const response = await fetch(API_URL + "?_limit=3");
        const data = await response.json();
        // Map API data to our product structure
        products = data.map(item => ({
            id: item.id,
            name: item.title.slice(0, 15),
            price: Math.floor(Math.random() * 100) + 1
        }));
        saveToStorage();
        renderProducts();
        console.log("Initial data fetched from API");
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Render products to the DOM
function renderProducts() {
    productList.innerHTML = ""; // Clear list
    products.forEach((product, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${product.name}</strong> - $${product.price}</span>
            <div>
                <button class="btn-edit" onclick="editProduct(${index})">Edit</button>
                <button class="btn-delete" onclick="deleteProduct(${index}, ${product.id})">Delete</button>
            </div>
        `;
        productList.appendChild(li);
    });
}

// Add new product
addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    // Task 2: Validation
    if (!name || !price) {
        alert("Please fill all fields!");
        return;
    }

    const newProduct = {
        id: Date.now(), // Unique ID
        name: name,
        price: price
    };

    products.push(newProduct);
    saveToStorage();
    renderProducts();
    
    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
    console.log("Product added locally");
});

// DELETE - Remove product
async function deleteProduct(index, id) {
    try {
        // Simulate API delete
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        
        products.splice(index, 1);
        saveToStorage();
        renderProducts();
        console.log("Product deleted (API & Local)");
    } catch (error) {
        console.error("Delete error:", error);
    }
}

//  PUT - Edit product
async function editProduct(index) {
    const newName = prompt("New product name:", products[index].name);
    const newPrice = prompt("New product price:", products[index].price);

    if (newName === null || newPrice === null) {
        return;
    }

    const trimmedName = newName.trim();
    const trimmedPrice = newPrice.trim();

    if (!trimmedName || !trimmedPrice) {
        alert("Please enter both name and price to update the product.");
        return;
    }

    const updatedProduct = {
        ...products[index],
        name: trimmedName,
        price: trimmedPrice
    };

    try {
        // Simulate API update
        await fetch(`${API_URL}/${updatedProduct.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        products[index] = updatedProduct;
        saveToStorage();
        renderProducts();
        console.log("Product updated (API & Local)");
    } catch (error) {
        console.error("Update error:", error);
    }
}

//  POST - Sync all data (Simulated)
syncBtn.addEventListener("click", async () => {
    console.log("Starting sync...");
    try {
        for (const product of products) {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(product),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
        }
        alert("All products synced with the API!");
        console.log("Sync complete");
    } catch (error) {
        console.error("Sync error:", error);
    }
});

// Start app
loadFromStorage();
