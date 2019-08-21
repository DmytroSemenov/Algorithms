class smartArray {
    constructor(inputArray) {
        this._array = inputArray;
        this.listOfTurns = [];
    }

    sortInsertion() {
        for (let i = 1; i < this._array.length; i++) {
            const currentItem = { value: this._array[i], index: i };

            for (let j = i - 1; j >= 0; j--) {
                if (currentItem.value < this._array[j]) {
                    this._swapElements(currentItem.index, j);
                    currentItem.index = j;
                    this.listOfTurns.push(this._array.slice());
                }
            }
        }

        return this._array;
    }

    sortQuick(firstIndex = 0, lastIndex = this._array.length) {
        let startIndex = firstIndex;
        let endIndex = lastIndex;
        let currentItem = {
            value: this._array[startIndex],
            index: startIndex
        };
        while (startIndex < endIndex) {
            for (let i = --endIndex; i > startIndex; i--) {
                if (currentItem.value > this._array[i]) {
                    this._swapElements(currentItem.index, i);
                    currentItem.index = i;
                    this.listOfTurns.push(this._array.slice());
                    break;
                }
                endIndex = i;
            }
            for (let i = ++startIndex; i < currentItem.index; i++) {
                if (currentItem.value < this._array[i]) {
                    this._swapElements(currentItem.index, i);
                    currentItem.index = i;
                    this.listOfTurns.push(this._array.slice());
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

        return this._array;
    }

    mergeSort(array = this._array) {
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
        mergedArray.push(...leftArray, ...rightArray);

        return mergedArray;
    }

    _swapElements(indexA, indexB) {
        let tempItem = this._array[indexA];
        this._array[indexA] = this._array[indexB];
        this._array[indexB] = tempItem;
    }
}
