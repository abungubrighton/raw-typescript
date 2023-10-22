// basic Data types
let id: number =  20;
let  company: string = 'Google Inc';
let isRequired: boolean = false;
// any can take , any of the basic types
let  x: any = "hello world";
x= 20;
// LIST
let ids: number[] = [1,3,3,4];
// any array type
let  arr: any[] = [1,"hello world",true];

// TUPLE , can specify the data of each value in the array before hand
let person:[number,string,boolean] = [1,"hello world",true];

// ARRAY OF TUPLES

let  employee:[number,string][];
employee = [
    [1,"John Smith"],
    [2,"Hannah Smith"],
    [3,"Kelvin Smith"],
]
// UNION --> If you have a variable that can hold more than ONE TYPE, eg. employeeID,productId

let  productID: string| number;
productID = "1ZXRY45";

// ENUM (Enumerated Types) -> define a set of NAMED CONSTANTS , either String or Numbers

enum Direction1  {
    Up,
    Down,
    Left,
    Right
}

console.log("UP", Direction1.Up)

enum Direction2  {
    Up=1,
    Down,
    Left,
    Right
}

console.log("UP", Direction2.Up)

enum Direction3  {
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}

console.log("UP", Direction3.Up)


// OBJECTS


const user:{id:number, name:string} = {id:1,name:"john hoods"} // messy way to do it
// cleaner way
type EmployeeObj = {id:number, name:string}

const employee1: EmployeeObj ={
    id:1,
    name:"Julias"
}

// TYPE ASSERTION -> Tell the compiler to treat an entity as a  certain type 
// Example , we bave CID (customer Ids of different variations)
let  cid:any = 1;

let customerId = <number>cid;// customerId is a variant of cid that takes only numbers


