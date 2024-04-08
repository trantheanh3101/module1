
function doi_tien() {
    var nhaptien = document.getElementById("tien").value;
    var option1 = document.getElementById("form1").value;
    var option2 = document.getElementById("to1").value;
    var Result;

    if (option1 == "VietNam") {
        if (option2 == "VietNam") {
            Result = "Result : " + nhaptien + "VND";
        } else {
            Result = "Result : " + (nhaptien / 23000) + "$";
        }}
    else
        if (option2 == "USD") {
            Result = "Result : " + nhaptien + "$";
        } else {
            Result = "Result : " + (nhaptien * 23000) + "VND";
        }
    document.getElementById("kq").innerHTML = Result;
}