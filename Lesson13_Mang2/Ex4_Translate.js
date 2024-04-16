function translatesd() {
    let english = ["apple","banana","pen","book","ball","paper"];
    let vietnam = ["quả táo","quả chuối","bút","quyển sách","quả bóng","giấy"];
    let eng = document.getElementById("trans").value;
    let engNum = 0;
    let vietN = "";
    for (let i = 0; i < english.length; i++) {
        if (eng == english[i]) {
            engNum = i;
            for (let j = 0; j < vietnam.length; j++) {
                if (engNum == j) {
                    vietN = vietnam[j];
                }
            }
        }
    }
    document.getElementById('kq').innerHTML = vietN;
}
