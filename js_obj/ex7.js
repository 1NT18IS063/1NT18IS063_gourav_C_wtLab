let names = {
    fname: "Mohan",
    lname: "Kumar"
}
console.log(names.fname);
console.log(names.hasOwnProperty("mname"));
console.log(names);
//Object.create
function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("ramu", 10);
console.log(bingo);
console.log(constructorObject.speak());

//Usage of new keyword
function DogObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.prototype.speak = function() {
    return "I am a dog";
}
let john = new DogObject("John", 45);
console.log(DogObject.prototype.speak());

/*The _ _proto_ _ references the Animals prototype (which in turn references
the Object prototype)
From this, we can see that the constructor defines the major features 
while everything outside the constructor (sing() and dance()) are the 
bonus features (prototypes).*/

class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo.sing());
console.log(bingo.dance());

function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}
Animals.prototype.sing = function(){
    return `${this.name} can sing`;
}
Animals.prototype.dance = function() {
    return `${this.name} can dance`;
}

let Bingo = new Animals("Bingo", "Hairy");
console.log(Bingo.sing());
console.log(Bingo.dance());

/*Let's see how subclasses are done with class.
Here, we need a parent which the subclass inherits from. 
Examine the following code:*/
class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
} 
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");
console.log(clara.sing());
console.log(clara.whiskers());
