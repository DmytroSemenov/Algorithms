import EventBus from './EventBus';

export default class ViewMobile extends EventBus {
    private timerId: number | undefined = undefined;
    private logsElement = document.querySelector('.logs');
    private startButton = document.getElementById('start');
    private visualizeButton = document.getElementById('visualize');
    private testSpeedButton = document.getElementById('testspeed');
    private infoPanel: Element | null = document.querySelector('.info-panel');
    constructor() {
        super();
        console.log('MOBILE DETECTED');
        if (this.visualizeButton) this.visualizeButton.remove();
        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                const arrayLength = +document.forms[0].elements.arraySize.value;
                // const arrayLength = 16;
                if (arrayLength > 2 && arrayLength < 51) {
                    const sortMethod =
                        document.forms[0].elements.chooseAlgo.value;
                    // const sortMethod = 'quickSort';
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
                const testArrayLength: number = +document.forms[0].elements
                    .arraySizeTest.value;
                // const testArrayLength: number = 30000;
                setTimeout(() => {
                    this.emitEvent('testSpeed', testArrayLength);
                }, 10);
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