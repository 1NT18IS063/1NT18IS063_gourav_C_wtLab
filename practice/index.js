console.log("Gaurav");
var car = {
    type: "VOLVO",
    model: "500",
    color: "white"
};
document.getElementById("id1").innerHTML = "The car type is " + car.type + car["model"];

var person = {
    firstName: "Gaurav",
    lastName: "Mishra",
    id: 063,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("id2").innerHTML = person.fullName();

let displayDate = () => {
    document.getElementById("id4").innerHTML = Date();
}

function noOfLetters() {
    let name = prompt("Please enter your name to know number of characters");
    alert("number is " + name.length);
}

let x = "We are the so called \' Faculty \' from nmit";
document.getElementById("id5").innerHTML = x;

let name = "Gaurav";
let y = new String("Gaurav");
document.getElementById("id6").innerHTML = (name === y);

let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate");
let pos1 = str.lastIndexOf("locate")
let pos2 = str.indexOf("locate", 15);
let pos3 = str.lastIndexOf("locate", 15);
document.getElementById("id7").innerHTML = pos + " and " + pos1 + "and" + pos2 + "and" + pos3;

let str1 = "Apple, Lichi , Kiwi";
let res = str1.slice(7, 13);
let res1 = str1.slice(-12, -6);
let res2 = str1.slice(7);
document.getElementById("id8").innerHTML = res + " and " + res1 + " and " + res2;


document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Welcome to js";
  });


function myFunction() {
  var person = prompt("Please enter your name", "Gaurav Mishra");
  if (person != null) {
    document.getElementById("demo1").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
