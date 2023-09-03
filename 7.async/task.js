class AlarmClock {
     constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

addClock(time, callback) {
    if (!time || !callback) {
        throw new Error("Отсутствуют обязательные аргументы");   
    }
    if (this.alarmCollection === time) {
        console.warn('Уже присутствует звонок на это же время');    
    }
    let obj = {callback: callback, time: time, canCall: true};
    this.alarmCollection.push(obj);
}

removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
}

    getCurrentFormattedTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        let res = hh + ":" + mm;
        return res;
    }

    start() {
        if(this.intervalId !== null) {
            return;
    } 
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if((this.getCurrentFormattedTime() === item.time) && (item.canCall === true)) {
                    item.canCall = false;
                    item.callback();
                }
        })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}