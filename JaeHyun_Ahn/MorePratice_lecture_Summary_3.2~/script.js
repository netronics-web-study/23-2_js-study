// can bring HTML elements using class, tag, etc.
const using_tag = document.getElementsByTagName("h1");
const using_class = document.getElementsByClassName("pr2");

console.log(using_tag);
console.log(using_class);

// can bringHTML elements using class and tag
// Here, use CSS selector like '.pr2'
const using_query1 = document.querySelector(".pr2 h3");
const using_query2 = document.querySelector(".pr3 h3");

console.log(using_query1);
console.log(using_query2);
