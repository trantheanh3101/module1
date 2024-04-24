// ban đầu vẫn để công tắc s1,s2 ở chế độ bật
s1.switchOn();
s2.switchOn();

// kết nối 2 công tắc s1,s2 đều điê khiên e1
s2.connecTolamp(e1);

// điều khiển

function controlOn() {
    s2.switchOn();
    alert("lamp2 on ")
}
function controlOff() {
    s2.switchOff();
    alert("lamp2 off")
}