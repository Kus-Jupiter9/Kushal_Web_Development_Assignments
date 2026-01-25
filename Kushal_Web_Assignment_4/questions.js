// Question 1: function to check if the number is odd or even
console.log("Question 1");
function check_even_odd(n) {
  // n --> static input
  // the number is even if it is divisble by 2
  if (n % 2 == 0) {
    console.log(n, "is even");
    // the number is odd if it is not divisible by 2
  } else {
    console.log(n, "is odd");
  }
}
// calling the function
check_even_odd(5); // for testing odd
check_even_odd(2); // for testing even

// Question 2: javascript function to display multiplication table
console.log("Question 2");
function multiplication_table(n) {
  // n --> static input
  // using for loop to generate tables
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
// calling the function
multiplication_table(3); // multiplication table of 3

// Question 3: function to solve FizzBuzz challenge
console.log("Question 3");
function fizz_buzz() {
  // for loop to iterate from 1 to 20
  for (let i = 1; i <= 20; i++) {
    // Check if divisible by both 3 and 5 first
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      // check if divisible by 3
    } else if (i % 3 == 0) {
      console.log("Fizz");
      // check if divisible by 5
    } else if (i % 5 == 0) {
      console.log("Buzz");
      // print the number itself if condition is not met
    } else {
      console.log(i);
    }
  }
}
// calling the function
fizz_buzz();

// Question 4: function to print right angled triangle
console.log("Question 4");
function right_triangle(n) {
  // n --> number of rows
  // number of rows must be positive
  if (n <= 0) {
    console.log("Invalid Input");
    // terminate the program if invalid input
    return;
  }
  // outer loop: column
  for (let i = 1; i <= n; i++) {
    // defining row
    let row = "";
    // inner loop: rows
    for (let j = 1; j <= i; j++) {
      // core logic: print stars equal to row number in each row
      row += "*";
    }
    console.log(row);
  }
}
// calling the function
right_triangle(7);
