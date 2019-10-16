/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventBus {
    constructor() {
        this.callbacksList = {};
    }
    setEventListener(eventName, callback) {
        if (!this.callbacksList.hasOwnProperty(eventName)) {
            this.callbacksList[eventName] = [];
        }
        this.callbacksList[eventName].push(callback);
    }
    emitEvent(eventName, data) {
        if (!this.callbacksList.hasOwnProperty(eventName)) {
            return;
        }
        const callbacksInEvent = this.callbacksList[eventName];
        for (const func of callbacksInEvent) {
            func(data);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventBus;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SmartArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewMobile__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MainController__ = __webpack_require__(5);




window.addEventListener('load', () => {
    const myArray = new __WEBPACK_IMPORTED_MODULE_0__SmartArray__["a" /* default */]();
    let viewport;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        viewport = new __WEBPACK_IMPORTED_MODULE_2__ViewMobile__["a" /* default */]();
    }
    else
        viewport = new __WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */]();
    const mainController = new __WEBPACK_IMPORTED_MODULE_3__MainController__["a" /* default */](myArray, viewport);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventBus__ = __webpack_require__(0);

class SmartArray extends __WEBPACK_IMPORTED_MODULE_0__EventBus__["a" /* default */] {
    constructor() {
        super();
        this.array = [];
        this.listOfTurns = [];
        this.isTest = false;
    }
    getArray() {
        return this.array.slice();
    }
    setArray(arr) {
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
                const tempElement = rightArray.shift();
                if (tempElement || tempElement === 0)
                    mergedArray.push(tempElement);
            }
            else {
                const tempElement = leftArray.shift();
                if (tempElement || tempElement === 0)
                    mergedArray.push(tempElement);
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
    createRandomArray(lengthOfArray) {
        const baseArray = [];
        for (let i = 0; i < lengthOfArray; i++) {
            baseArray.push(i);
        }
        baseArray.sort(() => Math.random() - 0.5);
        this.array = baseArray;
        this.listOfTurns = [baseArray.slice()];
        return baseArray.slice();
    }
    _swapElements(indexA, indexB) {
        let tempItem = this.array[indexA];
        this.array[indexA] = this.array[indexB];
        this.array[indexB] = tempItem;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SmartArray;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventBus__ = __webpack_require__(0);

class View extends __WEBPACK_IMPORTED_MODULE_0__EventBus__["a" /* default */] {
    constructor() {
        super();
        this.divMarginLeft = 55;
        this.divElements = [];
        this.timerId = undefined;
        this.domElement = document.querySelector('.main-box');
        this.logsElement = document.querySelector('.logs');
        this.startButton = document.getElementById('start');
        this.visualizeButton = document.getElementById('visualize');
        this.testSpeedButton = document.getElementById('testspeed');
        this.arraySizeInput = document.getElementById('arraySize');
        this.arraySizeTest = document.getElementById('arraySizeTest');
        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                // const arrayLength = +document.forms[0].elements.arraySize.value;
                let arrayL = document.forms[0].elements.namedItem('arraySize');
                let arrayLength = +arrayL.value;
                if (arrayLength > 2 && arrayLength < 51) {
                    let radio = document.forms[0].elements.namedItem('chooseAlgo');
                    const sortMethod = radio.value;
                    this.showInfo('Sorted');
                    this.emitEvent('start', { arrayLength, sortMethod });
                }
                else {
                    const info = `wrong size of array ( ${arrayLength} )! It should be between ( 2-51 )`;
                    this.showInfo(info, 'alert');
                }
            });
        }
        if (this.visualizeButton) {
            this.visualizeButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.emitEvent('visualize', false);
            });
        }
        if (this.testSpeedButton) {
            this.testSpeedButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.showInfo('Speed test in progress...', 'alert');
                let arrayLtest = document.forms[0].elements.namedItem('arraySizeTest');
                let testArrayLength = +arrayLtest.value;
                if (testArrayLength !== NaN &&
                    testArrayLength > 1 &&
                    testArrayLength < 30001) {
                    setTimeout(() => {
                        this.emitEvent('testSpeed', testArrayLength);
                    }, 10);
                }
                else {
                    this.showInfo('Wrong length of the array', 'alert');
                    console.log(testArrayLength);
                }
            });
        }
    }
    initRender(initArray) {
        if (this.domElement) {
            this.domElement.innerHTML = '';
            for (let i = 0; i < initArray.length; i++) {
                const div = document.createElement('div');
                div.className = 'box';
                div.style.marginLeft = `${this.divMarginLeft * i}px`;
                div.dataset.position = `${i}`;
                div.innerHTML = `${initArray[i]}`;
                this.domElement.append(div);
                this.divElements.push(div);
            }
        }
    }
    visualizeSortProcess(listOfTurns) {
        this.showInfo('Visualization started');
        clearInterval(this.timerId);
        this.timerId = setInterval(() => {
            let turn = listOfTurns.shift() || [];
            let valueOfElement;
            for (let position = 0; position < turn.length; position++) {
                valueOfElement = turn[position];
                for (let i = 0; i < this.divElements.length; i++) {
                    if (this.divElements[i].innerHTML == valueOfElement) {
                        this.divElements[i].dataset.position = `${position}`;
                    }
                }
            }
            this.divElements.forEach((domElement) => {
                let pos = +domElement.dataset.position;
                domElement.style.marginLeft = pos * this.divMarginLeft + 'px';
            });
            if (!listOfTurns.length) {
                clearInterval(this.timerId);
                this.showInfo(`Visualization finished`);
            }
        }, 1000);
    }
    showResult(startArray, sortMethod, resultArray, actionTime) {
        if (this.logsElement) {
            this.logsElement.innerHTML = `
        <div>Input array: ${startArray.join(' ')}</div>
        <div>Sorting method: ${sortMethod}</div>
        <div>Output array: ${resultArray.join(' ')}</div>
        <div>Render time: ${actionTime}ms</div>
        `;
        }
    }
    showSpeedTestResults(resultOfTests, testArrayLength) {
        const inputString = `Test array length: ${testArrayLength}`;
        const resultString = resultOfTests
            .map((algo) => `<div>Sorting method: ${algo.name}. Render time: ${algo.renderTime}ms</div>`)
            .join('');
        if (this.logsElement)
            this.logsElement.innerHTML = inputString + resultString;
    }
    showInfo(info, isAlert) {
        const infoPanel = document.querySelector('.info-panel');
        if (infoPanel) {
            infoPanel.innerHTML = info;
            if (isAlert) {
                infoPanel.classList.add('info-panel--red');
            }
            else {
                infoPanel.classList.remove('info-panel--red');
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventBus__ = __webpack_require__(0);

class ViewMobile extends __WEBPACK_IMPORTED_MODULE_0__EventBus__["a" /* default */] {
    constructor() {
        super();
        this.timerId = undefined;
        this.logsElement = document.querySelector('.logs');
        this.startButton = document.getElementById('start');
        this.visualizeButton = document.getElementById('visualize');
        this.testSpeedButton = document.getElementById('testspeed');
        this.infoPanel = document.querySelector('.info-panel');
        this.arraySizeInput = document.getElementById('arraySize');
        this.arraySizeTest = document.getElementById('arraySizeTest');
        console.log('MOBILE DETECTED');
        if (this.visualizeButton)
            this.visualizeButton.remove();
        if (this.startButton) {
            this.startButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                let arrayL = document.forms[0].elements.namedItem('arraySize');
                let arrayLength = +arrayL.value;
                if (+arrayLength > 2 && arrayLength < 51) {
                    let radio = document.forms[0].elements.namedItem('chooseAlgo');
                    const sortMethod = radio.value;
                    this.showInfo('Sorted');
                    this.emitEvent('start', { arrayLength, sortMethod });
                }
                else {
                    const info = `wrong size of array ( ${arrayLength} )! It should be between ( 2-51 )`;
                    this.showInfo(info, 'alert');
                }
            });
        }
        if (this.visualizeButton) {
            this.visualizeButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.emitEvent('visualize', false);
            });
        }
        if (this.testSpeedButton) {
            this.testSpeedButton.addEventListener('click', () => {
                clearInterval(this.timerId);
                this.showInfo('Speed test in progress...', 'alert');
                let arrayLtest = document.forms[0].elements.namedItem('arraySizeTest');
                let testArrayLength = +arrayLtest.value;
                if (testArrayLength !== NaN &&
                    testArrayLength > 1 &&
                    testArrayLength < 30001) {
                    setTimeout(() => {
                        this.emitEvent('testSpeed', testArrayLength);
                    }, 10);
                }
                else {
                    this.showInfo('Wrong length of the array', 'alert');
                    console.log(testArrayLength);
                }
            });
        }
    }
    initRender(initArray) { }
    visualizeSortProcess(listOfTurns) { }
    showResult(startArray, sortMethod, resultArray, actionTime) {
        if (this.logsElement) {
            this.logsElement.innerHTML = `
        <div>Input array: ${startArray.join(' ')}</div>
        <div>Sorting method: ${sortMethod}</div>
        <div>Output array: ${resultArray.join(' ')}</div>
        <div>Render time: ${actionTime}ms</div>
        `;
        }
    }
    showSpeedTestResults(resultOfTests, testArrayLength) {
        const inputString = `Test array length: ${testArrayLength}`;
        const resultString = resultOfTests
            .map((algo) => `<div>Sorting method: ${algo.name}. Render time: ${algo.renderTime}ms</div>`)
            .join('');
        if (this.logsElement)
            this.logsElement.innerHTML = inputString + resultString;
    }
    showInfo(info, isAlert) {
        if (this.infoPanel) {
            this.infoPanel.innerHTML = info;
            if (isAlert) {
                this.infoPanel.classList.add('info-panel--red');
            }
            else {
                this.infoPanel.classList.remove('info-panel--red');
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewMobile;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventBus__ = __webpack_require__(0);

class MainController extends __WEBPACK_IMPORTED_MODULE_0__EventBus__["a" /* default */] {
    constructor(arrayModel, viewModel) {
        super();
        this.arrayModel = arrayModel;
        this.viewModel = viewModel;
        this.viewModel.setEventListener('start', (data) => {
            this.arrayModel.createRandomArray(data.arrayLength);
            const startTime = Date.now();
            const startArray = this.arrayModel.getArray();
            const resultArray = this.arrayModel[data.sortMethod]();
            const finishTime = Date.now();
            this.viewModel.showResult(startArray, data.sortMethod, resultArray, finishTime - startTime);
        });
        this.viewModel.setEventListener('visualize', () => {
            if (this.arrayModel.listOfTurns.length > 2) {
                this.viewModel.initRender(this.arrayModel.listOfTurns[0]);
                this.viewModel.visualizeSortProcess(this.arrayModel.listOfTurns);
            }
            else {
                this.viewModel.showInfo('Use visualize after sort!!!', 'alert');
            }
        });
        this.viewModel.setEventListener('testSpeed', (testArrayLength) => {
            const testRes = this._testSpeeds(testArrayLength);
            this.viewModel.showSpeedTestResults(testRes, testArrayLength);
            this.viewModel.showInfo('Speed test complited', false);
        });
    }
    _testSpeeds(testArrayLength) {
        this.arrayModel.isTest = true;
        const testedAlgorithms = [
            { name: 'Insertion', funct: 'insertionSort', renderTime: 0 },
            { name: 'Quick', funct: 'quickSort', renderTime: 0 },
            { name: 'Merge', funct: 'mergeSort', renderTime: 0 },
            { name: 'Internal', funct: 'internalSort', renderTime: 0 }
        ];
        const testArray = this.arrayModel.createRandomArray(testArrayLength);
        testedAlgorithms.forEach(algo => {
            this.arrayModel.setArray(testArray);
            const startTime = Date.now();
            this.arrayModel[algo.funct]();
            const finishTime = Date.now();
            algo.renderTime = finishTime - startTime;
        });
        this.arrayModel.isTest = false;
        return testedAlgorithms;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainController;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDE0NzQ1MDg1NDdjMmQ2MzY2YmYiLCJ3ZWJwYWNrOi8vLy4vdHMvRXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvSW5pdC50cyIsIndlYnBhY2s6Ly8vLi90cy9TbWFydEFycmF5LnRzIiwid2VicGFjazovLy8uL3RzL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvVmlld01vYmlsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RlLE1BQU0sUUFBUTtJQUV6QjtRQURRLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRWhCLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsUUFBYTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxD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LFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzlCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MTQ3NDUwODU0N2MyZDYzNjZiZiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgY2FsbGJhY2tzTGlzdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FsbGJhY2tzTGlzdC5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzTGlzdFtldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzTGlzdFtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRFdmVudChldmVudE5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrc0xpc3QuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrc0luRXZlbnQgPSB0aGlzLmNhbGxiYWNrc0xpc3RbZXZlbnROYW1lXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgY2FsbGJhY2tzSW5FdmVudCkge1xyXG4gICAgICAgICAgICBmdW5jKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9FdmVudEJ1cy50cyIsImltcG9ydCBTbWFydEFycmF5IGZyb20gJy4vU21hcnRBcnJheSc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XHJcbmltcG9ydCBWaWV3TW9iaWxlIGZyb20gJy4vVmlld01vYmlsZSc7XHJcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL01haW5Db250cm9sbGVyJztcclxuaW1wb3J0IElWaWV3IGZyb20gJy4vSVZpZXcnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBteUFycmF5ID0gbmV3IFNtYXJ0QXJyYXkoKTtcclxuICAgIGxldCB2aWV3cG9ydDogYW55O1xyXG4gICAgaWYgKFxyXG4gICAgICAgIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcGFkfGlyaXN8a2luZGxlfEFuZHJvaWR8U2lsa3xsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICkgfHxcclxuICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cigwLCA0KVxyXG4gICAgICAgIClcclxuICAgICkge1xyXG4gICAgICAgIHZpZXdwb3J0ID0gbmV3IFZpZXdNb2JpbGUoKTtcclxuICAgIH0gZWxzZSB2aWV3cG9ydCA9IG5ldyBWaWV3KCk7XHJcblxyXG4gICAgY29uc3QgbWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIobXlBcnJheSwgdmlld3BvcnQpO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvSW5pdC50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0QXJyYXkgZXh0ZW5kcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgbGlzdE9mVHVybnM6IG51bWJlcltdW10gPSBbXTtcclxuICAgIGlzVGVzdDogYW55ID0gZmFsc2U7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXJyYXkoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnIuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmxpc3RPZlR1cm5zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0aW9uU29ydCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB7IHZhbHVlOiB0aGlzLmFycmF5W2ldLCBpbmRleDogaSB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlIDwgdGhpcy5hcnJheVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBxdWlja1NvcnQoZmlyc3RJbmRleCA9IDAsIGxhc3RJbmRleCA9IHRoaXMuYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UGFzc0luZGV4ID0gZmlyc3RJbmRleDtcclxuICAgICAgICBsZXQgZW5kUGFzc0luZGV4ID0gbGFzdEluZGV4O1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuYXJyYXlbZmlyc3RJbmRleF0sXHJcbiAgICAgICAgICAgIGluZGV4OiBmaXJzdEluZGV4XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aGlsZSAoc3RhcnRQYXNzSW5kZXggPCBlbmRQYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IC0tZW5kUGFzc0luZGV4OyBpID4gc3RhcnRQYXNzSW5kZXg7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlID4gdGhpcy5hcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW5kUGFzc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKytzdGFydFBhc3NJbmRleDsgaSA8IGN1cnJlbnRJdGVtLmluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSA8IHRoaXMuYXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwRWxlbWVudHMoY3VycmVudEl0ZW0uaW5kZXgsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mVHVybnMucHVzaCh0aGlzLmFycmF5LnNsaWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0UGFzc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uaW5kZXggLSBmaXJzdEluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aWNrU29ydChmaXJzdEluZGV4LCBjdXJyZW50SXRlbS5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXN0SW5kZXggLSBjdXJyZW50SXRlbS5pbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWlja1NvcnQoY3VycmVudEl0ZW0uaW5kZXggKyAxLCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVyZ2VTb3J0KGFycmF5ID0gdGhpcy5hcnJheSkge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBtaWRkbGVJbmRleDogbnVtYmVyID0gTWF0aC50cnVuYyhhcnJheS5sZW5ndGggLyAyKTtcclxuICAgICAgICBsZXQgbGVmdEFycmF5OiBudW1iZXJbXSA9IGFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KTtcclxuICAgICAgICBsZXQgcmlnaHRBcnJheTogbnVtYmVyW10gPSBhcnJheS5zbGljZShtaWRkbGVJbmRleCwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKGxlZnRBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxlZnRBcnJheSA9IHRoaXMubWVyZ2VTb3J0KGxlZnRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgcmlnaHRBcnJheSA9IHRoaXMubWVyZ2VTb3J0KHJpZ2h0QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAocmlnaHRBcnJheS5sZW5ndGggJiYgbGVmdEFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAocmlnaHRBcnJheVswXSA8IGxlZnRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHJpZ2h0QXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wRWxlbWVudCB8fCB0ZW1wRWxlbWVudCA9PT0gMCkgbWVyZ2VkQXJyYXkucHVzaCh0ZW1wRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudDogbnVtYmVyIHwgdW5kZWZpbmVkID0gbGVmdEFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcEVsZW1lbnQgfHwgdGVtcEVsZW1lbnQgPT09IDApIG1lcmdlZEFycmF5LnB1c2godGVtcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lcmdlZEFycmF5LnB1c2goLi4ubGVmdEFycmF5LCAuLi5yaWdodEFycmF5KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZlR1cm5zLnB1c2gobWVyZ2VkQXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZWRBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcm5hbFNvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJhbmRvbUFycmF5KGxlbmd0aE9mQXJyYXk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJhc2VBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aE9mQXJyYXk7IGkrKykge1xyXG4gICAgICAgICAgICBiYXNlQXJyYXkucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZUFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGJhc2VBcnJheTtcclxuICAgICAgICB0aGlzLmxpc3RPZlR1cm5zID0gW2Jhc2VBcnJheS5zbGljZSgpXTtcclxuICAgICAgICByZXR1cm4gYmFzZUFycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3N3YXBFbGVtZW50cyhpbmRleEE6IG51bWJlciwgaW5kZXhCOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGVtcEl0ZW0gPSB0aGlzLmFycmF5W2luZGV4QV07XHJcbiAgICAgICAgdGhpcy5hcnJheVtpbmRleEFdID0gdGhpcy5hcnJheVtpbmRleEJdO1xyXG4gICAgICAgIHRoaXMuYXJyYXlbaW5kZXhCXSA9IHRlbXBJdGVtO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL1NtYXJ0QXJyYXkudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBJVmlldyBmcm9tICcuL0lWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFdmVudEJ1cyBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIHByaXZhdGUgZGl2TWFyZ2luTGVmdDogbnVtYmVyID0gNTU7XHJcbiAgICBwcml2YXRlIGRpdkVsZW1lbnRzOiBIVE1MRGl2RWxlbWVudFtdID0gW107XHJcbiAgICBwcml2YXRlIHRpbWVySWQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJveCcpO1xyXG4gICAgcHJpdmF0ZSBsb2dzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dzJyk7XHJcbiAgICBwcml2YXRlIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XHJcbiAgICBwcml2YXRlIHZpc3VhbGl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUnKTtcclxuICAgIHByaXZhdGUgdGVzdFNwZWVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RzcGVlZCcpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemUnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemVUZXN0Jyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYXJyYXlMZW5ndGggPSArZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMuYXJyYXlTaXplLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TDogYW55ID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICdhcnJheVNpemUnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TGVuZ3RoID0gK2FycmF5TC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiAyICYmIGFycmF5TGVuZ3RoIDwgNTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaW86IGFueSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Nob29zZUFsZ28nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0TWV0aG9kID0gcmFkaW8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnU29ydGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3N0YXJ0JywgeyBhcnJheUxlbmd0aCwgc29ydE1ldGhvZCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGB3cm9uZyBzaXplIG9mIGFycmF5ICggJHthcnJheUxlbmd0aH0gKSEgSXQgc2hvdWxkIGJlIGJldHdlZW4gKCAyLTUxIClgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oaW5mbywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlzdWFsaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzdWFsaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Zpc3VhbGl6ZScsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXN0U3BlZWRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy50ZXN0U3BlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTcGVlZCB0ZXN0IGluIHByb2dyZXNzLi4uJywgJ2FsZXJ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5THRlc3Q6IGFueSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAnYXJyYXlTaXplVGVzdCdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVzdEFycmF5TGVuZ3RoID0gK2FycmF5THRlc3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoICE9PSBOYU4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoIDwgMzAwMDFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndGVzdFNwZWVkJywgdGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1dyb25nIGxlbmd0aCBvZiB0aGUgYXJyYXknLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlbmRlcihpbml0QXJyYXk6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2JveCc7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUubWFyZ2luTGVmdCA9IGAke3RoaXMuZGl2TWFyZ2luTGVmdCAqIGl9cHhgO1xyXG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQucG9zaXRpb24gPSBgJHtpfWA7XHJcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7aW5pdEFycmF5W2ldfWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkVsZW1lbnRzLnB1c2goZGl2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2aXN1YWxpemVTb3J0UHJvY2VzcyhsaXN0T2ZUdXJuczogbnVtYmVyW11bXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oJ1Zpc3VhbGl6YXRpb24gc3RhcnRlZCcpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dXJuOiBudW1iZXJbXSA9IGxpc3RPZlR1cm5zLnNoaWZ0KCkgfHwgW107XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZU9mRWxlbWVudDogYW55O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgdHVybi5sZW5ndGg7IHBvc2l0aW9uKyspIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlT2ZFbGVtZW50ID0gdHVybltwb3NpdGlvbl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGl2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXZFbGVtZW50c1tpXS5pbm5lckhUTUwgPT0gdmFsdWVPZkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50c1tpXS5kYXRhc2V0LnBvc2l0aW9uID0gYCR7cG9zaXRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9ICtkb21FbGVtZW50LmRhdGFzZXQucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBwb3MgKiB0aGlzLmRpdk1hcmdpbkxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFsaXN0T2ZUdXJucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYFZpc3VhbGl6YXRpb24gZmluaXNoZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dSZXN1bHQoXHJcbiAgICAgICAgc3RhcnRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgc29ydE1ldGhvZDogc3RyaW5nLFxyXG4gICAgICAgIHJlc3VsdEFycmF5OiBudW1iZXJbXSxcclxuICAgICAgICBhY3Rpb25UaW1lOiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nc0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXY+SW5wdXQgYXJyYXk6ICR7c3RhcnRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHtzb3J0TWV0aG9kfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+T3V0cHV0IGFycmF5OiAke3Jlc3VsdEFycmF5LmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlJlbmRlciB0aW1lOiAke2FjdGlvblRpbWV9bXM8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BlZWRUZXN0UmVzdWx0cyhyZXN1bHRPZlRlc3RzOiBbXSwgdGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFN0cmluZyA9IGBUZXN0IGFycmF5IGxlbmd0aDogJHt0ZXN0QXJyYXlMZW5ndGh9YDtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSByZXN1bHRPZlRlc3RzXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAoYWxnbzogeyBuYW1lOiBzdHJpbmc7IHJlbmRlclRpbWU6IG51bWJlciB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2PlNvcnRpbmcgbWV0aG9kOiAke2FsZ28ubmFtZX0uIFJlbmRlciB0aW1lOiAke2FsZ28ucmVuZGVyVGltZX1tczwvZGl2PmBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGlucHV0U3RyaW5nICsgcmVzdWx0U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmZvKGluZm86IHN0cmluZywgaXNBbGVydD86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGluZm9QYW5lbDogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1wYW5lbCcpO1xyXG4gICAgICAgIGlmIChpbmZvUGFuZWwpIHtcclxuICAgICAgICAgICAgaW5mb1BhbmVsLmlubmVySFRNTCA9IGluZm87XHJcbiAgICAgICAgICAgIGlmIChpc0FsZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvVmlldy50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IElWaWV3IGZyb20gJy4vSVZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld01vYmlsZSBleHRlbmRzIEV2ZW50QnVzIGltcGxlbWVudHMgSVZpZXcge1xyXG4gICAgcHJpdmF0ZSB0aW1lcklkOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGxvZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ3MnKTtcclxuICAgIHByaXZhdGUgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcclxuICAgIHByaXZhdGUgdmlzdWFsaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc3VhbGl6ZScpO1xyXG4gICAgcHJpdmF0ZSB0ZXN0U3BlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdHNwZWVkJyk7XHJcbiAgICBwcml2YXRlIGluZm9QYW5lbDogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1wYW5lbCcpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemUnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemVUZXN0Jyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNT0JJTEUgREVURUNURUQnKTtcclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHRoaXMudmlzdWFsaXplQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMOiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMZW5ndGggPSArYXJyYXlMLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCthcnJheUxlbmd0aCA+IDIgJiYgYXJyYXlMZW5ndGggPCA1MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpbzogYW55ID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hvb3NlQWxnbydcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRNZXRob2QgPSByYWRpby52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTb3J0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnc3RhcnQnLCB7IGFycmF5TGVuZ3RoLCBzb3J0TWV0aG9kIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYHdyb25nIHNpemUgb2YgYXJyYXkgKCAke2FycmF5TGVuZ3RofSApISBJdCBzaG91bGQgYmUgYmV0d2VlbiAoIDItNTEgKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhpbmZvLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxpemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndmlzdWFsaXplJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTcGVlZEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3RTcGVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1NwZWVkIHRlc3QgaW4gcHJvZ3Jlc3MuLi4nLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUx0ZXN0OiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZVRlc3QnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlc3RBcnJheUxlbmd0aCA9ICthcnJheUx0ZXN0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCAhPT0gTmFOICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCA8IDMwMDAxXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Rlc3RTcGVlZCcsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdXcm9uZyBsZW5ndGggb2YgdGhlIGFycmF5JywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW5kZXIoaW5pdEFycmF5OiBudW1iZXJbXSk6IHZvaWQge31cclxuXHJcbiAgICB2aXN1YWxpemVTb3J0UHJvY2VzcyhsaXN0T2ZUdXJuczogbnVtYmVyW11bXSk6IHZvaWQge31cclxuXHJcbiAgICBzaG93UmVzdWx0KFxyXG4gICAgICAgIHN0YXJ0QXJyYXk6IG51bWJlcltdLFxyXG4gICAgICAgIHNvcnRNZXRob2Q6IHN0cmluZyxcclxuICAgICAgICByZXN1bHRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgYWN0aW9uVGltZTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2PklucHV0IGFycmF5OiAke3N0YXJ0QXJyYXkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+U29ydGluZyBtZXRob2Q6ICR7c29ydE1ldGhvZH08L2Rpdj5cclxuICAgICAgICA8ZGl2Pk91dHB1dCBhcnJheTogJHtyZXN1bHRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5SZW5kZXIgdGltZTogJHthY3Rpb25UaW1lfW1zPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWVkVGVzdFJlc3VsdHMocmVzdWx0T2ZUZXN0czogW10sIHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTdHJpbmcgPSBgVGVzdCBhcnJheSBsZW5ndGg6ICR7dGVzdEFycmF5TGVuZ3RofWA7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gcmVzdWx0T2ZUZXN0c1xyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgKGFsZ286IHsgbmFtZTogc3RyaW5nOyByZW5kZXJUaW1lOiBudW1iZXIgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHthbGdvLm5hbWV9LiBSZW5kZXIgdGltZTogJHthbGdvLnJlbmRlclRpbWV9bXM8L2Rpdj5gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudClcclxuICAgICAgICAgICAgdGhpcy5sb2dzRWxlbWVudC5pbm5lckhUTUwgPSBpbnB1dFN0cmluZyArIHJlc3VsdFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5mbyhpbmZvOiBzdHJpbmcsIGlzQWxlcnQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmZvUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuaW5uZXJIVE1MID0gaW5mbztcclxuICAgICAgICAgICAgaWYgKGlzQWxlcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwtLXJlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvVmlld01vYmlsZS50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IFNtYXJ0QXJyYXkgZnJvbSAnLi9TbWFydEFycmF5JztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBhcnJheU1vZGVsOiBTbWFydEFycmF5O1xyXG4gICAgcHJpdmF0ZSB2aWV3TW9kZWw6IFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyYXlNb2RlbDogU21hcnRBcnJheSwgdmlld01vZGVsOiBWaWV3KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFycmF5TW9kZWwgPSBhcnJheU1vZGVsO1xyXG4gICAgICAgIHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKCdzdGFydCcsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLmNyZWF0ZVJhbmRvbUFycmF5KGRhdGEuYXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXJyYXk6IG51bWJlcltdID0gdGhpcy5hcnJheU1vZGVsLmdldEFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFycmF5OiBudW1iZXJbXSA9IHRoaXMuYXJyYXlNb2RlbFtkYXRhLnNvcnRNZXRob2RdKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93UmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBcnJheSxcclxuICAgICAgICAgICAgICAgIGRhdGEuc29ydE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZmluaXNoVGltZSAtIHN0YXJ0VGltZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKCd2aXN1YWxpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFJlbmRlcih0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwudmlzdWFsaXplU29ydFByb2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLmxpc3RPZlR1cm5zXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuc2hvd0luZm8oJ1VzZSB2aXN1YWxpemUgYWZ0ZXIgc29ydCEhIScsICdhbGVydCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlld01vZGVsLnNldEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICd0ZXN0U3BlZWQnLFxyXG4gICAgICAgICAgICAodGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXM6IGFueSA9IHRoaXMuX3Rlc3RTcGVlZHModGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnNob3dTcGVlZFRlc3RSZXN1bHRzKHRlc3RSZXMsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93SW5mbygnU3BlZWQgdGVzdCBjb21wbGl0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF90ZXN0U3BlZWRzKHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsLmlzVGVzdCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdGVzdGVkQWxnb3JpdGhtcyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnSW5zZXJ0aW9uJywgZnVuY3Q6ICdpbnNlcnRpb25Tb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdRdWljaycsIGZ1bmN0OiAncXVpY2tTb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdNZXJnZScsIGZ1bmN0OiAnbWVyZ2VTb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdJbnRlcm5hbCcsIGZ1bmN0OiAnaW50ZXJuYWxTb3J0JywgcmVuZGVyVGltZTogMCB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCB0ZXN0QXJyYXkgPSB0aGlzLmFycmF5TW9kZWwuY3JlYXRlUmFuZG9tQXJyYXkodGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICB0ZXN0ZWRBbGdvcml0aG1zLmZvckVhY2goYWxnbyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlNb2RlbC5zZXRBcnJheSh0ZXN0QXJyYXkpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5TW9kZWxbYWxnby5mdW5jdF0oKTtcclxuICAgICAgICAgICAgY29uc3QgZmluaXNoVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGFsZ28ucmVuZGVyVGltZSA9IGZpbmlzaFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsLmlzVGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0ZXN0ZWRBbGdvcml0aG1zO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL01haW5Db250cm9sbGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==