// Use `.map()` to iterate over the following array:
// Create a new array where each value is multiplied by 2 and log the new array.

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const nums2 = nums.map(num => num * 2)
console.log("#1", nums2)

// Given the following array, use destructuring to pull out the first and second values and place them 
// into variables. Log both variables.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']
const [firstTopping, secondTopping] = pizzaToppings;
console.log("#2", firstTopping, secondTopping)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the 
// respective values.
const car = {
    make: 'Audi',
    model: 'q5',
  };
const { make, model } = car
console.log("#3", make, model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. 
// Then, log the variable.
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings]
console.log("#4", controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.
//const car = {
    //make: 'Audi',
    //model: 'q5',
  //};
// Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCar = car
myCar.model = 'q7'
console.log("#5", 'Clone', myCar)

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
  const propertyName = 'username'
  const userProfile = {
    [propertyName]: 'JohnDoe123'
  }
  console.log("#6", userProfile)

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the 
// appropriate parameters when supplied arguments.
  function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log("#8", `The ${noun} is ${adjective}.`);
  }
  describeAnimal()

// Convert the following `if...else` statement in to a ternary:
// let pizza = 'tasty';
// if (pizza === 'tasty') {
//  console.log('yum');
// } else {
//  console.log('yuck');
// }  
const pizza = 'tasty'
pizza === 'tasty' ? console.log("#9", 'yum') : console.log("#9", 'yuck')

// 1. SET LANGUAGE
// Construct a single line of code that assigns a default value using the logical OR operator. 
// This line should match the logic of the following statement: 
// "LANG is equal to localLangConfig or the default value of English."

// const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Log the result
const localLangConfig = null; 
const LANG = localLangConfig || 'en';
console.log("#10",'Language setting:', LANG);

//Now, let’s try this same pattern for setting a users website theme.
// 2. SET WEBSITE THEME

//const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light';
console.log("#10.5",'Website theme:', USER_THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that 
// it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  let cat = adventurer.cat?.age;
  console.log("#11", cat);