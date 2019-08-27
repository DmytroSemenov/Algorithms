class EventBus {
    constructor() {
        this._callbacksList = {};
    }

    setEventListener(eventName, callback) {
        if (!this._callbacksList.hasOwnProperty(eventName)) {
            this._callbacksList[eventName] = [];
        }
        this._callbacksList[eventName].push(callback);
    }

    emitEvent(eventName, data) {
        if (!this._callbacksList.hasOwnProperty(eventName)) {
            return;
        }
        const callbacksInEvent = this._callbacksList[eventName];
        for (const func of callbacksInEvent) {
            func(data);
        }
    }
}
