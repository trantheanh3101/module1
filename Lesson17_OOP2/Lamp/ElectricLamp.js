// khai bao lop
class ElectricLamp {
    constructor(status) {
        this.status = false;
    }
    turnOff() {
        this.status = false;
    }
    trunOn() {
        this.status = true;
    }
}
// tao Object
let e1 = new ElectricLamp();
let e2 = new ElectricLamp();