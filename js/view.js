class Viewport {
    constructor(array) {
        this.array = array;
        this._domElement = document.querySelector('.main-box');
        this._divMarginLeft = 55;
        this._divElements = [];
        this._initRender();
    }

    _initRender() {
        this._domElement.innerHTML = '';
        for (let i = 0; i < this.array.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${this._divMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = this.array[i];
            this._domElement.append(div);
            this._divElements.push(div);
        }
    }

    visualizeSortProcess(listOfTurns) {
        const timerId = setInterval(() => {
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
                clearInterval(timerId);
                console.log('Visualization completed');
            }
        }, 1000);
    }
}
