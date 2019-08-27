class EventBus {
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

class Main extends EventBus {
    constructor(model, view) {
        super();
        this._model = model;
        this._view = view;
    }
}

// function createRandomArray(lengthOfArray) {
//     const baseArray = [];
//     for (let i = 0; i < lengthOfArray; i++) {
//         baseArray.push(i);
//     }
//     return baseArray.sort(() => Math.random() - 0.5);
// }

// function handleStart() {
//     const arrayLength = +document.forms[0].elements.arraySize.value;
//     const arrayForSort = createRandomArray(arrayLength);
//     const myArray = new smartArray(arrayForSort);
//     const sortMethod = document.forms[0].elements.chooseAlgo.value;
//     const viewport = new Viewport(arrayForSort);

//     console.log(`Input array: ${arrayForSort}`);
//     console.log(sortMethod);
//     console.log(`Output array: ${myArray[sortMethod]()}`);

//     viewport.visualizeSortProcess(myArray.listOfTurns);
// }

// document.getElementById('start').addEventListener('click', handleStart);

document.addEventListener('load', () => {
    const myArray = new smartArray();
    const viewport = new Viewport();
    const main = new Main(myArray, viewport);
});
