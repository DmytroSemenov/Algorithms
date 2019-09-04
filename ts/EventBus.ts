class EventBus {
    private callbacksList: { [key: string]: any } = {};
    constructor() {}

    setEventListener(eventName: string, callback: any) {
        if (!this.callbacksList.hasOwnProperty(eventName)) {
            this.callbacksList[eventName] = [];
        }
        this.callbacksList[eventName].push(callback);
    }

    emitEvent(eventName: string, data: any) {
        if (!this.callbacksList.hasOwnProperty(eventName)) {
            return;
        }
        const callbacksInEvent = this.callbacksList[eventName];
        for (const func of callbacksInEvent) {
            func(data);
        }
    }
}
