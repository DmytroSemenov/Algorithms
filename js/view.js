class View extends EventBus {
    constructor(arrayModel) {
        super();
        this._arrayModel = arrayModel;
        this._array = [];
        this._domElement = document.querySelector('.main-box');
        this._divMarginLeft = 55;
        this._divElements = [];
        this._timerId = 0;

        document.getElementById('start').addEventListener('click', () => {
            clearInterval(this._timerId);
            const arrayLength = +document.forms[0].elements.arraySize.value;
            if (arrayLength < 2 || arrayLength > 1000) {
                return;
            }
            const sortMethod = document.forms[0].elements.chooseAlgo.value;
            this.emitEvent('start', { arrayLength, sortMethod });
        });
        // refactor!!! Move to controller
        document.getElementById('visualize').addEventListener('click', () => {
            if (this._arrayModel.listOfTurns.length > 2) {
                this._array = this._arrayModel.listOfTurns[0];
                this._initRender();
                this.visualizeSortProcess(this._arrayModel.listOfTurns);
            }
        });
    }

    _initRender() {
        this._domElement.innerHTML = '';
        for (let i = 0; i < this._array.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${this._divMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = this._array[i];
            this._domElement.append(div);
            this._divElements.push(div);
        }
    }

    visualizeSortProcess(listOfTurns) {
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
                console.log('Visualization completed');
            }
        }, 1000);
    }

    showResult(startArray, sortMethod, resultArray, actionTime) {
        document.querySelector('.logs').innerHTML = `
        <div>Input array: ${startArray.join(' ')}</div>
        <div>Sorting method: "${sortMethod}"</div>
        <div>Output array: ${resultArray.join(' ')}</div>
        <div>Action time: ${actionTime}ms</div>
        `;
    }
}
