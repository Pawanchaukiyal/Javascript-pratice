function set(op) {

    document.getElementById("display").innerHTML += op;

}

function root() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.sqrt(tempStore));

}

function sin() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.asin(tempStore));

}

function cos() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.acos(tempStore));

}

function log() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.log(tempStore));

}

function tan() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.atan(tempStore));

}

function tan() {
    
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.tan(tempStore));

}

function cos() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.cos(tempStore));

}

function sin() {
    var tempStore = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(Math.sin(tempStore));

}

function setOp() {
    alert("gf");
    //document.getElementById("display").innerHTML += op;
}

function eql() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.innerHTML;
    var result = eval(Exp1);
    //alert(result);
    Exp.innerHTML = result;
}

function ans()
{
    var Exp = document.getElementById("display");
    var Exp1 = Exp.innerHTML;
    var result = eval(Exp1);
    //alert(result);
    Exp.innerHTML = result;
}

function ce() {

    var elem = document.getElementById("display").innerHTML;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    document.getElementById("display").innerHTML="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").innerHTML = a;
    // }
    //alert(length);
}
function del(){
    document.getElementById('display').innerHTML = '';
}