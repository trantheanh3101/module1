function prime() {
    let count=0;
    let num = document.getElementById('num').value;
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;

    while (count<num || start<end){
        if (checkPrime(start)){
            document.write(start + " ");
            count++;
        }
        start++;
    }
    document.getElementById('result').innerHTML = start;
}
function checkPrime(n){
    //     tra ve true neu la so nguyen to
    //     tra false neu ko la so nguyen to
    if (n<2) return false;
    if (n<4) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i===0) return false;
    }
    return true;
}