// CRUD
// C: creat
// R: read (danh sach san pham, chi tiet sp, tim kiem)
// U: update
// D: delete

// R: Hien thi danh sach
// 4: thanh phan
//Ten ham: showAllProduct
//tham so: khong co
//gia tri tra ve: khong co
//phan than: Ve bang hien thi toan bo san pham

//bien mang: luu tru san pham. Toan cuc
let productList = [
    "Iphone 13",
    "Iphone 6",
    "Iphone 7",
    "Iphone 8",
    "Iphone X",
];

function showAllProduct() {
    let content="";
    for (let i = 0; i <productList.length ; i++) {
        content += `<tr>
            <td>${productList[i]}</td>
            <td><button>Sua</button></td>
            <td><button>Xoa</button></td>
        </tr>`
    }
    document.getElementById("list").innerHTML = content;
    document.getElementById("number").innerHTML = productList.length + " sp";
}
showAllProduct();


// let x = 100;
// let y = 101;
// document.getElementById("demo").innerText=x + " + " + y +" = " +(x+y);
// document.getElementById("demo2").innerText=`${x} + ${y} = ${(x+y)}`;


// C: tao moi
// 4: thanh phan
//Ten ham: createNewProduct
//tham so: khong co
//gia tri tra ve: khong co
//phan than:
// Lay du lieu ten sp moi
// them sp do vao mang
// Ve bang hien thi toan bo san pham
function createNewProduct() {
    // Lay du lieu ten sp moi
    let newP = document.getElementById("newproduct").value;
    // them sp do vao mang
    productList.push(newP);
    // Ve bang hien thi toan bo san pham
    showAllProduct();
    document.getElementById("newproduct").value = "";
    document.getElementById("newproduct").focus();
}