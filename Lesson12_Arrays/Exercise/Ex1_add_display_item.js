let arr = ["t1","t2","t3","t4"];
function Add() {
    let item = document.getElementById('item').value;
    arr.push(item);
}

function Display() {
    let array ="";
    for (let i = 0; i < arr.length; i++) {
        array += "phần tử thứ " + i + " = " +  arr[i] + "<br>";
    }
    document.getElementById('kq').innerHTML = array;
}

