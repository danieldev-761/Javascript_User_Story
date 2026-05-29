// Selecting elements
const noteInput = document.querySelector("#noteInput");
const addBtn = document.querySelector("#addBtn");
const notesList = document.getElementById("notesList");

// Verification log
console.log("Elements selected:", { noteInput, addBtn, notesList });

// Persistent storage setup
let notes = [];
const savedNotes = localStorage.getItem("notas");

// Load existing notes from Local Storage
if (savedNotes) {
    notes = JSON.parse(savedNotes);
    console.log(`Loaded ${notes.length} notes from storage.`);
}

// Function to create and show a note in the list
function createNoteElement(text, index) {
    const li = document.createElement("li");
    li.textContent = text;

    //Delete button for each note
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn"
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = function() {
        // Remove from array
        notes.splice(index, 1);
        // Update Local Storage
        localStorage.setItem("notas", JSON.stringify(notes));
        // Remove from DOM using removeChild
        notesList.removeChild(li);
        console.log("Note deleted");
    };

    //  Insert elements into the list
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
}

// Render initial notes
notes.forEach((note, index) => createNoteElement(note, index));

//  Add note logic
addBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();

    // Validation
    if (text === "") {
        alert("Please write something first!");
        return;
    }

    // Update data
    notes.push(text);
    localStorage.setItem("notas", JSON.stringify(notes));

    // Update DOM
    createNoteElement(text, notes.length - 1);
    
    // Clear input
    noteInput.value = "";
    noteInput.focus();
    console.log("Note added");
});
