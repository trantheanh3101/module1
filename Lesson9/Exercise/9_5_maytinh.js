let view = document.getElementById("display");

function inputvalue(value) {
    view.value += value;
}
function kq() {
    let kq = eval(view.value);
    view.value = kq;
}
function xoa() {
    view.value = "";
}
