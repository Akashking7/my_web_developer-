//Fibonacci Challenge

//Fibonacci series:

//0, 1, 1, 2, 3, 5, 8...

function fibonacciGenerator(n) {
    
    var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1]);
    }
  }

  return output;
}

console.log(fibonacciGenerator(6));

Output:

[0,1,1,2,3,5]