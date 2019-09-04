// import EventBus from './EventBus';

class View extends EventBus {
    private divMarginLeft: number = 55;
    private divElements: HTMLDivElement[] = [];
    private timerId: number | undefined = undefined;
    private domElement: Element | null = document.querySelector('.main-box');
    private logsElement: Element | null = document.querySelector('.logs');
    constructor() {
        super();

        const startButton: Element | null = document.getElementById('start');
        if (startButton) {
            startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                const arrayLength = +document.forms[0].elements.arraySize.value;
                // const arrayLength = 16;
                if (arrayLength > 2 && arrayLength < 51) {
                    const sortMethod =
                        document.forms[0].elements.chooseAlgo.value;
                    // const sortMethod = 'quickSort';
                    this.showInfo('Sorted', false);
                    this.emitEvent('start', { arrayLength, sortMethod });
                } else {
                    const info = `wrong size of array ( ${arrayLength} )! It should be between ( 2-51 )`;
                    this.showInfo(info, 'alert');
                }
            });
        }

        const visualizeButton: Element | null = document.getElementById(
            'visualize'
        );
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
                const testArrayLength: number = +document.forms[0].elements
                // const testArrayLength: number = 30000;
                setTimeout(() => {
                    this.emitEvent('testSpeed', testArrayLength);
                }, 10);
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
        this.showInfo('Visualization started', false);
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
                this.showInfo(`Visualization finished`, false);
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

    showInfo(info: string, isAlert: any) {
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
