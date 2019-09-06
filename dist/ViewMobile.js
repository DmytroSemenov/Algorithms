import EventBus from './EventBus.js';
export default class ViewMobile extends EventBus {
    constructor() {
        super();
        this.timerId = undefined;
        this.logsElement = document.querySelector('.logs');
        this.startButton = document.getElementById('start');
        this.visualizeButton = document.getElementById('visualize');
        this.testSpeedButton = document.getElementById('testspeed');
        this.infoPanel = document.querySelector('.info-panel');
        console.log('MOBILE DETECTED');
        if (this.visualizeButton)
            this.visualizeButton.remove();
        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                const arrayLength = +document.forms[0].elements.arraySize.value;
                // const arrayLength = 16;
                if (arrayLength > 2 && arrayLength < 51) {
                    const sortMethod = document.forms[0].elements.chooseAlgo.value;
                    // const sortMethod = 'quickSort';
                    this.showInfo('Sorted');
                    this.emitEvent('start', { arrayLength, sortMethod });
                }
                else {
                    const info = `wrong size of array ( ${arrayLength} )! It should be between ( 2-51 )`;
                    this.showInfo(info, 'alert');
                }
            });
        }
        if (this.visualizeButton) {
            this.visualizeButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.emitEvent('visualize', false);
            });
        }
        if (this.testSpeedButton) {
            this.testSpeedButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.showInfo('Speed test in progress...', 'alert');
                const testArrayLength = +document.forms[0].elements
                    .arraySizeTest.value;
                // const testArrayLength: number = 30000;
                setTimeout(() => {
                    this.emitEvent('testSpeed', testArrayLength);
                }, 10);
            });
        }
    }
    initRender(initArray) { }
    visualizeSortProcess(listOfTurns) { }
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
        if (this.infoPanel) {
            this.infoPanel.innerHTML = info;
            if (isAlert) {
                this.infoPanel.classList.add('info-panel--red');
            }
            else {
                this.infoPanel.classList.remove('info-panel--red');
            }
        }
    }
}
