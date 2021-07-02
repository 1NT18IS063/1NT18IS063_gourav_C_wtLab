
function myfunc() {
    var win = document.getElementById("f1").value;
    var lose = document.getElementById("f2").value;
    var draw = document.getElementById("f3").value;
    win = win * 3;
    lose = lose * 0;
    draw = draw * 1;
    result = win + lose + draw ;
    window.alert("Score : "+ result);
}