# JavaScript User Story: Module 3 Journey

Welcome to the comprehensive repository for **Module 3: Advanced JavaScript**. This project documents the progression from fundamental user interaction to building a fully integrated web application with browser persistence and API synchronization.

## Module Overview

This module is divided into four weeks, each focusing on a core set of JavaScript skills:

### [Week 1: Interactive Greeting System](./week1)
- **Objective**: Basic interaction and logic.
- **Key Concepts**: `alert()`, `prompt()`, template literals, and conditional statements (`if/else`).
- **Project**: A system that validates age and provides personalized encouraging messages.

### [Week 2: Data Management](./week2)
- **Objective**: Mastering modern data structures.
- **Key Concepts**: Objects, `Set` (uniqueness), `Map` (associations), and advanced iteration (`for...in`, `for...of`, `forEach`).
- **Project**: A product data validator using multiple collection types to ensure unique and well-formatted data.

### [Week 3: DOM & Local Storage](./week3)
- **Objective**: Dynamic interfaces and browser persistence.
- **Key Concepts**: DOM API (`appendChild`, `removeChild`), Event Listeners, and `Local Storage`.
- **Project**: A functional Notes App that saves your thoughts even after closing the browser.

### [Week 4: Integrated CRUD Web App](./week4)
- **Objective**: Putting it all together with external APIs.
- **Key Concepts**: `Fetch API`, `async/await`, error handling (`try/catch`), and full CRUD operations (GET, POST, PUT, DELETE).
- **Project**: "Product Manager" – A complete application that synchronizes local data with a JSON Server.

## Current Status of `week4`
- `index.html`, `app.js`, `style.css`, and `db.json` are all present and linked.
- The app captures user input from the DOM, validates name and price, and shows success/error feedback in the page.
- Products are rendered dynamically with `<li>` elements, and each item includes **Edit** and **Delete** buttons.
- Local persistence is enabled with `localStorage`, and saved data is restored on refresh.
- The app uses a local API simulation via `json-server` and performs **GET**, **POST**, **PUT**, and **DELETE** operations through the sync process.

## What is still worth improving
- The API is currently a local JSON Server simulation, not a public API. If the starter data does not fit your story, replace `week4/db.json` with your own products.
- The app saves edits locally first and then sends the API update when you click **Sync with API**. This is valid, but it means the server is updated only after manual sync.
- The current `db.json` starter data includes three product items. You can change them to any real product names and prices.
- To fully verify the story, test the app by:
  1. Adding items.
  2. Editing items.
  3. Deleting items.
  4. Confirming the DOM updates.
  5. Confirming `localStorage` contains the product list.
  6. Clicking **Sync with API** and verifying the server logs.

## How to Run `week4`
1. Open `week4` folder.
2. Run:
```bash
npm install
```
3. Start the JSON Server:
```bash
npx json-server --watch db.json
```
4. Open `week4/index.html` in your browser.

## Technologies Used
- **Language**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3
- **Storage**: Browser Local Storage
- **API**: Local JSON Server simulation

## Author
- **Daniel Echeverría** - Coder at Riwi

## Github Repository

- Link: https://github.com/danieldev-761/Javascript_User_Story

---
*This project was developed as part of the Riwi Training Program.*
