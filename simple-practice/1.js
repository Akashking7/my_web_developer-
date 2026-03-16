// Question 3️⃣ (Loop Method)

// Find the missing number from 1 → n using a loop.

// const arr = [1, 2, 3, 5, 6];
// const n = 6;

// Expected numbers:

// 1 2 3 4 5 6

// But the array is:

// 1 2 3 5 6

// So one number is missing.

// Rule

// Use this logic:

// 1️⃣ Loop from 1 to n
// 2️⃣ Check if the number exists in the array
// 3️⃣ If not → print it

// You may use:

// for loop

// includes() method

const arr = [1, 2, 3, 5, 6];
const n = 6;

for (let i = 1; i <= n; i++){
    if (!arr.includes(i)) {
        console.log(i);
    }
}