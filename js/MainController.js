class MainController extends EventBus {
    constructor(arrayModel, viewModel) {
        super();
        this._arrayModel = arrayModel;
        this._viewModel = viewModel;

        this._viewModel.setEventListener('start', data => {
            this._arrayModel.createRandomArray(data.arrayLength);
            const startTime = new Date();
            const startArray = this._arrayModel.getArray();
            const resultArray = this._arrayModel[data.sortMethod]();
            const finishTime = new Date();

            this._viewModel.showResult(
                startArray,
                data.sortMethod,
                resultArray,
                finishTime - startTime
            );
        });
    }
}

window.addEventListener('load', () => {
    const myArray = new SmartArray();
    const viewport = new View(myArray);
    const mainController = new MainController(myArray, viewport);
});
