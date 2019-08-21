'use strict';

function createRandomArray(lengthOfArray) {
    const baseArray = [];
    for (let i = 0; i < lengthOfArray; i++) {
        baseArray.push(i);
    }
    return baseArray.sort(() => Math.random() - 0.5);
}

document.getElementById('start').addEventListener('click', () => {
    const arrayLength = +document.forms[0].elements.arraySize.value;
    const arrayForSort = createRandomArray(arrayLength);
    const myArray = new smartArray(arrayForSort);
    const sortMethod = document.forms[0].elements.chooseAlgo.value;
    const viewport = new Viewport(arrayForSort);

    console.log(`Input array: ${arrayForSort}`);
    console.log(sortMethod);
    console.log(`Output array: ${myArray[sortMethod]()}`);
});
