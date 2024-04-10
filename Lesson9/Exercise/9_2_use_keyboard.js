// function init() {
//     element = document.getElementById("myImg");
//     element.style.position = 'absolute';
//     element.style.top = '0px';
//     element.style.left = '0px';
// }
function upImg() {
    let element = document.getElementById("myImg");
    element.style.top = parseInt(element.style.top) - 10 +'px';
}
function downImg() {
    let element = document.getElementById("myImg");
    element.style.top = parseInt(element.style.top) + 10 +'px';
}
function leftImg() {
    let element = document.getElementById("myImg");
    element.style.left = parseInt(element.style.left) - 10 +'px';
}
function rightImg() {
    let element = document.getElementById("myImg");
    element.style.left = parseInt(element.style.left) + 10 +'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftImg();
            break;
        case 39:
            rightImg();
            break;
        case 38:
            upImg();
            break;
        case 40:
            downImg();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}

// window.onload = init;

