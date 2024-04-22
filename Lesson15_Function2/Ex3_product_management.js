let array_product = ["Sony Xperia","Samsung Galaxy","Nokia 6","Xiaomi Redmi Note 4","Apple iPhone 6S","Xiaomi Mi 5s Plus","Apple iPhone 8 Plus","Fujitsu F-04E","Oppp A71"];
function displayProduct() {
    count = array_product.length;
    let total = "<table><tr><th style=\"text-align: left\">Product Name</th><th colspan=\"2\" style=\"text-align:right\">" + count + " products</th></tr>";
    for (let i = 0; i <array_product.length; i++) {
        total += "<tr><td>" + array_product[i] + "</td><td><button type=\"button\" onclick=\"editProduct(this)\">Edit</button></td><td><button type=\"button\" onclick=\"deleteProduct(this)\">Delete</button></td></tr>";
    }
    total += "</table>";
    return total;
}
document.getElementById('kq').innerHTML = displayProduct();
function addProduct() {
    let newProduct = document.getElementById('product').value;
    if (newProduct !== "") {
        array_product.push(newProduct);
        document.getElementById('kq').innerHTML = displayProduct();

        alert("đã thêm sản phẩm " + newProduct + " vào danh sách ")
    } else {
        alert("nhập lại tên sản phẩm , tên sản phẩm không để rỗng")
    }
}

function editProduct(edit) {
    let row = edit.parentNode.parentNode;
    let productName = row.cells[0].textContent;
    newname = prompt("tên sản phẩm" + productName + " đổi thành: ");
    for (let i = 0; i < array_product.length; i++) {
        if (productName === array_product[i]){
            array_product[i] = newname;
            break;
        }
    }
    document.getElementById('kq').innerHTML = displayProduct();
}
//
function deleteProduct(button) {
    let row = button.parentNode.parentNode;       // lấy tham chiếu đến hàng(tr) chứa nút delete
    let productName = row.cells[0].textContent;  // Lấy giá trị của ô chứa tên sản phẩm trong cùng hàng
    for (let i = 0; i < array_product.length; i++) {
        if (productName === array_product[i]){
            alert('bạn đã xóa sản phẩm '+ productName )
            array_product.splice(i,1);
            break;
        }
    }
    document.getElementById('kq').innerHTML = displayProduct();
}
