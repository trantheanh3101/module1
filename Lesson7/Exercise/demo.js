function convert() {
//     lay du lieu
//     select se lay value cua option dang dc chon
    let amount = +document.getElementById("amount").value;
    let from = +document.getElementById("from").value;
    let to = +document.getElementById("to").value;
    // tinh toan
//     ket qua = amount* ty gia
//     ty gia: from/to
    let rate = from/to;
    let result = amount*rate;
//     hien thi ket qua
    document.getElementById("result").innerText = result;

}