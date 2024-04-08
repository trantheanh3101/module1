// var laynum1 = parseFloat(document.getElementById("num1").value);
// var laynum2 = parseFloat(document.getElementById("num2").value);
function cong(){
    var laynum1 = parseFloat(document.getElementById("num1").value);
    var laynum2 = parseFloat(document.getElementById("num2").value);
    var tong= "Result phép tính : " + (laynum1 + laynum2) ;
    document.getElementById("kq").innerHTML = tong;
}

function tru(){
    var laynum1 = parseFloat(document.getElementById("num1").value);
    var laynum2 = parseFloat(document.getElementById("num2").value);
    var tru= "Result phép tính : " + (laynum1 - laynum2) ;
    document.getElementById("kq").innerHTML = tru;
}

function nhan(){
    var laynum1 = parseFloat(document.getElementById("num1").value);
    var laynum2 = parseFloat(document.getElementById("num2").value);
    var nhan= "Result phép tính : " + (laynum1 * laynum2) ;
    document.getElementById("kq").innerHTML = nhan;
}

function chia(){
    var laynum1 = parseFloat(document.getElementById("num1").value);
    var laynum2 = parseFloat(document.getElementById("num2").value);
    var chia= "Result phép tính : " + (laynum1 / laynum2) ;
    document.getElementById("kq").innerHTML = chia;
}



