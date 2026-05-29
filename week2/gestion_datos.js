

// Each product contains: id, name, and price.


const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 },
    { id: 4, name: "Monitor", price: 300 }
];

console.log("--- TASK 1: Products Object ---");
console.log(products);


// Demonstrates automatic deduplication and basic Set methods.


// Create a Set with duplicate values
let uniqueNumbers = new Set([10, 20, 30, 20, 40, 10, 50]);

console.log("\n--- TASK 2: Set Operations ---");
console.log("Initial Set (duplicates automatically removed):", uniqueNumbers);

// Add a new number using .add()
uniqueNumbers.add(60);
console.log("Set after adding 60:", uniqueNumbers);

// Verify if a specific number exists using .has()
const checkValue = 30;
console.log(`Does the Set contain ${checkValue}?`, uniqueNumbers.has(checkValue));

// Remove a number using .delete()
uniqueNumbers.delete(40);
console.log("Set after deleting 40:", uniqueNumbers);

// Traverse the Set using for...of
console.log("Iterating over Set values:");
for (let num of uniqueNumbers) {
    console.log(`Value: ${num}`);
}


// Relates product category (key) to product name (value).

const productCategories = new Map();
productCategories.set("Electronics", "Laptop");
productCategories.set("Peripherals", "Mouse");
productCategories.set("Accessories", "Keyboard");
productCategories.set("Display", "Monitor");

console.log("\n--- TASK 3: Product Categories Map ---");
console.log(productCategories);


// Demonstrates for...in, for...of, forEach(), and Object methods.

console.log("\n--- TASK 4: Iteration Examples ---");

// for...in to list properties and values of an object (the first product)
console.log("Iterating over the first product object using for...in:");
const firstProduct = products[0];
for (let key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// for...of to traverse the Set
console.log("\nIterating over the Set using for...of again:");
for (let value of uniqueNumbers) {
    console.log("Set item:", value);
}

// Use forEach() to traverse the Map
console.log("\nIterating over the Map using forEach():");
productCategories.forEach((value, key) => {
    console.log(`Category (Key): ${key} -> Product (Value): ${value}`);
});

// Demonstrate Object methods: keys, values, and entries
console.log("\nUsing Object methods on the second product:");
const secondProduct = products[1];
console.log("Object.keys():", Object.keys(secondProduct));
console.log("Object.values():", Object.values(secondProduct));
console.log("Object.entries():", Object.entries(secondProduct));



//  Ensures each product has valid id, name, and price.

console.log("\n--- TASK 5: Validation and Testing ---");

/**
 * Validates a product object.
 * @param {Object} product - The product to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */

function validateProduct(product) {
    const hasId = product.id !== undefined && product.id !== null;
    const hasValidName = typeof product.name === "string" && product.name.trim() !== "";
    const hasValidPrice = typeof product.price === "number" && product.price > 0;

    return hasId && hasValidName && hasValidPrice;
}

// Perform validations on the products list
const validProducts = products.filter(product => {
    if (validateProduct(product)) {
        return true;
    } else {
        console.warn(`Invalid product found:`, product);
        return false;
    }
});

// Final outputs 
console.log("Complete list of valid products (Objects):");
console.table(validProducts);

console.log("\nList of unique numbers (Set):");
console.log([...uniqueNumbers]); // Converting to array for clear view

console.log("\nCategories and product names (Map):");
productCategories.forEach((value, key) => {
    console.log(`Category: ${key} | Product: ${value}`);
});
