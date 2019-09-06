import EventBus from './EventBus.js';
import SmartArray from './SmartArray.js';
import View from './View.js';

export default class MainController extends EventBus {
    private arrayModel: SmartArray;
    private viewModel: View;

    constructor(arrayModel: SmartArray, viewModel: View) {
        super();
        this.arrayModel = arrayModel;
        this.viewModel = viewModel;

        this.viewModel.setEventListener('start', (data: any) => {
            this.arrayModel.createRandomArray(data.arrayLength);
            const startTime: number = Date.now();
            const startArray: number[] = this.arrayModel.getArray();
            const resultArray: number[] = this.arrayModel[data.sortMethod]();
            const finishTime: number = Date.now();

            this.viewModel.showResult(
                startArray,
                data.sortMethod,
                resultArray,
                finishTime - startTime
            );
        });

        this.viewModel.setEventListener('visualize', () => {
            if (this.arrayModel.listOfTurns.length > 2) {
                this.viewModel.initRender(this.arrayModel.listOfTurns[0]);
                this.viewModel.visualizeSortProcess(
                    this.arrayModel.listOfTurns
                );
            } else {
                this.viewModel.showInfo('Use visualize after sort!!!', 'alert');
            }
        });

        this.viewModel.setEventListener(
            'testSpeed',
            (testArrayLength: number) => {
                const testRes: any = this._testSpeeds(testArrayLength);
                this.viewModel.showSpeedTestResults(testRes, testArrayLength);
                this.viewModel.showInfo('Speed test complited', false);
            }
        );
    }

    _testSpeeds(testArrayLength: number) {
        this.arrayModel.isTest = true;
        const testedAlgorithms = [
            { name: 'Insertion', funct: 'insertionSort', renderTime: 0 },
            { name: 'Quick', funct: 'quickSort', renderTime: 0 },
            { name: 'Merge', funct: 'mergeSort', renderTime: 0 },
            { name: 'Internal', funct: 'internalSort', renderTime: 0 }
        ];
        const testArray = this.arrayModel.createRandomArray(testArrayLength);
        testedAlgorithms.forEach(algo => {
            this.arrayModel.setArray(testArray);
            const startTime = Date.now();
            this.arrayModel[algo.funct]();
            const finishTime = Date.now();
            algo.renderTime = finishTime - startTime;
        });
        this.arrayModel.isTest = false;
        return testedAlgorithms;
    }
}
