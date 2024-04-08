var num1, num2; // Khai báo biến num1 và num2 một lần ngoài các hàm

function cong() {
    // Sử dụng biến num1 và num2 đã khai báo ở trên
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    var tong = "Kết quả phép tính: " + (num1 + num2);
    document.getElementById("kq").innerHTML = tong;
}

function tru() {
    var tru = "Kết quả phép tính: " + (num1 - num2);
    document.getElementById("kq").innerHTML = tru;
}

function nhan() {
    var nhan = "Kết quả phép tính: " + (num1 * num2);
    document.getElementById("kq").innerHTML = nhan;
}

function chia() {
    var chia = "Kết quả phép tính: " + (num1 / num2);
    document.getElementById("kq").innerHTML = chia;
}