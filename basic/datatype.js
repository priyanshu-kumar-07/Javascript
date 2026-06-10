"use strict"; //treat all js code as newer version
// alert(3 + 4); //7  we are using nodejs not browser so we use console.log instead of alert
// alert("3" + "4"); //34
// alert("3" + 4); //34
// alert(3 + "4"); //34
let isloggedIn = true;
let age = 23;
let state ;

console.table([3 + 4, "3" + "4", "3" + 4, 3 + "4"]); //7

/*
Data types (Primitives)
1. String - sequence of characters, enclosed in single or double quotes
2. Number- can be integer or floating point 2 to power 53
3. Boolean- can be true or false
4. Null-   represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
5. Undefined-   represents the absence of a value
6. Symbol (new in ES6)-   represents a unique identifier
*/
//NUll is object type
console.log(typeof state); //undefined