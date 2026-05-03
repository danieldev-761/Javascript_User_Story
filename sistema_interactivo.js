// Javascript User Story 1: Interactive System

function interactiveSystem() {
    // First, we ask the user for their name and greet them.
    const name = prompt("What's your name?"); //This line prompts the user to enter their name, which is then stored in a variable called `name`.
    alert(`Hello ${name}! Welcome to the interactive system.`); //This line displays an alert message 

    const age = prompt("How old are you?"); //This line prompts the user to enter their age, which is then stored in a variable called `age`.


    // The system converts the user's prompt into a number
    const ageNumber = Number(age);

    //Next, the system checks whether the entered age is a number or not. Returns True or False. 
    if (!isNaN(ageNumber)) {

        //If the user is of legal age (18 or older), the system will greet them with a personalized message 
        if (ageNumber >= 18) {
            alert(`Hi ${name}, you're of legal age. Get ready for some great opportunities in the world of programming!`);
            console.log(`User ${name} is of legal age: ${ageNumber}`); //Simple console log to keep track of the user's age in the console.

        // If the user is underage (less than 18), the system will encourage them to keep learning
        } else {
            alert(`Hi ${name}, you're underage. Keep learning and having fun with coding!`);
            console.log(`User ${name} is underage: ${ageNumber}`); //Simple console log to keep track of the user's age in the console.
        }
    }

    //If the user enters something that is not a number, the system will show an error message
    else {
        console.error("Error: Please enter a valid age using numbers.");
    }
}
