import EventBus from './EventBus.js';

export default class SmartArray extends EventBus {
    private array: number[] = [];
    listOfTurns: number[][] = [];
    isTest: any = false;
    [key: string]: any;
    constructor() {
        super();
    }

    getArray() {
        return this.array.slice();
    }

    setArray(arr: number[]) {
        this.array = arr.slice();
        this.listOfTurns = [];
    }

    insertionSort() {
        for (let i = 1; i < this.array.length; i++) {
            const currentItem = { value: this.array[i], index: i };

            for (let j = i - 1; j >= 0; j--) {
                if (currentItem.value < this.array[j]) {
                    this._swapElements(currentItem.index, j);
                    currentItem.index = j;
                    if (!this.isTest) {
                        this.listOfTurns.push(this.array.slice());
                    }
                }
            }
        }

        return this.array;
    }

    quickSort(firstIndex = 0, lastIndex = this.array.length) {
        let startPassIndex = firstIndex;
        let endPassIndex = lastIndex;
        let currentItem = {
            value: this.array[firstIndex],
            index: firstIndex
        };
        while (startPassIndex < endPassIndex) {
            for (let i = --endPassIndex; i > startPassIndex; i--) {
                if (currentItem.value > this.array[i]) {
                    this._swapElements(currentItem.index, i);
                    currentItem.index = i;
                    if (!this.isTest) {
                        this.listOfTurns.push(this.array.slice());
                    }
                    break;
                }
                endPassIndex = i;
            }
            for (let i = ++startPassIndex; i < currentItem.index; i++) {
                if (currentItem.value < this.array[i]) {
                    this._swapElements(currentItem.index, i);
                    currentItem.index = i;
                    if (!this.isTest) {
                        this.listOfTurns.push(this.array.slice());
                    }
                    break;
                }
                startPassIndex = i;
            }
        }
        if (currentItem.index - firstIndex > 1) {
            this.quickSort(firstIndex, currentItem.index);
        }
        if (lastIndex - currentItem.index > 1) {
            this.quickSort(currentItem.index + 1, lastIndex);
        }

        return this.array;
    }

    mergeSort(array = this.array) {
        const mergedArray: number[] = [];
        let middleIndex: number = Math.trunc(array.length / 2);
        let leftArray: number[] = array.slice(0, middleIndex);
        let rightArray: number[] = array.slice(middleIndex, array.length);

        if (leftArray.length > 1) {
            leftArray = this.mergeSort(leftArray);
        }
        if (rightArray.length > 1) {
            rightArray = this.mergeSort(rightArray);
        }
        while (rightArray.length && leftArray.length) {
            if (rightArray[0] < leftArray[0]) {
                const tempElement: number | undefined = rightArray.shift();
                if (tempElement || tempElement === 0) mergedArray.push(tempElement);
            } else {
                const tempElement: number | undefined = leftArray.shift();
                if (tempElement || tempElement === 0) mergedArray.push(tempElement);
            }
        }
        mergedArray.push(...leftArray, ...rightArray);

        if (!this.isTest) {
            this.listOfTurns.push(mergedArray.slice());
        }
        return mergedArray;
    }

    internalSort() {
        return this.array.sort((a, b) => a - b);
    }

    createRandomArray(lengthOfArray: number) {
        const baseArray: number[] = [];
        for (let i = 0; i < lengthOfArray; i++) {
            baseArray.push(i);
        }
        baseArray.sort(() => Math.random() - 0.5);
        this.array = baseArray;
        this.listOfTurns = [baseArray.slice()];
        return baseArray.slice();
    }

    _swapElements(indexA: number, indexB: number) {
        let tempItem = this.array[indexA];
        this.array[indexA] = this.array[indexB];
        this.array[indexB] = tempItem;
    }
}
