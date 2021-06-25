//1. Write a JavaScript function to get all prime numbers from 0 to a specified number.

function prime(){
    let primearr = new Array;
    let spec_num = Number(prompt("Enter a num to find prime numbers in bw"));
    for(var i = 0; i<= spec_num; i++){
        flag = 0;
        for (var k = 2; k< i; k++){
            if(i%k == 0){
                flag = 1;
                break;
            }
        }
        if(i > 1 && flag == 0){
            primearr.push(i);
        }
    }
    alert(primearr);

}

// 2.Write a function that takes an integer minutes and converts it to seconds. Convert(5)->300, Convert(3)->180

function min_t_sec(){
    const min = parseInt(document.getElementById("min").value);
    const sec = min*60;
    document.getElementById("ans").value = sec; 
}

/*3.Create a function that takes the number of wins, draws and losses and calculates the number of
points a football team has obtained so far.
wins get 3 points
draws get 1 point
losses get 0 points
Ex: footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15 */

 function pointscal(){
   let win = parseInt(document.getElementById("win").value);
   let draw = Number(document.getElementById("draw").value);
   let loss = Number(document.getElementById("loss").value);
   score = (win * 3)+(draw * 1)+(loss * 0);
   alert("total points =" +score.toString())
 }

/* 4.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if
one of them is 10 or if their sum is 10
Ex: makesTen(9, 10) ➞ true, makesTen(9, 9) ➞ false, makesTen(1, 9) ➞ true */

function checkten(){
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    if(a == 10 || b == 10 || a+b ==10){
        alert("value is 10")
    }
    else{
        alert("value doesn't make ten  " +(a+b));
    }
}

/* 5. Create a function that takes a string and returns it as an integer.
Ex: stringInt("6") ➞ 6, stringInt("1000") ➞ 1000, stringInt("12") ➞ 12 */

function str_to_int(){
 var a = prompt("Enter a value");
 var b = parseInt(a);
 alert(b);
}

/* 6.Write a function to reverse an array
Ex: reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1], reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([]) ➞ [] */

function revarr(){
    let arr = [1, 2, 3, 4];
   // let arr1 = arr.reverse();
   let arr1 = new Array;
   for (let i = arr.length-1; i>=0; i--){
       arr1.push(arr[i]);
   }
    alert(arr1);

}

/* 7. Create a function that takes as a parameter an array of "stringified" numbers and returns an
array of numbers.
["1", "3", "3.6"] ➞ [1, 3, 3.6] */
function strarr_to_numarr(){
    const toNumbers = arr => arr.map(Number);  // arrow function
alert(toNumbers(["1", "3", "3.6"])); 
}
