import EventBus from './EventBus';
export default class View extends EventBus {
    constructor() {
        super();
        this.divMarginLeft = 55;
        this.divElements = [];
        this.timerId = undefined;
        this.domElement = document.querySelector('.main-box');
        this.logsElement = document.querySelector('.logs');
        const startButton = document.getElementById('start');
        if (startButton) {
            startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                const arrayLength = +document.forms[0].elements.arraySize.value;
                if (arrayLength > 2 && arrayLength < 51) {
                    const sortMethod = document.forms[0].elements.chooseAlgo.value;
                    this.showInfo('Sorted', false);
                    this.emitEvent('start', { arrayLength, sortMethod });
                }
                else {
                    const info = `wrong size of array ( ${arrayLength} )! It should be between ( 2-51 )`;
                    this.showInfo(info, 'alert');
                }
            });
        }
        const visualizeButton = document.getElementById('visualize');
        if (visualizeButton) {
            visualizeButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.emitEvent('visualize', false);
            });
        }
        const testSpeedButton = document.getElementById('testspeed');
        if (testSpeedButton) {
            testSpeedButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.showInfo('Speed test in progress...', 'alert');
                const testArrayLength = +document.forms[0].elements
                    .arraySizeTest.value;
                setTimeout(() => {
                    this.emitEvent('testSpeed', testArrayLength);
                }, 10);
            });
        }
    }
    initRender(initArray) {
        if (this.domElement) {
            this.domElement.innerHTML = '';
            for (let i = 0; i < initArray.length; i++) {
                const div = document.createElement('div');
                div.className = 'box';
                div.style.marginLeft = `${this.divMarginLeft * i}px`;
                div.dataset.position = `${i}`;
                div.innerHTML = `${initArray[i]}`;
                this.domElement.append(div);
                this.divElements.push(div);
            }
        }
    }
    visualizeSortProcess(listOfTurns) {
        this.showInfo('Visualization started', false);
        clearInterval(this.timerId);
        this.timerId = setInterval(() => {
            let turn = listOfTurns.shift() || [];
            let valueOfElement;
            for (let position = 0; position < turn.length; position++) {
                valueOfElement = turn[position];
                for (let i = 0; i < this.divElements.length; i++) {
                    if (this.divElements[i].innerHTML == valueOfElement) {
                        this.divElements[i].dataset.position = `${position}`;
                    }
                }
            }
            this.divElements.forEach((domElement) => {
                let pos = +domElement.dataset.position;
                domElement.style.marginLeft = pos * this.divMarginLeft + 'px';
            });
            if (!listOfTurns.length) {
                clearInterval(this.timerId);
                this.showInfo(`Visualization finished`, false);
            }
        }, 1000);
    }
    showResult(startArray, sortMethod, resultArray, actionTime) {
        if (this.logsElement) {
            this.logsElement.innerHTML = `
        <div>Input array: ${startArray.join(' ')}</div>
        <div>Sorting method: ${sortMethod}</div>
        <div>Output array: ${resultArray.join(' ')}</div>
        <div>Render time: ${actionTime}ms</div>
        `;
        }
    }
    showSpeedTestResults(resultOfTests, testArrayLength) {
        const inputString = `Test array length: ${testArrayLength}`;
        const resultString = resultOfTests
            .map((algo) => `<div>Sorting method: ${algo.name}. Render time: ${algo.renderTime}ms</div>`)
            .join('');
        if (this.logsElement)
            this.logsElement.innerHTML = inputString + resultString;
    }
    showInfo(info, isAlert) {
        const infoPanel = document.querySelector('.info-panel');
        if (infoPanel) {
            infoPanel.innerHTML = info;
            if (isAlert) {
                infoPanel.classList.add('info-panel--red');
            }
            else {
                infoPanel.classList.remove('info-panel--red');
            }
        }
    }
}
