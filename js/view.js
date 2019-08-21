class Viewport {
    constructor(array) {
        this._domElement = document.querySelector('.main-box');
        this.divMarginLeft = 55;
        this.array = array;
        this._divElements = [];
        this._initRender();
    }
    _initRender() {
        this._domElement.innerHTML = '';
        for (let i = 0; i < this.array.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${this.divMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = this.array[i];
            this._domElement.append(div);
            this._divElements.push(div);
        }
    }

    moveElements(firstIndex, secondIndex) {
        let firstDomElement;
        let secondDomElement;
        this._divElements.forEach(domElement => {
            if (domElement.dataset.position == firstIndex) {
                firstDomElement = domElement;
            }
            if (domElement.dataset.position == secondIndex) {
                secondDomElement = domElement;
            }
        });

        firstDomElement.dataset.position = secondIndex;
        secondDomElement.dataset.position = firstIndex;

        this._divElements.forEach(domElement => {
            domElement.style.marginLeft =
                +domElement.dataset.position * this.divMarginLeft + 'px';
        });
    }
}
