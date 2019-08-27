mocha.setup('bdd');
let assert = chai.assert;

const unsortedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Testing insertion sort algorithm', () => {
    it('insertion sort', () => {
        const myArray = new SmartArray(unsortedArray);
        const sortedInsertionArray = myArray.insertionSort();
        assert.equal(expectedArray.toString(), sortedInsertionArray.toString());
    });
    it('quick sort', () => {
        const myArray1 = new SmartArray(unsortedArray);
        const sortedQuickArray = myArray1.quickSort();
        assert.equal(expectedArray.toString(), sortedQuickArray.toString());
    });
    it('merge sort', () => {
        const myArray2 = new SmartArray(unsortedArray);
        const sortedMergeArray = myArray2.mergeSort();
        assert.equal(expectedArray.toString(), sortedMergeArray.toString());
    });
});

describe('Testing swap elements method', function() {
    const unsortedArray = [9, 1, 2, 3, 4, 5, 6, 7, 8, 0];
    const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const testArray = new SmartArray(unsortedArray);

    it('swap elements 0, 9', () => {
        testArray._swapElements(0, 9);
        assert.equal(expectedArray.toString(), testArray._array.toString());
    });
});

mocha.run();
