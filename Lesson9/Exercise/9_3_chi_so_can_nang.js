function Check() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    bmi = (+weight / (Math.pow(height,2))).toFixed(2);
    if (bmi < 18.5){
        document.getElementById('kq').innerHTML = "Chỉ số cân nặng của bạn là " + bmi + ": Underweight";
    } else if (bmi <25){
        document.getElementById('kq').innerHTML = "Chỉ số cân nặng của bạn là " + bmi + ": Normal";
    } else if (bmi < 30){
        document.getElementById('kq').innerHTML = "Chỉ số cân nặng của bạn là " + bmi + ": Overweight";
    } else {
        document.getElementById('kq').innerHTML = "Chỉ số cân nặng của bạn là " + bmi + ": Obese";
    }
}
