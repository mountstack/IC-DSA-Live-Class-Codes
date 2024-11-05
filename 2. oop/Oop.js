

class Person { 
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }


    static display(name, age) {
        const obj = new Person(name, age); 
        console.log(`My name is ${obj.name} and age is ${obj.age}`);
    }
}


Person.display("Rijwan", 27); 



