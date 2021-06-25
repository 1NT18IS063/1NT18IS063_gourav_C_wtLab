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
    document.getElementById("ans1").innerHTML = txt;
    document.getElementById("ans2").innerHTML = txt1;
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
    document.getElementById("ans3").innerHTML = txt;
    document.getElementById("ans4").innerHTML = txt1;
}
