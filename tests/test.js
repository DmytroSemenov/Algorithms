mocha.setup('bdd');
let assert = chai.assert;
const ancorDomElement = document.querySelector('.main-box');

describe('Testing swap elements method', function() {
    const unsortedArray = [9, 1, 2, 3, 4, 5, 6, 7, 8, 0];
    const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const testArray = new smartArray(ancorDomElement, unsortedArray);

    it('swap elements 0, 9', () => {
        testArray._swapElements(0, 9);
        assert.equal(testArray.content.toString(), expectedArray.toString());
    });

    after(() => {
        ancorDomElement.innerHTML = '';
    });
});

mocha.run();
