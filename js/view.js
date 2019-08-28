class View extends EventBus {
    constructor() {
        super();
        this._array = [];
        this._domElement = document.querySelector('.main-box');
        this._divMarginLeft = 55;
        this._divElements = [];
        this._timerId = null;

        document.getElementById('start').addEventListener('click', () => {
            clearInterval(this._timerId);
            const arrayLength = +document.forms[0].elements.arraySize.value;
            if (arrayLength > 2 && arrayLength < 100) {
                const sortMethod = document.forms[0].elements.chooseAlgo.value;
                this.emitEvent('start', { arrayLength, sortMethod });
            } else {
                console.log(`wrong size of array (2-100) != ${arrayLength}`);
            }
        });

        document.getElementById('visualize').addEventListener('click', () => {
            clearInterval(this._timerId);
            this.emitEvent('visualize');
        });

        document.getElementById('testspeed').addEventListener('click', () => {
            clearInterval(this._timerId);
            const testArrayLength = +document.forms[0].elements.arraySizeTest
                .value;
            this.emitEvent('testSpeed', testArrayLength);
        });
    }

    _initRender() {
        this._domElement.innerHTML = '';
        for (let i = 0; i < this._array.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${this._divMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = this._array[i];
            this._domElement.append(div);
            this._divElements.push(div);
        }
    }

    visualizeSortProcess(listOfTurns) {
        clearInterval(this._timerId);
        this._timerId = setInterval(() => {
            let turn = listOfTurns.shift();
            let valueOfElement;
            for (let position = 0; position < turn.length; position++) {
                valueOfElement = turn[position];
                for (let i = 0; i < this._divElements.length; i++) {
                    if (this._divElements[i].innerHTML == valueOfElement) {
                        this._divElements[i].dataset.position = position;
                    }
                }
            }
            this._divElements.forEach(domElement => {
                domElement.style.marginLeft =
                    +domElement.dataset.position * this._divMarginLeft + 'px';
            });
            if (!listOfTurns.length) {
                clearInterval(this._timerId);
                console.log('Visualization completed');
            }
        }, 1000);
    }

    showResult(startArray, sortMethod, resultArray, actionTime) {
        document.querySelector('.logs').innerHTML = `
        <div>Input array: ${startArray.join(' ')}</div>
        <div>Sorting method: ${sortMethod}</div>
        <div>Output array: ${resultArray.join(' ')}</div>
        <div>Render time: ${actionTime}ms</div>
        `;
    }

    showSpeedTestResults(resultOfTests, testArrayLength) {
        const inputString = `Test array length: ${testArrayLength}`;
        const resultString = resultOfTests
            .map(
                algo =>
                    `<div>Sorting method: ${algo.name}. Render time: ${algo.renderTime}ms</div>`
            )
            .join('');
        document.querySelector('.logs').innerHTML = inputString + resultString;
    }
}
