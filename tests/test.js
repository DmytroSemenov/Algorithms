mocha.setup('bdd');
let assert = chai.assert;

const unsortedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Testing insertion sort algorithm', () => {
    it('insertion sort', () => {
        const myArray = new smartArray(unsortedArray);
        const sortedInsertionArray = myArray.sortInsertion();
        assert.equal(sortedInsertionArray.toString(), expectedArray.toString());
    });
    it('quick sort', () => {
        const myArray1 = new smartArray(unsortedArray);
        const sortedQuickArray = myArray1.sortQuick();
        assert.equal(sortedQuickArray.toString(), expectedArray.toString());
    });
    it('merge sort', () => {
        const myArray2 = new smartArray(unsortedArray);
        const sortedMergeArray = myArray2.mergeSort();
        assert.equal(sortedMergeArray.toString(), expectedArray.toString());
    });
});

// describe('Testing swap elements method', function() {
//     const unsortedArray = [9, 1, 2, 3, 4, 5, 6, 7, 8, 0];
//     const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const testArray = new smartArray(unsortedArray);

//     it('swap elements 0, 9', () => {
//         testArray._swapElements(0, 9);
//         assert.equal(testArray.content.toString(), expectedArray.toString());
//     });

//     after(() => {
//         ancorDomElement.innerHTML = '';
//     });
// });

mocha.run();
