alert("chào bạn vào trang này")

document.getElementById("code1").innerText="<h1>tau không thích chào mày oke </h1>"
//  khi dùng innerText thì all kí tự sau sẽ được in ra , nó xem tất cả ều là kí tự
document.getElementById("code2").innerHTML="<h1>ní hảo bạn nhé </h1>"
function theanh() {
    code = document.getElementById("code").value;
    alert(code);
    document.write("chào mừng caác bạn đến với buổi thuyết trình ngày hôm nay ");
}