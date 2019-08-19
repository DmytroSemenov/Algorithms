class Arrays {
    constructor(element, inputArray) {
        this._element = element;
        this._workArray = inputArray;
        this._divElements = [];
        this._initRender();
    }

    _initRender() {
        for (let i = 0; i < this._workArray.length; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style = `margin-left: ${boxMarginLeft * i}px`;
            div.dataset.position = i;
            div.innerHTML = this._workArray[i];
            this._element.append(div);
            this._divElements.push(div);
        }
    }

    swapElements(firstIndex, secondIndex) {
        let tempItem = this._workArray[firstIndex];
        this._workArray[firstIndex] = this._workArray[secondIndex];
        this._workArray[secondIndex] = tempItem;
        this.moveElements(firstIndex, secondIndex);
    }

    moveElements(firstIndex, secondIndex) {
        let firstElement;
        let secondElement;
        this._divElements.forEach(element => {
            if (element.dataset.position == firstIndex) {
                firstElement = element;
            }
            if (element.dataset.position == secondIndex) {
                secondElement = element;
            }
        });
        firstElement.dataset.position = secondIndex;
        secondElement.dataset.position = firstIndex;
        this._divElements.forEach(element => {
            element.style.marginLeft =
                +element.dataset.position * boxMarginLeft + 'px';
        });
    }

    sortInsertion() {
        for (let i = 1; i < this._workArray.length; i++) {
            setTimeout(() => {
                const currentItem = { value: this._workArray[i], index: i };
                // this._divElements[i].classList.toggle('box-main');

                for (let j = i - 1; j >= 0; j--) {
                    if (currentItem.value < this._workArray[j]) {
                        this.swapElements(currentItem.index, j);
                        currentItem.index = j;
                    }
                }
            }, 500 * i);
        }
    }

    sortQuick(firstIndex = 0, lastIndex = this._workArray.length) {
        setTimeout(() => {
            let startIndex = firstIndex;
            let endIndex = lastIndex;
            let currentItem = {
                value: this._workArray[startIndex],
                index: startIndex
            };
            this._divElements[startIndex].classList.add('box-main');

            while (startIndex < endIndex) {
                for (let i = --endIndex; i > startIndex; i--) {
                    if (currentItem.value > this._workArray[i]) {
                        this.swapElements(currentItem.index, i);
                        currentItem.index = i;
                        break;
                    }
                    endIndex = i;
                }
                for (let i = ++startIndex; i < currentItem.index; i++) {
                    if (currentItem.value < this._workArray[i]) {
                        this.swapElements(currentItem.index, i);
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

   
    mergeSort(array = this._workArray) {
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

        if (rightArray.length) mergedArray.push(...rightArray);
        if (leftArray.length) mergedArray.push(...leftArray);

        return mergedArray;
    }
}
