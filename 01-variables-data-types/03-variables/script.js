// Ways to declare a variable
// var, let, const

let first_name = "Jamies";

let last_name = "Smith";

let age = 30;

console.log(first_name, last_name, age); 

age = 31;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 5;
}

console.log(score);

const x = 10;

const arr = [20, 30, 40, 50];

console.log(x, arr);


let button = document.getElementById("myBtn");

let clickCount = 0;

button.addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        console.log("Button clicked once");
        button.style.background = "red";
    }
    else if (clickCount === 2) {
        console.log("Button clicked twice");
        button.style.background = "blue";
    }
    else if (clickCount === 3) {
        console.log("Button clicked thrice");
        button.style.background = "green";
    }
    else {
        console.log("sir/ma'am you have clicked too much, go home");
        clickCount = 0;
        button.style.background = "";
    }
    console.log("Click count: " + clickCount);
});


// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase
