# Week 4: Integrated Product Manager (CRUD & API)

This is the final project for Module 3. it integrates DOM manipulation, Local Storage, and asynchronous communication with an API using Fetch and `async/await`.

## Objectives
- Build a complete web application from scratch.
- Use `Fetch API` for CRUD operations (GET, POST, PUT, DELETE).
- Handle asynchronous code using `try...catch` and `async/await`.
- Maintain data persistence using `Local Storage`.
- Dynamically update the UI based on user interaction and server responses.

## Features
1. **Full CRUD**: 
   - **Create**: Add products locally.
   - **Read**: Load data from Local Storage or fetch initial data from the API.
   - **Update**: Edit existing products (simulated PUT request).
   - **Delete**: Remove products (simulated DELETE request).
2. **Offline Support**: Data is saved to `Local Storage`, so it persists after refreshing.
3. **API Synchronization**: A "Sync" button to simulate sending local data to a remote server (POST).
4. **Input Validation**: Ensures all fields are filled before adding.

## How to use
1. Open `index.html` in your browser.
2. If it's your first time, the app will fetch 3 items from JSONPlaceholder automatically.
3. Add your own products using the form.
4. Use the **Edit** and **Delete** buttons to manage the list.
5. Click **Sync with API** to see simulated POST requests in the **Network** tab of your browser's Developer Tools (F12).

## Project Structure
- `index.html`: The user interface and internal CSS.
- `app.js`: The engine of the app handling DOM, Storage, and Fetch.

## Author
- Daniel Echeverría - Coder Riwi
