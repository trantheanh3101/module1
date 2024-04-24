class FlashLamp {
    constructor(status,battery) {
        this.status = false;
        this.battery = battery;   // ở đây battery là Object nhỏ
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBattergyInfo(){
        // return this.battery;
        return this.battery.getEnergy(); ///vì là Object nên muốn lấy giá trị phải getter
    }
    light(){
        if (this.status){
            alert("light off");
        } else {
            alert("light on");
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let pin = new Battery();
pin.setEnergy(90);

let lamp = new FlashLamp();
lamp.setBattery(pin);

document.write(lamp.getBattergyInfo());