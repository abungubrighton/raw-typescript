// more like a custom type
// can define SPECIFIC STRACTURE to an OBJECT or FUNCTION
// SAYS: "This is how i want my Function/Object/Dictionary to look like"

// example of custom type
type User = {
    id:number;
    name:string;
}


// use
const user1: User = {
    id:1,
    name: "John",
}


// example of INTERFACE
interface UserInterface {
    id:number;
    name:string;
}

// use

const user2: UserInterface = {
    id:2,
    name: "John",
};

///////////// TYPES VS INTERFACES  ///////////////////

/**
 * TYPES can be used with primitives  or unions BUT interfaces can not
 * be used with
 */
type Point = number | string;
// CANT HAVE : interface Point = number | string;

const point1: Point = 1;


///////////////////// OPTIONAL PROPERTIES ///////////////////////////////////////////

interface EmployeeInterface {
    employeeId:number
    name:string
    age?:number
    salary?:number
}


///////////////////// READ ONLY PROPERTIES (Can not be changed) ///////////////////////

interface EmployerInterface{
    name:string
    age:number
   readonly salary:number
}

const employer1:EmployerInterface ={
    name:"Johnny",
    age:20,
    salary:200000
}

// NOTE: CANT change  salary as in:  employer1.salary = 250000


///////// FUNCTION INTERFACE ////////////
/** Says
 * "This is how i want my function to llok like (define function structure)"
 */

interface MathFunc {
    /** Any function that implements MathFunc interface 
     * should take in two arguments , both numbers and return a number
     */
    (x:number, y:number):number
}


// add is an arrow function that implements MathFunc interface
const add:MathFunc =(x:number , y:number):number => x + y;
const sub:MathFunc =(x:number , y:number):number => x - y;

