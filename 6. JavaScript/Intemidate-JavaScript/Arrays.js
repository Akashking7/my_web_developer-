var fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Apple

//======================


// Adding Elements to Array

var names = ["Akash", "Rahul"];

names.push("Ankit");  // Add to end
names.pop();          // Remove last

console.log(names.length); // Array size

//========================

// Who's Buying Lunch (Random from Array)

var names = ["Akash", "Rahul", "Ankit"];

var randomPerson = Math.floor(Math.random() * names.length);

console.log(names[randomPerson] + " will buy lunch!");