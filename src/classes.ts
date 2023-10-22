/* classes are used to define objects
These objects do have , properties and methods(behaviors)
*/


class Person{
    id:number
    name:string

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    };
}


// instanciating  Person class
const john = new Person(1, "John")
const allan = new Person(2, "Allan")


//////////////////////////// ACCESS MODIFIERS ////////////////////////////////////
/**
 * Access Modifiers: define how class/object properties can be accessed
 * PUBLIC: class properies are always public by default , meaning they can be accessed and modified anyhow anywhere
 * PRIVATE: private properies can only be accessed from WITHIN the class
 * PROTECTED: Protected properties can only be accessed from WITHIN the class and any class that EXTENDS the parent
*/


class   Animal{
    private name:string
    protected numberOfLegs:number

    constructor(name:string, numberOfLegs:number) {
        this.name = name;
        this.numberOfLegs = numberOfLegs;
    };
}



const zebra = new Animal("Zebra",4);



///////////////////////////CLASS/OBJECT METHODS/////////////////////////////////////
/**
 * Define the behaviour of a class/object, (capabilities)
 * Example: an Employee can ask for their salary report , we will have a function , getSalaryReport(), john.getSalaryReport
 * Example: a Person can Dance ==> hannah.dance()
 */


class Employee {
    name:string
    salary:number
    age?: number
    constructor(name:string,salary:number,age:number){
        this.name = name
        this.salary = salary
        this.age = age
    }


    getSalaryReport(){
        return `${this.name} gets paid ${this.salary}`
    }
}


const tim = new Employee("Tim COock",25000,12)
tim.getSalaryReport()
console.log(tim.getSalaryReport())


/////////////// CLASS INTERFACES /////////////////

/**
 * Class interfaces define the structure of their class
 * Says " I want my class to have these properties , with these datatypes"
 * "I also want it to have these methods/functions , that take these params and return that"
 */


interface UserInterface {
    id:number
    name:string
    register():string // register method which does not take any arguments, but returns a string
}


class Uzer implements UserInterface{
    id:number
    name:string


    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name } is now Registered`
    }
}



///////////// CLASS EXTENDING (SUBCLASSING)///////////////////
/**
 * Extend properties and methods of the parent class
 * the one being extendend is the PARENT CLASS
 * the other is the SUBCLASS
 */

class EmployeeZ extends Uzer{
    position:string
    constructor(id:number, name:string, position:string){
        super(id,name)
        this.position = position
    }
}


const employeeZ1 = new EmployeeZ(20,"John","Developer");