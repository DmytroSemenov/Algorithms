class MainController extends EventBus {
    constructor(arrayModel, viewModel) {
        super();
        this._arrayModel = arrayModel;
        this._viewModel = viewModel;

        this._viewModel.setEventListener('start', data => {
            this._arrayModel.createRandomArray(data.arrayLength);
            const startTime = Date.now();
            const startArray = this._arrayModel.getArray();
            const resultArray = this._arrayModel[data.sortMethod]();
            const finishTime = Date.now();

            this._viewModel.showResult(
                startArray,
                data.sortMethod,
                resultArray,
                finishTime - startTime
            );
        });

        this._viewModel.setEventListener('visualize', () => {
            if (this._arrayModel.listOfTurns.length > 2) {
                this._viewModel._initRender(this._arrayModel.listOfTurns[0]);
                this._viewModel.visualizeSortProcess(
                    this._arrayModel.listOfTurns
                );
            } else {
                this._viewModel.showInfo(
                    'Use visualize after sort!!!',
                    'alert'
                );
            }
        });

        this._viewModel.setEventListener('testSpeed', testArrayLength => {
            const testRes = this._testSpeeds(testArrayLength);
            this._viewModel.showSpeedTestResults(testRes, testArrayLength);
            this._viewModel.showInfo('Speed test complited');
        });
    }

    _testSpeeds(testArrayLength) {
        this._arrayModel.isTest = true;
        const testedAlgorithms = [
            { name: 'Insertion', funct: 'insertionSort', renderTime: 0 },
            { name: 'Quick', funct: 'quickSort', renderTime: 0 },
            { name: 'Merge', funct: 'mergeSort', renderTime: 0 },
            { name: 'Internal', funct: 'internalSort', renderTime: 0 }
        ];
        const testArray = this._arrayModel.createRandomArray(testArrayLength);
        testedAlgorithms.forEach(algo => {
            this._arrayModel.setArray(testArray);
            const startTime = Date.now();
            this._arrayModel[algo.funct]();
            const finishTime = Date.now();
            algo.renderTime = finishTime - startTime;
        });
        this._arrayModel.isTest = false;
        return testedAlgorithms;
    }
}
