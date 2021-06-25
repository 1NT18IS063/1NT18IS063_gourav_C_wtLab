function sorting() {
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    res = names.sort();
    alert(res);
}

function checklen() {
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    res = names.length;
    alert(res);
}

function forloop() {
    let text, fLen, i;
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    fLen = names.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += names[i];
    }
    text += "</ul>";
    document.getElementById("f1").innerHTML = text;
}

function foreachloop() {
    let text, fLen, i;
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    fLen = names.length;
  
    text = "<ul>";
    names.forEach(myFunction);
    text += "</ul>";
    document.getElementById("f2").innerHTML = text;

    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }
}

function convstr() {
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    str = names.toString();
    alert(str);

}
function popele() {
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    pop = names.pop();
    alert(pop);

}
function shiftele() {
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    shift = names.shift();
    alert(shift);

}
function unshif() {
    let names = new Array("Fiat", "Austin", "Mercedes", "BMW", "Cupra");
    unshift = names.unshift("Fiat", "Ford");
    alert(names);

}
