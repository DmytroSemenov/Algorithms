import EventBus from './EventBus';
import IView from './IView';

export default class View extends EventBus implements IView {
    private divMarginLeft: number = 55;
    private divElements: HTMLDivElement[] = [];
    private timerId: number | undefined = undefined;
    private domElement = document.querySelector('.main-box');
    private logsElement = document.querySelector('.logs');
    private startButton = document.getElementById('start');
    private visualizeButton = document.getElementById('visualize');
    private testSpeedButton = document.getElementById('testspeed');
    private arraySizeInput = document.getElementById('arraySize');
    private arraySizeTest = document.getElementById('arraySizeTest');
    constructor() {
        super();

        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                // const arrayLength = +document.forms[0].elements.arraySize.value;
                let arrayL: any = document.forms[0].elements.namedItem(
                    'arraySize'
                );
                let arrayLength = +arrayL.value;

                if (arrayLength > 2 && arrayLength < 51) {
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

    initRender(initArray: number[]): void {
        if (this.domElement) {
            this.domElement.innerHTML = '';
            for (let i = 0; i < initArray.length; i++) {
                const div: HTMLDivElement = document.createElement('div');
                div.className = 'box';
                div.style.marginLeft = `${this.divMarginLeft * i}px`;
                div.dataset.position = `${i}`;
                div.innerHTML = `${initArray[i]}`;
                this.domElement.append(div);
                this.divElements.push(div);
            }
        }
    }

    visualizeSortProcess(listOfTurns: number[][]): void {
        this.showInfo('Visualization started');
        clearInterval(this.timerId);
        this.timerId = setInterval(() => {
            let turn: number[] = listOfTurns.shift() || [];
            let valueOfElement: any;
            for (let position = 0; position < turn.length; position++) {
                valueOfElement = turn[position];
                for (let i = 0; i < this.divElements.length; i++) {
                    if (this.divElements[i].innerHTML == valueOfElement) {
                        this.divElements[i].dataset.position = `${position}`;
                    }
                }
            }
            this.divElements.forEach((domElement: any) => {
                let pos: number = +domElement.dataset.position;
                domElement.style.marginLeft = pos * this.divMarginLeft + 'px';
            });
            if (!listOfTurns.length) {
                clearInterval(this.timerId);
                this.showInfo(`Visualization finished`);
            }
        }, 1000);
    }

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
        const infoPanel: Element | null = document.querySelector('.info-panel');
        if (infoPanel) {
            infoPanel.innerHTML = info;
            if (isAlert) {
                infoPanel.classList.add('info-panel--red');
            } else {
                infoPanel.classList.remove('info-panel--red');
            }
        }
    }
}
