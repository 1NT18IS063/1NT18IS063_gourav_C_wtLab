function factorial(){
var num = parseInt(prompt("enter the number"));
var factorial=1;
for( let i = num ; i >= 1; i-- ) {  // for loop
factorial *= i ;
}
alert(factorial);
}

function fibonacci(){
    let num11 = Number(prompt("Enter num"));       // for loop
    var res = "";
for(let temp, i = 0, j = 1; j<num11; temp = i, i = j, j = i + temp)
{
    res += "" + j + "<br>";
}
document.getElementById("ans").innerHTML = res;
}

function positive(){
let num1 = Number(prompt("entern num"));
if (num1>0) {
alert("number is positive");   // if
}
}

function eveodd(){
let num2 = parseInt(prompt("enter value"));
if (num2 % 2 == 0) {   //if-else
alert("Even");
} else {
alert("Odd");
}
}

function checksign(){
let num3=parseInt(prompt("enter num"));
if(num3 > 0) {
alert(num3+" is positive")  //if,else-if,esle
} else if(num3 < 0) {
alert(num3+" is negative")
} else {
alert(num3+" is neither positive nor negative")
}
}

function switchgrade(){
let grade=prompt("Enter value from A-Z");
switch(grade) {   //switch-case
case "A": {
alert("Excellent");
break;
}
case "B": {
alert("Good");
break;
}
case "C": {
alert("Fair");
break;
}
case "D": {
alert("Poor");
break;
}
default: {
alert("Invalid choice");
break;
}
}
}

function fact(){
let num6 = Number(prompt("Enter num"));   //while loop
let factorial1 = 1;
while(num6 >=1) {
factorial1 = factorial1 * num6;
num6--;
}
alert("The factorial is "+factorial1);
}
function forinloop(){
let obj = {a:1, b:2, c:3};
let txt="";
for (let prop in obj) {
  txt += ""+obj[prop]+ "";
}
//document.getElementById("ans2").innerHTML = txt;
alert(txt);
}

function forofloop(){
    var output = "";     // for-of loop
for (let val of[12 , 13 , 123]){
    output += ""+val+ "";

    }
    alert(output);
}
function dowhil(){
let n1 = Number(prompt("enter num"));
let num = "";
do {
num += ""+n1+"";
n1--;
} while(n1>=0);
alert(num);
}

function brk(){
let i = 1;
let j = "";
let num12 = Number(prompt("enter num"));
while(i<=100) {
if (i % num12 == 0) {
  j += ""+i+ "";
break; //exit the loop if the first multiple is found
}
i++;
}
alert(i+ "is the first multiple of "+num12);
}

function cnt(){
let count = 0;
let num5 = parseInt(prompt("enter num"));
for(let num2 = 0;num2<=num5;num2++) {
if (num2 % 2 == 0) {
continue;
}
count++;
}
alert(" The count of odd values between 0 and "+num5+" is: "+count)
}

function test() {
  var txt = "";
  var txt1 = "";
  outer: for (var i = 0; i < 3; i++) {
    //console.log("i=" + i);
    txt += "i="+i+"<br>";
    for (var j = 0; j < 3; j++) {
      if (j === i) {
        continue outer;
      }
      //console.log("j=" + j);
      txt1 += "j="+j+ "<br>";
    }
  }
  document.getElementById("an1").innerHTML = txt;
  document.getElementById("an2").innerHTML = txt1;
}

function testlabel(){
  let txt = "";
  let txt1 = "";
outerloop: // This is the label name
for (let i = 0; i < 5; i++) {
  txt += "i="+i+"<br>";
//console.log("Outerloop: " + i); 1
innerloop:
for (let j = 0; j < 5; j++){ 
if (j > 3 ) break ; // Quit the innermost loop
if (i == 2) break innerloop; // Do the same thing
if (i == 4) break outerloop; // Quit the outer loop
//console.log("Innerloop: " + j); 
txt1 += "j="+j+"<br>";
      }
  }
  document.getElementById("an3").innerHTML = txt;
  document.getElementById("an4").innerHTML = txt1;
}



