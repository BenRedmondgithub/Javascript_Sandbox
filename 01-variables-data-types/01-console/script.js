console.log("Hello World!!!")

const x = 100;

console.log(x);

console.error("This is an error message");

console.warn("Warning!!!!")

console.time("Timer");
for (let i = 0; i < 1000000; i++) {
    // Simulating some work
}
console.timeEnd("Timer");

console.group("Group 1");
console.log("This is the first message in Group 1");
console.table({name: "John", age: 30, city: "New York"});
console.log("This is the second message in Group 1");

console.group("Group 2");
console.table({name: "Jamies", age: 25, city: "Los Angeles"});
console.log("This is the first message in Group 2");
console.groupEnd();

const style = "color: white; font-size: 20px; background-color: green; padding: 10px; border-radius: 15px;";
console.log("%cThis is a styled message", style);