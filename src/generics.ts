// Define a placeholder Type with syntax <T>
// then enforce it when using the element
// USED to build REUSABL COMPONENTS

/**
 * Example : i want to generate array of strings , array of numbers , array of booleans (These are 3 functions if you think of it)
 * They dont have to be 3 functions so i want an array generator function
 * it can generate an array of strings , numbers, floats  or booleans
 * Gonna have to take Type of Any , BUT this is too open
 * What if we could define a Type placeholder (GENERIC), but when calling the function we restrict it to a certain Type
 */


// THIS IS WAY TOO OPEN
function getArray(items:any[]):any[] {
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4])
// because of TYPE OPENESS , i can push strings into a number array(This is not good)
numArray.push("Hello String")

// Approach 2
function getArrayFunc<T>(items:T[]):T[] {
    return new Array().concat(items);
}

let numbersArray = getArrayFunc<number>([123456]);
let stringsArray = getArrayFunc<string>(["Heelo","morning","hi"])