class Battery {
    constructor(energy) {
        this.energy = energy;  // ~~ pin
    }
    getEnergy(){
        return this.energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    decreaseEnergy(){
        if (this.energy>0){
            this.energy--;
        }
    }
}