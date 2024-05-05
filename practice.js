/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.
*/

/*
  SECTION 1: CALLBACKS

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  const sayHi = function(str, cb) {
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as its argument.
  Return the result of invoking the callback.
*/

// Code Here

// Do not edit the code below.
const names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

// Your function is called here
first(names, function (firstName) {
  console.log('The first name in names is ' + firstName);
  return firstName;
});
// Do not edit the code above.

////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function.
  Then invoke the callback, passing in the last element in the array as the argument.
  Return the result of invoking the callback.
*/

//Code Here

// Do not edit the code below.
// Your function is called here
last(names, (lastName) => {
  console.log('The last name in names is ' + lastName);
  return lastName;
});
// Do not edit the code above.

////////// PROBLEM 3 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.
  Invoke the callback, passing in the product of the two numbers multiplied as the argument.
*/

//Code Here

// Do not edit the code below.
// Your function is called here
multiply(4, 3, function (answer) {
  console.log('The answer is ' + answer); //should console.log 12
});
// Do not edit the code above.

////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.
  Check if the name exists in the array.
  If it does, invoke the callback with true as the argument.
  If the name does not exist, invoke the callback with false as the argument.
*/

//Code Here

// Do not edit the code below.
// Your function is called here
contains(names, 'Colt', (result) => {
  if (result === true) {
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.

////////// PROBLEM 5 //////////

/*
  Write a function called each that takes in an array of names and a callback function.
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

//Code Here

// Do not edit the code below.
// Your function is called here
each(names, (item, index) => {
  console.log('The item in the ' + index + ' position is ' + item);
});
// Do not edit the code above.

////////// PROBLEM 6 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id, and a callback,
  and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here

// Do not edit the code below.
const users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North',
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North',
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North',
  },
];

// Your function is called here
getUserById(users, '16t', (user) => {
  console.log(
    'The user with the id 16t has the email of ' +
      user.email +
      ' the name of ' +
      user.name +
      ' and the address of ' +
      user.address,
  );
});
// Do not edit the code above.

/*
  SECTION 2: HIGHER ORDER FUNCTIONS
*/

/// /////// PROBLEM 7 //////////

// Create a function called evens that takes in an array as a parameter.
// The function should use the filter method to filter over the array parameter and
// return a new array with only the even numbers included.
//
// Make sure to use an arrow function.
// You should not use a for loop, but should use the filter method instead.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 8 //////////

// Create a function called startWithLetterA that takes in an array as a parameter.
// The function should use the filter method to filter over the array of strings and
// return a new array with only the strings that start with the letter "A" or "a".
// The filter is not case-sensitive, so it should return words that begin with both "A"
// and "a".
//
// Make sure to use an arrow function combined with the filter method (not a for loop).

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 9 //////////

// Create a function called formalGreeting which takes in an array of names. It should use
// the built in .map method to map over the names and return a new array with "Hello, "
// appended to the beginning of each name.
//
// Make sure to use arrow functions combined with the map method.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 10 //////////

// Create a function called sortNumbers which takes in an array of numbers and returns
// the numbers sorted from smallest to largest.

// Remember that by default, JavaScript sorts by converting all items to strings. So you
// will need to provide a compare function.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 11 //////////

// Create a function called findProgrammer that uses the filter method to
// filter over the provided employees array of objects.
// The function should return the object of the person with a job as a programmer.
//
// Your returned value should be a single object, not an array with one object inside of
// it.
// Make sure to use an arrow function in conjunction with the filter method (not a for loop).

// Do not edit the code below.
const employees = [
  { name: 'James', job: 'receptionist' },
  { name: 'Steve', job: 'programmer' },
  { name: 'Alicia', job: 'designer' },
];
// Do not edit the code above.

// REPLACE THIS WITH YOUR CODE

////////// PROBLEM 12 //////////

// Do not edit code below.
const orders = [
  { price: 15, tax: 0.09 },
  { price: 42, tax: 0.07 },
  { price: 56, tax: 0.11 },
  { price: 80, tax: 0.11 },
  { price: 69, tax: 0.06 },
  { price: 68, tax: 0.14 },
  { price: 72, tax: 0.14 },
  { price: 51, tax: 0.09 },
  { price: 89, tax: 0.15 },
  { price: 48, tax: 0.13 },
];
// Do not edit code above.

/*
  Using a higher order method, get all the totals from the above orders array after adding in the sales tax.
  Your answer should be an array of numbers, one total for each order.

  Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
  Example: if tax is 0.07, the price afterTax could be calculated like this: afterTax = price * 1.07)
*/

let orderTotals; // Code here

/// /////// PROBLEM 13 //////////

// Do not edit code below.
const exampleMenuItems = [
  { item: 'Caesar salad', price: 6 },
  { item: 'Sirloin steak', price: 24 },
  { item: 'Bottle of fine wine', price: 104 },
  { item: 'Pasta primavera', price: 17 },
];
// Do not edit code above.

// Create a function called sortMenuItems which takes in an array of objects like the one above
// and sorts the array by price from smallest to largest. It should return the sorted array.

// REPLACE THIS WITH YOUR CODE

/// /////// PROBLEM 14 //////////

// Create a function called productOfArray which takes in an array of numbers. It should
// use the built in .reduce method to iterate over the numbers and
// return the product of all the numbers in the array.
//
// Make sure to use arrow functions combined with the reduce method.

// REPLACE THIS WITH YOUR CODE
