describe('Testing merge sort algorithm', function() {
    this.timeout(2000);
    const unsortedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const ancorDomElement = document.querySelector('.main-box');
    let sortedInsertionArray = [];

    before(function(done) {
        const testArray = new smartArray(ancorDomElement, unsortedArray);

        sortedInsertionArray = testArray.mergeSort();

        setTimeout(function() {
            done();
        }, 1200);
    });

    it('sort insertion passed', function() {
        assert.equal(sortedInsertionArray.toString(), expectedArray.toString());
    });

    after(() => {
        ancorDomElement.innerHTML = '';
    });
});
