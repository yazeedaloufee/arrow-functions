'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.



let sum = function(a, b, c, d) {
  return a + b + c + d;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));

const sum1 =(a,b,c,d)=>a+b+c+d;
console.log('the sum using arrow function',sum1(1,2,3,4));


let objectLit = function() {
  return {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(objectLit());

const objectlit1 =()=>({key1:'value1',key2:"value2",key3:"value3"});
console.log("object using arrow function",objectlit1());


let sumAndProduct = function(a, b) {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));
const sumAndProduct1=(a,b)=>[a+b,a*b];

  console.log("sum and product using arrow function",sumAndProduct1(3, 9));


let message = function(name) {
  return `Hello, ${name}!`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));

const message1=name=>`Hello,${name}!`;

console.log("message using arrow function",message1('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe', 'Schmoe', 100);

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);
// arrow functions cannot be used as constructors

// const Student1=(name,age,hometown)=>({this.namename;this.age=age;this.hometown=hometown;});


// TODO: After viewing the previous console.log(), return the code to a working state.



Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());
Student.prototype.greeting1=()=>`Hi, my name is ${this.name}`;

console.log("greeting 1",joe.greeting1());//output is not correct, it cannot identify the this 
// TODO: After viewing the previous console.log(), return the code to a working state.



Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};
//we are not using this so i think this function will work properly when changed to an arrow function

Student.courseName1=()=>'This student is enrolled in Code 301';
// TODO: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());
console.log("an arrow function>>",Student.courseName1());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log("testing this",this);
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log("testing this",joe.scope());

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(joe.scopeArrow());

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
// an object of type Student 
//
// 2. What is "this" when joe.scopeArrow() is invoked?
//the windows object
// 3. Explain why "this" is different when an arrow function is used.
//because it Does not have its own bindings to "this",Arrow functions do not have their own this.
