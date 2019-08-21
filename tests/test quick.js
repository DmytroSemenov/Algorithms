describe('Testing quick sort algorithm', function() {
    this.timeout(20000);
    const unsortedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const ancorDomElement = document.querySelector('.main-box');
    let sortedInsertionArray = [];

    before(function(done) {
        const testArray = new smartArray(ancorDomElement, unsortedArray);
        testArray.sortQuick();
        sortedInsertionArray = testArray.content;

        setTimeout(function() {
            done();
        }, 11000);
    });

    it('sort insertion passed', function() {
        assert.equal(sortedInsertionArray.toString(), expectedArray.toString());
    });

    after(() => {
        ancorDomElement.innerHTML = '';
    });
});
