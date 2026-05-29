# Week 3: DOM Manipulation & Local Storage Notes App

This project is a simple note-taking application designed to practice dynamic DOM management, browser storage, and basic styling.

## Objectives
- Add and remove elements from the DOM using `appendChild` and `removeChild`.
- Select elements using different methods like `getElementById` and `querySelector`.
- Modify element content using `textContent`.
- Persist data across page reloads using `Local Storage`.
- Apply basic CSS to improve the user interface.

## Features
1. **Dynamic List**: Add notes by typing in the input field and clicking "Agregar".
2. **Instant Deletion**: Remove any note by clicking its "Eliminar" button.
3. **Data Persistence**: Your notes are saved automatically. Even if you refresh the page, they will still be there.
4. **Validation**: Prevents adding empty notes with a simple alert.
5. **Basic Styling**: A clean and modern look using CSS.

## How to use
1. Open `manipulacion_dom.html` in any web browser.
2. Open the **Developer Tools (F12)** to see the console logs confirming:
   - Initial element selection.
   - When a note is added.
   - When a note is deleted.
   - How many notes were loaded from storage on startup.

## Project Structure
- `manipulacion_dom.html`: The HTML structure of the app.
- `style.css`: Basic styles for a better look and feel.
- `app.js`: The JavaScript logic for handling interactions and storage.

## Author
- Daniel Echeverría - Coder Riwi
