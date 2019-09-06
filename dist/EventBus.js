export default class EventBus {
    constructor() {
        this.callbacksList = {};
    }
    setEventListener(eventName, callback) {
        if (!this.callbacksList.hasOwnProperty(eventName)) {
            this.callbacksList[eventName] = [];
        }
        this.callbacksList[eventName].push(callback);
    }
    emitEvent(eventName, data) {
        if (!this.callbacksList.hasOwnProperty(eventName)) {
            return;
        }
        const callbacksInEvent = this.callbacksList[eventName];
        for (const func of callbacksInEvent) {
            func(data);
        }
    }
}
