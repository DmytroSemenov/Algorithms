class View extends EventBus {
    constructor() {
        super();
        this._domElement = document.querySelector('.main-box');
        this._divMarginLeft = 55;
        this._divElements = [];
        this._timerId = null;

        document.getElementById('start').addEventListener('click', () => {
            clearInterval(this._timerId);
            const arrayLength = +document.forms[0].elements.arraySize.value;
            if (arrayLength > 2 && arrayLength < 51) {
                const sortMethod = document.forms[0].elements.chooseAlgo.value;
                this.showInfo('Sorted');
                this.emitEvent('start', { arrayLength, sortMethod });
            } else {
                const info = `wrong size of array ( ${arrayLength} )! It should be between ( 2-51 )`;
                this.showInfo(info, 'alert');
            }
        });

        document.getElementById('visualize').addEventListener('click', () => {
            clearInterval(this._timerId);
            this.emitEvent('visualize');
        });

        document.getElementById('testspeed').addEventListener('click', () => {
            clearInterval(this._timerId);
            this.showInfo('Speed test in progress...', 'alert');
            const testArrayLength = +document.forms[0].elements.arraySizeTest.value;
            setTimeout(() => {
                this.emitEvent('testSpeed', testArrayLength);
            }, 10);
        });
    }

    _initRender(initArray) {
        this._domElement.innerHTML = '';
        for (let i = 0; i < initArray.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${this._divMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = initArray[i];
            this._domElement.append(div);
            this._divElements.push(div);
        }
    }

    visualizeSortProcess(listOfTurns) {
        this.showInfo('Visualization started');
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
                this.showInfo(`Visualization finished`);
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

    showInfo(info, isAlert) {
        const infoPanel = document.querySelector('.info-panel');
        infoPanel.innerHTML = info;
        if (isAlert) {
            infoPanel.classList.add('info-panel--red');
        } else {
            infoPanel.classList.remove('info-panel--red');
        }
    }
}
