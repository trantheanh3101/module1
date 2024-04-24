class SwitchButton {
    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }

    connecTolamp(newLamp){
        this.lamp = newLamp;
    }

    switchOff(){
        this.status = false;
        this.lamp.status = false;
    }

    switchOn(){
        this.status = true;
        this.lamp.status = true;
    }
}
let s1 = new SwitchButton(e1);
let s2 = new SwitchButton(e2);
s1.switchOn();
s2.switchOn();

s2.connecTolamp(e1);
s2.switchOff();
s2.switchOn();