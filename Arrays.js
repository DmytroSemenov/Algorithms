class smartArray {
    constructor(domElement, inputArray) {
        this._domElement = domElement;
        this._divElements = [];
        this.content = inputArray;
        this._initRender();
    }

    _initRender() {
        for (let i = 0; i < this.content.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${divMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = this.content[i];
            this._domElement.append(div);
            this._divElements.push(div);
        }
    }

    _swapElements(firstIndex, secondIndex) {
        let tempItem = this.content[firstIndex];
        this.content[firstIndex] = this.content[secondIndex];
        this.content[secondIndex] = tempItem;
        this._moveElements(firstIndex, secondIndex);
    }

    _moveElements(firstIndex, secondIndex) {
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
                +domElement.dataset.position * divMarginLeft + 'px';
        });
    }

    sortInsertion() {
        for (let i = 1; i < this.content.length; i++) {
            setTimeout(() => {
                const currentItem = { value: this.content[i], index: i };

                for (let j = i - 1; j >= 0; j--) {
                    if (currentItem.value < this.content[j]) {
                        this._swapElements(currentItem.index, j);
                        currentItem.index = j;
                    }
                }
            }, 500 * i);
        }
    }

    sortQuick(firstIndex = 0, lastIndex = this.content.length) {
        setTimeout(() => {
            let startIndex = firstIndex;
            let endIndex = lastIndex;
            let currentItem = {
                value: this.content[startIndex],
                index: startIndex
            };
            this._divElements[startIndex].classList.add('box-main');

            while (startIndex < endIndex) {
                for (let i = --endIndex; i > startIndex; i--) {
                    if (currentItem.value > this.content[i]) {
                        this._swapElements(currentItem.index, i);
                        currentItem.index = i;
                        break;
                    }
                    endIndex = i;
                }
                for (let i = ++startIndex; i < currentItem.index; i++) {
                    if (currentItem.value < this.content[i]) {
                        this._swapElements(currentItem.index, i);
                        currentItem.index = i;
                        break;
                    }
                    startIndex = i;
                }
            }

            if (currentItem.index - firstIndex > 1) {
                this.sortQuick(firstIndex, currentItem.index);
            }

            if (lastIndex - currentItem.index > 1) {
                this.sortQuick(currentItem.index + 1, lastIndex);
            }
        }, 1000);
    }

    mergeSort(array = this.content) {
        const mergedArray = [];
        let middleIndex = Math.trunc(array.length / 2);
        let leftArray = array.slice(0, middleIndex);
        let rightArray = array.slice(middleIndex, array.length);

        if (leftArray.length > 1) {
            leftArray = this.mergeSort(leftArray);
        }

        if (rightArray.length > 1) {
            rightArray = this.mergeSort(rightArray);
        }

        while (rightArray.length && leftArray.length) {
            if (rightArray[0] < leftArray[0]) {
                mergedArray.push(rightArray.shift());
            } else {
                mergedArray.push(leftArray.shift());
            }
        }

        if (rightArray.length) {
            mergedArray.push(...rightArray);
        }
        if (leftArray.length) {
            mergedArray.push(...leftArray);
        }

        return mergedArray;
    }
}
