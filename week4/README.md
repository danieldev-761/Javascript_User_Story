# M3S4: Integrated Product Manager (CRUD & API)

This project represents the culmination of Module 3, integrating advanced JavaScript concepts such as dynamic DOM manipulation, Local Storage persistence, and robust API communication.

## Features

1.  **Full CRUD Operations**:
    *   **Create**: Add products with real-time numerical validation.
    *   **Read**: Automatic synchronization between Local Storage and the API.
    *   **Update**: Integrated editing mode within the main form (no prompts).
    *   **Delete**: Explicit removal of items using `removeChild` for optimal DOM management.
2.  **Dynamic Messaging System**: Success and error feedbacks are rendered directly in the DOM, replacing standard browser alerts for a modern UX.
3.  **Intelligent Batch Sync**: A synchronization mechanism that detects existing items to perform either `POST` (create) or `PUT` (update) requests, preventing data duplication.
4.  **Local Persistence**: State is maintained across sessions using `localStorage`, ensuring a seamless user experience.
5.  **Clean Code**: Implemented using ES6+ standards (`async/await`, `const/let`, Arrow functions) and structured with professional documentation.

## Tech Stack
*   **HTML5 / CSS3**: Modern layout and responsive feedback styles.
*   **JavaScript (ES6+)**: Core logic and asynchronous operations.
*   **JSON Server**: Local REST API simulation for full CRUD functionality.

## Installation & Setup

1.  **Clone the repository** (if applicable) and navigate to the `week4` directory.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the Local API**:
    In the `week4` folder, run:
    ```bash
    npx json-server --watch db.json
    ```
4.  **Launch the App**: Open `index.html` in your favorite browser.

## How to Use

*   **Adding**: Fill in the "Product Name" and "Price", then click **Add Product**.
*   **Editing**: Click **Edit** on any item. The form will switch to "Save Product" mode and highlight in yellow. Update the fields and click **Save**.
*   **Deleting**: Click **Delete** and confirm the action. The item will be removed from the DOM and the API.
*   **Syncing**: Click **Sync with API** to push all local modifications and new additions to the server at once.

## Project Structure
- `index.html`: Main structure and UI containers.
- `style.css`: Modern styling and message feedback classes.
- `app.js`: Core logic (DOM, Storage, Fetch API).
- `db.json`: Local database file for the API.

## Author
- **Daniel Echeverría** - Coder Riwi
