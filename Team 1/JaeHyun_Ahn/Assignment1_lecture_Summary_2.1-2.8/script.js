// if use 'const', can't update variable's information
const helloForOne = "hello ~";

// if use 'let', can update variable's information
let helloForEveryOne = "hello";

// There can deal with string like python
helloForEveryOne += " everyone ~";

// 'var' has no rules, so don't usually use it.

// alert(variable or value) function make the page popup;

// other data type
// null state is same state to undefined, but it can't become on natural state
const a = null;
const b = true;
const c = false;

// here is undefined value
let d;

// array
// index starts "0"
arr = [1, 2, "one", "two", 1.0, 2.0, true, false, null, undefined];

// new object(instance)
// if make object using const, can't replace other value in this object name
const new_player1 = {
  name: "jin",
  age: 23,
  sex: "M",
};

let new_player2 = {
  name: "Amy",
  age: 21,
  sex: "F",
};

console.log(new_player1);
console.log(new_player2);

// can append in object like this even if this object is constant
new_player1.fullName = "Lone";
new_player2.fullName = "Londa";
