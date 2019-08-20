function createRandomArray(lengthOfArray) {
    const baseArray = [];

    for (let i = 0; i < lengthOfArray; i++) {
        baseArray.push(i);
    }
    return baseArray.sort((a, b) => Math.random() - 0.5);
}

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('.main-box').innerHTML = '';
    const arrayLength = +document.forms[0].elements.arraySize.value;
    const arrayToSort = createRandomArray(arrayLength);
    console.log(`Input array: ${arrayToSort}`);
    const myArray = new smartArray(
        document.querySelector('.main-box'),
        arrayToSort
    );

    const func = document.forms[0].elements.chooseAlgo.value;
    // myArray.sortInsertion();
    // myArray.sortQuick();
    console.log(func);
    const arraySorted = myArray[func]();

    setTimeout(() => {
        console.log(`Output array: ${arraySorted || arrayToSort}`);
    }, 10000);
});
