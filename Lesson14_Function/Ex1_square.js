function square(num) {
    let result = num * num;
    return result;
}

function calculate() {
    let input = document.getElementById('input').value;
    let result1 = square(input);
    document.getElementById('kq').innerHTML = result1;
}
// let square2 = square(2);
// document.write(square2);
//
// document.write("<br>");
//
// let square5 = square(5);
// document.write(square5);