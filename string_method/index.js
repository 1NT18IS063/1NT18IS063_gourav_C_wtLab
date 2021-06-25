function myfun() {
    var a = document.getElementById("f1").value;
    var b = document.getElementById("f2").value;
    var d = a.concat(" ",b);
    alert(d);
}

let displayDate = () => {
    document.getElementById("id4").innerHTML = Date();
}
function myfun2(){
    var c = document.getElementById("f3").value;
    alert(c.length);

}

function myfun3(){
   var e = document.getElementById("f4").value;
   alert(e.toUpperCase());
}

function myfun4(){
    var f = document.getElementById("f4").value;
   alert(f.toLowerCase());

}

function myfun5() {

    var g = document.getElementById("f5").value;
    var h = document.getElementById("f6").value;
    alert(g.indexOf(h));
}

function myfun6(){
    var x = Number(document.getElementById("f7").value);
    var y = Number(document.getElementById("f8").value);
   alert(x+y);

}

function myfun7(){
    var x = Number(document.getElementById("f7").value);
    var y = Number(document.getElementById("f8").value);
   alert(x-y);

}

function myfun8(){
    var x = Number(document.getElementById("f7").value);
    var y = Number(document.getElementById("f8").value);
   alert(x*y);

}

function myfun9(){
    var x = Number(document.getElementById("f7").value);
    var y = Number(document.getElementById("f8").value);
   alert(x/y);

}

function myfun10() {
    let str = prompt("Enter the string");
    let ca = prompt("enter num to find the letter");
    ch = str.charAt(ca);
    chcodat = str.charCodeAt(ca);
    res = "CharAt " +ca+ ch + " CharcodeAt" +ca+ "is"+ chcodat;
    alert(res);
}

let r_btn = document.getElementById("r1");
r_btn.addEventListener("click", () => {
    let r1= "we  born to play ";
    let res1 = r1.replace("we", "were");
    alert(res1);
});
