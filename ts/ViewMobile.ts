import EventBus from './EventBus';
import IView from './IView';

export default class ViewMobile extends EventBus implements IView {
    private timerId: number | undefined = undefined;
    private logsElement = document.querySelector('.logs');
    private startButton = document.getElementById('start');
    private visualizeButton = document.getElementById('visualize');
    private testSpeedButton = document.getElementById('testspeed');
    private infoPanel: Element | null = document.querySelector('.info-panel');
    private arraySizeInput = document.getElementById('arraySize');
    private arraySizeTest = document.getElementById('arraySizeTest');
    constructor() {
        super();
        console.log('MOBILE DETECTED');
        if (this.visualizeButton) this.visualizeButton.remove();
        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                let arrayL: any = document.forms[0].elements.namedItem(
                    'arraySize'
                );
                let arrayLength = +arrayL.value;
                if (+arrayLength > 2 && arrayLength < 51) {
                    let radio: any = document.forms[0].elements.namedItem(
                        'chooseAlgo'
                    );
                    const sortMethod = radio.value;
                    this.showInfo('Sorted');
                    this.emitEvent('start', { arrayLength, sortMethod });
                } else {
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
                let arrayLtest: any = document.forms[0].elements.namedItem(
                    'arraySizeTest'
                );
                let testArrayLength = +arrayLtest.value;
                if (
                    testArrayLength !== NaN &&
                    testArrayLength > 1 &&
                    testArrayLength < 30001
                ) {
                    setTimeout(() => {
                        this.emitEvent('testSpeed', testArrayLength);
                    }, 10);
                } else {
                    this.showInfo('Wrong length of the array', 'alert');
                    console.log(testArrayLength);
                }
            });
        }
    }

    initRender(initArray: number[]): void {}

    visualizeSortProcess(listOfTurns: number[][]): void {}

    showResult(
        startArray: number[],
        sortMethod: string,
        resultArray: number[],
        actionTime: number
    ) {
        if (this.logsElement) {
            this.logsElement.innerHTML = `
        <div>Input array: ${startArray.join(' ')}</div>
        <div>Sorting method: ${sortMethod}</div>
        <div>Output array: ${resultArray.join(' ')}</div>
        <div>Render time: ${actionTime}ms</div>
        `;
        }
    }

    showSpeedTestResults(resultOfTests: [], testArrayLength: number) {
        const inputString = `Test array length: ${testArrayLength}`;
        const resultString = resultOfTests
            .map(
                (algo: { name: string; renderTime: number }) =>
                    `<div>Sorting method: ${algo.name}. Render time: ${algo.renderTime}ms</div>`
            )
            .join('');

        if (this.logsElement)
            this.logsElement.innerHTML = inputString + resultString;
    }

    showInfo(info: string, isAlert?: any) {
        if (this.infoPanel) {
            this.infoPanel.innerHTML = info;
            if (isAlert) {
                this.infoPanel.classList.add('info-panel--red');
            } else {
                this.infoPanel.classList.remove('info-panel--red');
            }
        }
    }
}
