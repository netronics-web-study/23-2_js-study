// Include return, function format is same with C
function power(n, x) {
  return n ** x;
}

// prompt function is input function on page
// but now it don't usually use
let age = prompt("Enter your age");
console.log(age);

// how to check variable's data type
// use typeof variable
console.log(typeof age);

// Convert data type
console.log(age, typeof age);
age = parseInt(age);
console.log(age, typeof age);

// NaN mean "Not a Number"

// How to check number or not
// return boolean
console.log(isNaN(age));

// Conditional part... it's just C
if (false) {
  console.log("No");
} else if (false) {
  console.log("No");
} else {
  console.log("Yes");
}

// Logic operator... it's just C
// Logical And : &&
// Logical Or : ||

// HTML is connected with JS yet
// HTML is called 'document'
let h1_sub = document.getElementById("h1_subject");
let h1_str = document.getElementById("subject_strong");

// console.dir() function print more detail info for variable
///// why null value ?
console.dir(h1_sub);
console.dir(h1_str);

// can't print bcs h1_str has null value
console.log(h1_str.className);
