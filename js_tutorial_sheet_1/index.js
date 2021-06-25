//6. Write a JavaScript function to get all prime numbers from 0 to a specified number.
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
//max=5
console.log(primeFactorsTo(5));
//max=15
console.log(primeFactorsTo(15));

//7. Write a function that takes an integer minutes and converts it to seconds. Convert(5)->300, Convert(3)->180
function ConvertMinutes(n) {
    var seconds;

    seconds = n * 60;
    console.log(" Seconds = " + seconds);
}
 
    var n = 5;
    ConvertMinutes(n);
    var n = 3;
    ConvertMinutes(n);

//8. Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. wins get 3 points, draws get 1 point, losses get 0 points

function team_score()
{
    let w = document.getElementById("wins").value;
    let d = document.getElementById("draws").value;
    let l = document.getElementById("losses").value;
    let score = (w*3) + (d*1);
    document.getElementById("score").innerHTML = score;
}


//11. Write a function to reverse an array
var array = [1,2,3,4];


function myFunction() {
  array.reverse();
  console.log(array);
}
myFunction(array);

//9. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10
function makesTen(x, y) 
{
  return ((x == 10 || y == 10) || (x + y == 10));
}
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1,9));
