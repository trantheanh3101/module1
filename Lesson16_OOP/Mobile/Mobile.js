class Mobile {
    constructor() {
        this.battery = 100;
        this.powerOn = false;
        this.draftMessage = '';
        this.inbox = [];
        this.sentMessages = [];
    }

    checkPowerStatus() {
        return this.powerOn;
    }

    powerToggle() {
        this.powerOn = !this.powerOn;
        if (!this.powerOn) {
            console.log("Điện thoại đã tắt.");
        }
    }

    chargeBattery() {
        if (this.powerOn) {
            this.battery = 100;
            console.log("Đã sạc pin đầy.");
        } else {
            console.log("Điện thoại phải được bật để sạc pin.");
        }
    }

    composeMessage(message) {
        if (this.powerOn) {
            this.draftMessage = message;
            console.log("Đã soạn tin nhắn.");
            this.decreaseBattery();
        } else {
            console.log("Điện thoại phải được bật để soạn tin nhắn.");
        }
    }

    receiveMessage(message) {
        if (this.powerOn) {
            this.inbox.push(message);
            console.log("Đã nhận tin nhắn mới.");
            this.decreaseBattery();
        } else {
            console.log("Điện thoại phải được bật để nhận tin nhắn.");
        }
    }

    sendMessage(message, recipient) {
        if (this.powerOn) {
            recipient.receiveMessage(message);
            this.sentMessages.push(message);
            console.log("Đã gửi tin nhắn.");
            this.decreaseBattery();
        } else {
            console.log("Điện thoại phải được bật để gửi tin nhắn.");
        }
    }

    viewInbox() {
        if (this.powerOn) {
            console.log("Hộp thư đến:");
            this.inbox.forEach((message, index) => {
                console.log(`${index + 1}. ${message}`);
            });
            this.decreaseBattery();
        } else {
            console.log("Điện thoại phải được bật để xem hộp thư đến.");
        }
    }

    viewSentMessages() {
        if (this.powerOn) {
            console.log("Tin nhắn đã gửi:");
            this.sentMessages.forEach((message, index) => {
                console.log(`${index + 1}. ${message}`);
            });
            this.decreaseBattery();
        } else {
            console.log("Điện thoại phải được bật để xem tin nhắn đã gửi.");
        }
    }

    decreaseBattery() {
        if (this.powerOn && this.battery > 0) {
            this.battery--;
        }
    }
}

// Sử dụng lớp Mobile:
const myPhone = new Mobile();
myPhone.powerToggle(); // Bật điện thoại
myPhone.chargeBattery(); // Sạc pin
myPhone.composeMessage("Xin chào!"); // Soạn tin nhắn
console.log("Trạng thái pin: " + myPhone.battery); // Hiển thị trạng thái pin
