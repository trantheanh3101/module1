let img = null;
img = document.getElementById('myimg');
function init() {
    img = document.getElementById('myimg');
    img.style.position = 'relative'; // định vị dựa vào vị trí ban đầu của nó
    img.style.left = '0px'           // đây chính là vị trí ban đầu
}

function moveball() {
    img.style.left = parseInt(img.style.left) + 10 +'px';
}

window.onload = init;

// window.onload = init();