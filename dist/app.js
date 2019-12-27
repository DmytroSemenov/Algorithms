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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Login__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SmartArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__View__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewMobile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MainController__ = __webpack_require__(6);





window.addEventListener('load', () => {
    const login = new __WEBPACK_IMPORTED_MODULE_0__Login__["a" /* default */]();
    const myArray = new __WEBPACK_IMPORTED_MODULE_1__SmartArray__["a" /* default */]();
    login.setEventListener('logged', () => {
        let viewport;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            viewport = new __WEBPACK_IMPORTED_MODULE_3__ViewMobile__["a" /* default */]();
        }
        else
            viewport = new __WEBPACK_IMPORTED_MODULE_2__View__["a" /* default */]();
        new __WEBPACK_IMPORTED_MODULE_4__MainController__["a" /* default */](myArray, viewport);
    });
    // const mainController = new MainController(myArray, viewport);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventBus__ = __webpack_require__(0);

class Login extends __WEBPACK_IMPORTED_MODULE_0__EventBus__["a" /* default */] {
    constructor() {
        super();
        this.db = window.openDatabase('itemDB', '1.0', 'itemDB', 65535);
        this.createBtn = document.getElementById('create');
        this.removeBtn = document.getElementById('remove');
        this.loginBtn = document.getElementById('login_btn');
        this.listBtn = document.getElementById('show');
        this.usernameField = document.getElementById('username');
        this.passwordField = document.getElementById('password');
        this.isAdminField = document.getElementById('admin');
        this.messagesField = document.querySelector('.messages');
        this.adminContainer = document.querySelector('.admin-container');
        this.table = document.querySelector('.table_users');
        this.isAdminLogged = false;
        this.isGuestLogged = true;
        this.isAdmin = false;
        let th = this;
        if (this.createBtn)
            this.createBtn.addEventListener('click', th.onCreateTable.bind(th));
        if (this.removeBtn)
            this.removeBtn.addEventListener('click', th.onDeleteTable.bind(th));
        if (this.loginBtn)
            this.loginBtn.addEventListener('click', th.onLogin.bind(th));
        if (this.listBtn)
            this.listBtn.addEventListener('click', th.onShowUsersList.bind(th));
        if (this.isAdminField)
            this.isAdminField.checked = false;
        if (this.adminContainer)
            this.adminContainer.hidden = true;
        this.showInfo('Please, login first');
    }
    onLogin() {
        if (this.usernameField && !this.usernameField.value) {
            this.showInfo('Please, enter your login');
            return;
        }
        this.loginUser();
    }
    addUser(username, password, isAdmin, isGuest) {
        this.db.transaction(transaction => {
            const sql = 'INSERT INTO users (username, password, timestamp, isAdmin, isGuest) VALUES(?,?,?,?,?)';
            transaction.executeSql(sql, [username, password, new Date(), isAdmin, isGuest], () => {
                this.showInfo('New item has added successfully');
            }, (transaction, error) => {
                this.showInfo(`<ADD> ${error.message}`);
                return false;
            });
        });
    }
    loginUser() {
        let username;
        let password;
        if (this.usernameField)
            username = this.usernameField.value;
        if (this.passwordField)
            password = this.passwordField.value;
        this.db.transaction(transaction => {
            const sql = 'SELECT * FROM users WHERE username=?';
            transaction.executeSql(sql, [username], (transaction, result) => {
                if (result.rows.length) {
                    for (let i = 0; i < result.rows.length; i++) {
                        let user = result.rows.item(i);
                        if (user.password === password) {
                            this.isGuestLogged = password === '';
                            this.updateUserTime();
                            this.emitEvent('logged', { username });
                            if (user.isAdmin === 'true') {
                                if (this.adminContainer)
                                    this.adminContainer.hidden = false;
                                this.isAdminLogged = true;
                            }
                            else {
                                if (this.isAdminField)
                                    this.isAdminField.checked = false;
                                if (this.adminContainer)
                                    this.adminContainer.hidden = true;
                                this.isAdminLogged = false;
                            }
                        }
                        else
                            this.showInfo('User is present or password is incorrect');
                    }
                }
                else {
                    if (password === '') {
                        this.isAdmin = false;
                        this.isAdminLogged = false;
                        this.isGuestLogged = true;
                        if (this.isAdminField)
                            this.isAdminField.checked = false;
                        if (this.adminContainer)
                            this.adminContainer.hidden = true;
                    }
                    else if (this.isAdminField) {
                        this.isAdmin = this.isAdminField.checked;
                        this.isAdminLogged = this.isAdminField.checked;
                        if (this.adminContainer)
                            this.adminContainer.hidden = !this.isAdminField.checked;
                        this.isGuestLogged = false;
                        this.isAdminField.checked = false;
                    }
                    this.addUser(username, password, this.isAdmin.toString(), `${password === ''}`);
                    this.emitEvent('logged', { username });
                }
            }, (transaction, error) => {
                this.showInfo(`<CHECK> ${error.message}`);
                return false;
            });
        });
    }
    updateUserTime() {
        let username;
        if (this.usernameField)
            username = this.usernameField.value;
        this.db.transaction(transaction => {
            const sql = `UPDATE users SET timestamp=? WHERE username=?`;
            transaction.executeSql(sql, [new Date(), username], (transaction, result) => {
                this.showInfo(`User ${username} is logged in`);
            }, (transaction, error) => {
                this.showInfo(`<UPDATE> ${error.message}`);
                return false;
            });
        });
    }
    onShowUsersList() {
        if (this.table)
            this.table.innerHTML = '';
        let fieldsToShow = 'id, username, timestamp';
        if (this.isAdminLogged)
            fieldsToShow = '*';
        if (this.isGuestLogged)
            fieldsToShow = 'id, username';
        this.db.transaction(transaction => {
            const sql = `SELECT ${fieldsToShow} FROM users ORDER BY id`;
            transaction.executeSql(sql, undefined, (transaction, result) => {
                if (result.rows.length) {
                    let tableText = `<tr>`;
                    for (const key in result.rows.item(0)) {
                        tableText += `<td>${key}</td>`;
                    }
                    tableText += `</tr>`;
                    for (let i = 0; i < result.rows.length; i++) {
                        let row = result.rows.item(i);
                        tableText += `<tr>`;
                        for (const key in result.rows.item(i)) {
                            tableText += `<td>${row[key]}</td>`;
                        }
                        tableText += `</tr>`;
                    }
                    if (this.table)
                        this.table.innerHTML = tableText;
                }
                else if (this.table) {
                    this.table.innerHTML = `<tr><td colspan="3" align="center">No Items Found</td></tr>`;
                }
            }, (transaction, error) => {
                console.log(error.message);
                return false;
            });
        });
    }
    showInfo(text) {
        console.log(text);
        if (this.messagesField)
            this.messagesField.innerHTML = text;
    }
    onCreateTable() {
        this.db.transaction(transaction => {
            const sql = 'CREATE TABLE users ' +
                '(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,' +
                'username VARCHAR(100) NOT NULL,' +
                'password VARCHAR(10) NOT NULL,' +
                'isAdmin VARCHAR(5) NOT NULL,' +
                'isGuest VARCHAR(5) NOT NULL,' +
                'timestamp VARCHAR(10) NOT NULL)';
            transaction.executeSql(sql, undefined, () => {
                this.showInfo('Table created successfully');
            }, () => {
                this.showInfo('Table has already been created');
                return false;
            });
        });
        this.addUser('admin', 'admin', 'true', 'false');
    }
    onDeleteTable() {
        if (!confirm('Are You Sure?'))
            return;
        this.db.transaction(transaction => {
            let sql = 'DROP TABLE users ';
            transaction.executeSql(sql, undefined, () => {
                this.showInfo('Table deleted successfully');
            }, () => {
                this.showInfo('Error occured while deleting');
                return false;
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Login;



/***/ }),
/* 3 */
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
/* 4 */
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
                // const arrayLength = +document.forms[1].elements.arraySize.value;
                let arrayL = document.forms[1].elements.namedItem('arraySize');
                let arrayLength = +arrayL.value;
                if (arrayLength > 2 && arrayLength < 51) {
                    let radio = document.forms[1].elements.namedItem('chooseAlgo');
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
                let arrayLtest = document.forms[1].elements.namedItem('arraySizeTest');
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
/* 5 */
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
/* 6 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTBiMzg0MTc5MzAxZjg0OGZiOWUiLCJ3ZWJwYWNrOi8vLy4vdHMvRXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvSW5pdC50cyIsIndlYnBhY2s6Ly8vLi90cy9Mb2dpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9TbWFydEFycmF5LnRzIiwid2VicGFjazovLy8uL3RzL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvVmlld01vYmlsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RlLE1BQU0sUUFBUTtJQUV6QjtRQURRLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRWhCLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsUUFBYTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMs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ZUFBZSxDQUFDLENBQUM7UUFDckUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzlCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMGIzODQxNzkzMDFmODQ4ZmI5ZSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgY2FsbGJhY2tzTGlzdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FsbGJhY2tzTGlzdC5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzTGlzdFtldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzTGlzdFtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRFdmVudChldmVudE5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrc0xpc3QuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrc0luRXZlbnQgPSB0aGlzLmNhbGxiYWNrc0xpc3RbZXZlbnROYW1lXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgY2FsbGJhY2tzSW5FdmVudCkge1xyXG4gICAgICAgICAgICBmdW5jKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9FdmVudEJ1cy50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xyXG5pbXBvcnQgU21hcnRBcnJheSBmcm9tICcuL1NtYXJ0QXJyYXknO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcnO1xyXG5pbXBvcnQgVmlld01vYmlsZSBmcm9tICcuL1ZpZXdNb2JpbGUnO1xyXG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udHJvbGxlcic7XHJcbmltcG9ydCBJVmlldyBmcm9tICcuL0lWaWV3JztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbG9naW4gPSBuZXcgTG9naW4oKTtcclxuICAgIGNvbnN0IG15QXJyYXkgPSBuZXcgU21hcnRBcnJheSgpO1xyXG4gICAgbG9naW4uc2V0RXZlbnRMaXN0ZW5lcignbG9nZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB2aWV3cG9ydDogYW55O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlwYWR8aXJpc3xraW5kbGV8QW5kcm9pZHxTaWxrfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgIC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LnN1YnN0cigwLCA0KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gbmV3IFZpZXdNb2JpbGUoKTtcclxuICAgICAgICB9IGVsc2Ugdmlld3BvcnQgPSBuZXcgVmlldygpO1xyXG5cclxuICAgICAgICBuZXcgTWFpbkNvbnRyb2xsZXIobXlBcnJheSwgdmlld3BvcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgbWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIobXlBcnJheSwgdmlld3BvcnQpO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvSW5pdC50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBkYjogRGF0YWJhc2UgPSB3aW5kb3cub3BlbkRhdGFiYXNlKCdpdGVtREInLCAnMS4wJywgJ2l0ZW1EQicsIDY1NTM1KTtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xyXG4gICAgcHJpdmF0ZSByZW1vdmVCdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUnKTtcclxuICAgIHByaXZhdGUgbG9naW5CdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbl9idG4nKTtcclxuICAgIHByaXZhdGUgbGlzdEJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3cnKTtcclxuICAgIHByaXZhdGUgdXNlcm5hbWVGaWVsZDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkRmllbGQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgcHJpdmF0ZSBpc0FkbWluRmllbGQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbicpO1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlc0ZpZWxkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZXMnKTtcclxuICAgIHByaXZhdGUgYWRtaW5Db250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZG1pbi1jb250YWluZXInKTtcclxuICAgIHByaXZhdGUgdGFibGU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV91c2VycycpO1xyXG5cclxuICAgIHByaXZhdGUgaXNBZG1pbkxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0d1ZXN0TG9nZ2VkID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNBZG1pbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IHRoID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVCdG4pIHRoaXMuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGgub25DcmVhdGVUYWJsZS5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlQnRuKSB0aGlzLnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uRGVsZXRlVGFibGUuYmluZCh0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luQnRuKSB0aGlzLmxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGgub25Mb2dpbi5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdEJ0bikgdGhpcy5saXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGgub25TaG93VXNlcnNMaXN0LmJpbmQodGgpKTtcclxuICAgICAgICBpZiAodGhpcy5pc0FkbWluRmllbGQpIHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oJ1BsZWFzZSwgbG9naW4gZmlyc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXJuYW1lRmllbGQgJiYgIXRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdQbGVhc2UsIGVudGVyIHlvdXIgbG9naW4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZ2luVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgaXNBZG1pbjogc3RyaW5nLCBpc0d1ZXN0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gJ0lOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSwgcGFzc3dvcmQsIHRpbWVzdGFtcCwgaXNBZG1pbiwgaXNHdWVzdCkgVkFMVUVTKD8sPyw/LD8sPyknO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgW3VzZXJuYW1lLCBwYXNzd29yZCwgbmV3IERhdGUoKSwgaXNBZG1pbiwgaXNHdWVzdF0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnTmV3IGl0ZW0gaGFzIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYDxBREQ+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5Vc2VyKCkge1xyXG4gICAgICAgIGxldCB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VybmFtZUZpZWxkKSB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5wYXNzd29yZEZpZWxkKSBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9ICdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lPT8nO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgW3VzZXJuYW1lXSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3VsdC5yb3dzLml0ZW0oaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR3Vlc3RMb2dnZWQgPSBwYXNzd29yZCA9PT0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCdsb2dnZWQnLCB7dXNlcm5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5pc0FkbWluID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRtaW5Db250YWluZXIpIHRoaXMuYWRtaW5Db250YWluZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkxvZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNob3dJbmZvKCdVc2VyIGlzIHByZXNlbnQgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0d1ZXN0TG9nZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWRtaW5GaWVsZCkgdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRtaW5Db250YWluZXIpIHRoaXMuYWRtaW5Db250YWluZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQWRtaW5GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluID0gdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkxvZ2dlZCA9IHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSAhdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNHdWVzdExvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFVzZXIodXNlcm5hbWUsIHBhc3N3b3JkLCB0aGlzLmlzQWRtaW4udG9TdHJpbmcoKSwgYCR7cGFzc3dvcmQgPT09ICcnfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnbG9nZ2VkJywge3VzZXJuYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYDxDSEVDSz4gJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc2VyVGltZSgpIHtcclxuICAgICAgICBsZXQgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy51c2VybmFtZUZpZWxkKSB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZTtcclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gYFVQREFURSB1c2VycyBTRVQgdGltZXN0YW1wPT8gV0hFUkUgdXNlcm5hbWU9P2A7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoKSwgdXNlcm5hbWVdLFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgcmVzdWx0OiBTUUxSZXN1bHRTZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGBVc2VyICR7dXNlcm5hbWV9IGlzIGxvZ2dlZCBpbmApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYDxVUERBVEU+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93VXNlcnNMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYmxlKSB0aGlzLnRhYmxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGxldCBmaWVsZHNUb1Nob3cgPSAnaWQsIHVzZXJuYW1lLCB0aW1lc3RhbXAnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQWRtaW5Mb2dnZWQpIGZpZWxkc1RvU2hvdyA9ICcqJztcclxuICAgICAgICBpZiAodGhpcy5pc0d1ZXN0TG9nZ2VkKSBmaWVsZHNUb1Nob3cgPSAnaWQsIHVzZXJuYW1lJztcclxuXHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGBTRUxFQ1QgJHtmaWVsZHNUb1Nob3d9IEZST00gdXNlcnMgT1JERVIgQlkgaWRgO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZVRleHQgPSBgPHRyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdC5yb3dzLml0ZW0oMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVGV4dCArPSBgPHRkPiR7a2V5fTwvdGQ+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVUZXh0ICs9IGA8L3RyPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gcmVzdWx0LnJvd3MuaXRlbShpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVRleHQgKz0gYDx0cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0LnJvd3MuaXRlbShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVGV4dCArPSBgPHRkPiR7cm93W2tleV19PC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVGV4dCArPSBgPC90cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZSkgdGhpcy50YWJsZS5pbm5lckhUTUwgPSB0YWJsZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuaW5uZXJIVE1MID0gYDx0cj48dGQgY29sc3Bhbj1cIjNcIiBhbGlnbj1cImNlbnRlclwiPk5vIEl0ZW1zIEZvdW5kPC90ZD48L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5mbyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlc0ZpZWxkKSB0aGlzLm1lc3NhZ2VzRmllbGQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPVxyXG4gICAgICAgICAgICAgICAgJ0NSRUFURSBUQUJMRSB1c2VycyAnICtcclxuICAgICAgICAgICAgICAgICcoaWQgSU5URUdFUiBOT1QgTlVMTCBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCcgK1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lIFZBUkNIQVIoMTAwKSBOT1QgTlVMTCwnICtcclxuICAgICAgICAgICAgICAgICdwYXNzd29yZCBWQVJDSEFSKDEwKSBOT1QgTlVMTCwnICtcclxuICAgICAgICAgICAgICAgICdpc0FkbWluIFZBUkNIQVIoNSkgTk9UIE5VTEwsJyArXHJcbiAgICAgICAgICAgICAgICAnaXNHdWVzdCBWQVJDSEFSKDUpIE5PVCBOVUxMLCcgK1xyXG4gICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCBWQVJDSEFSKDEwKSBOT1QgTlVMTCknO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1RhYmxlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1RhYmxlIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRVc2VyKCdhZG1pbicsICdhZG1pbicsICd0cnVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVUYWJsZSgpIHtcclxuICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSBZb3UgU3VyZT8nKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgbGV0IHNxbCA9ICdEUk9QIFRBQkxFIHVzZXJzICc7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnVGFibGUgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnRXJyb3Igb2NjdXJlZCB3aGlsZSBkZWxldGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9Mb2dpbi50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0QXJyYXkgZXh0ZW5kcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgbGlzdE9mVHVybnM6IG51bWJlcltdW10gPSBbXTtcclxuICAgIGlzVGVzdDogYW55ID0gZmFsc2U7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXJyYXkoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnIuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmxpc3RPZlR1cm5zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0aW9uU29ydCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB7IHZhbHVlOiB0aGlzLmFycmF5W2ldLCBpbmRleDogaSB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlIDwgdGhpcy5hcnJheVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBxdWlja1NvcnQoZmlyc3RJbmRleCA9IDAsIGxhc3RJbmRleCA9IHRoaXMuYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UGFzc0luZGV4ID0gZmlyc3RJbmRleDtcclxuICAgICAgICBsZXQgZW5kUGFzc0luZGV4ID0gbGFzdEluZGV4O1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuYXJyYXlbZmlyc3RJbmRleF0sXHJcbiAgICAgICAgICAgIGluZGV4OiBmaXJzdEluZGV4XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aGlsZSAoc3RhcnRQYXNzSW5kZXggPCBlbmRQYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IC0tZW5kUGFzc0luZGV4OyBpID4gc3RhcnRQYXNzSW5kZXg7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlID4gdGhpcy5hcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW5kUGFzc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKytzdGFydFBhc3NJbmRleDsgaSA8IGN1cnJlbnRJdGVtLmluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSA8IHRoaXMuYXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwRWxlbWVudHMoY3VycmVudEl0ZW0uaW5kZXgsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mVHVybnMucHVzaCh0aGlzLmFycmF5LnNsaWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0UGFzc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uaW5kZXggLSBmaXJzdEluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aWNrU29ydChmaXJzdEluZGV4LCBjdXJyZW50SXRlbS5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXN0SW5kZXggLSBjdXJyZW50SXRlbS5pbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWlja1NvcnQoY3VycmVudEl0ZW0uaW5kZXggKyAxLCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVyZ2VTb3J0KGFycmF5ID0gdGhpcy5hcnJheSkge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBtaWRkbGVJbmRleDogbnVtYmVyID0gTWF0aC50cnVuYyhhcnJheS5sZW5ndGggLyAyKTtcclxuICAgICAgICBsZXQgbGVmdEFycmF5OiBudW1iZXJbXSA9IGFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KTtcclxuICAgICAgICBsZXQgcmlnaHRBcnJheTogbnVtYmVyW10gPSBhcnJheS5zbGljZShtaWRkbGVJbmRleCwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKGxlZnRBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxlZnRBcnJheSA9IHRoaXMubWVyZ2VTb3J0KGxlZnRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgcmlnaHRBcnJheSA9IHRoaXMubWVyZ2VTb3J0KHJpZ2h0QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAocmlnaHRBcnJheS5sZW5ndGggJiYgbGVmdEFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAocmlnaHRBcnJheVswXSA8IGxlZnRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHJpZ2h0QXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wRWxlbWVudCB8fCB0ZW1wRWxlbWVudCA9PT0gMCkgbWVyZ2VkQXJyYXkucHVzaCh0ZW1wRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudDogbnVtYmVyIHwgdW5kZWZpbmVkID0gbGVmdEFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcEVsZW1lbnQgfHwgdGVtcEVsZW1lbnQgPT09IDApIG1lcmdlZEFycmF5LnB1c2godGVtcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lcmdlZEFycmF5LnB1c2goLi4ubGVmdEFycmF5LCAuLi5yaWdodEFycmF5KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZlR1cm5zLnB1c2gobWVyZ2VkQXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZWRBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcm5hbFNvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJhbmRvbUFycmF5KGxlbmd0aE9mQXJyYXk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJhc2VBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aE9mQXJyYXk7IGkrKykge1xyXG4gICAgICAgICAgICBiYXNlQXJyYXkucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZUFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGJhc2VBcnJheTtcclxuICAgICAgICB0aGlzLmxpc3RPZlR1cm5zID0gW2Jhc2VBcnJheS5zbGljZSgpXTtcclxuICAgICAgICByZXR1cm4gYmFzZUFycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3N3YXBFbGVtZW50cyhpbmRleEE6IG51bWJlciwgaW5kZXhCOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGVtcEl0ZW0gPSB0aGlzLmFycmF5W2luZGV4QV07XHJcbiAgICAgICAgdGhpcy5hcnJheVtpbmRleEFdID0gdGhpcy5hcnJheVtpbmRleEJdO1xyXG4gICAgICAgIHRoaXMuYXJyYXlbaW5kZXhCXSA9IHRlbXBJdGVtO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL1NtYXJ0QXJyYXkudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBJVmlldyBmcm9tICcuL0lWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFdmVudEJ1cyBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIHByaXZhdGUgZGl2TWFyZ2luTGVmdDogbnVtYmVyID0gNTU7XHJcbiAgICBwcml2YXRlIGRpdkVsZW1lbnRzOiBIVE1MRGl2RWxlbWVudFtdID0gW107XHJcbiAgICBwcml2YXRlIHRpbWVySWQ6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJveCcpO1xyXG4gICAgcHJpdmF0ZSBsb2dzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dzJyk7XHJcbiAgICBwcml2YXRlIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XHJcbiAgICBwcml2YXRlIHZpc3VhbGl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUnKTtcclxuICAgIHByaXZhdGUgdGVzdFNwZWVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RzcGVlZCcpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemUnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemVUZXN0Jyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYXJyYXlMZW5ndGggPSArZG9jdW1lbnQuZm9ybXNbMV0uZWxlbWVudHMuYXJyYXlTaXplLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TDogYW55ID0gZG9jdW1lbnQuZm9ybXNbMV0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICdhcnJheVNpemUnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TGVuZ3RoID0gK2FycmF5TC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiAyICYmIGFycmF5TGVuZ3RoIDwgNTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaW86IGFueSA9IGRvY3VtZW50LmZvcm1zWzFdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Nob29zZUFsZ28nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0TWV0aG9kID0gcmFkaW8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnU29ydGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3N0YXJ0JywgeyBhcnJheUxlbmd0aCwgc29ydE1ldGhvZCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGB3cm9uZyBzaXplIG9mIGFycmF5ICggJHthcnJheUxlbmd0aH0gKSEgSXQgc2hvdWxkIGJlIGJldHdlZW4gKCAyLTUxIClgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oaW5mbywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlzdWFsaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzdWFsaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Zpc3VhbGl6ZScsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXN0U3BlZWRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy50ZXN0U3BlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTcGVlZCB0ZXN0IGluIHByb2dyZXNzLi4uJywgJ2FsZXJ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5THRlc3Q6IGFueSA9IGRvY3VtZW50LmZvcm1zWzFdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAnYXJyYXlTaXplVGVzdCdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVzdEFycmF5TGVuZ3RoID0gK2FycmF5THRlc3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoICE9PSBOYU4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoIDwgMzAwMDFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndGVzdFNwZWVkJywgdGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1dyb25nIGxlbmd0aCBvZiB0aGUgYXJyYXknLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlbmRlcihpbml0QXJyYXk6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2JveCc7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUubWFyZ2luTGVmdCA9IGAke3RoaXMuZGl2TWFyZ2luTGVmdCAqIGl9cHhgO1xyXG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQucG9zaXRpb24gPSBgJHtpfWA7XHJcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7aW5pdEFycmF5W2ldfWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkVsZW1lbnRzLnB1c2goZGl2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2aXN1YWxpemVTb3J0UHJvY2VzcyhsaXN0T2ZUdXJuczogbnVtYmVyW11bXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oJ1Zpc3VhbGl6YXRpb24gc3RhcnRlZCcpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dXJuOiBudW1iZXJbXSA9IGxpc3RPZlR1cm5zLnNoaWZ0KCkgfHwgW107XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZU9mRWxlbWVudDogYW55O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgdHVybi5sZW5ndGg7IHBvc2l0aW9uKyspIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlT2ZFbGVtZW50ID0gdHVybltwb3NpdGlvbl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGl2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXZFbGVtZW50c1tpXS5pbm5lckhUTUwgPT0gdmFsdWVPZkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50c1tpXS5kYXRhc2V0LnBvc2l0aW9uID0gYCR7cG9zaXRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9ICtkb21FbGVtZW50LmRhdGFzZXQucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBwb3MgKiB0aGlzLmRpdk1hcmdpbkxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFsaXN0T2ZUdXJucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYFZpc3VhbGl6YXRpb24gZmluaXNoZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dSZXN1bHQoXHJcbiAgICAgICAgc3RhcnRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgc29ydE1ldGhvZDogc3RyaW5nLFxyXG4gICAgICAgIHJlc3VsdEFycmF5OiBudW1iZXJbXSxcclxuICAgICAgICBhY3Rpb25UaW1lOiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nc0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXY+SW5wdXQgYXJyYXk6ICR7c3RhcnRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHtzb3J0TWV0aG9kfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+T3V0cHV0IGFycmF5OiAke3Jlc3VsdEFycmF5LmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlJlbmRlciB0aW1lOiAke2FjdGlvblRpbWV9bXM8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BlZWRUZXN0UmVzdWx0cyhyZXN1bHRPZlRlc3RzOiBbXSwgdGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFN0cmluZyA9IGBUZXN0IGFycmF5IGxlbmd0aDogJHt0ZXN0QXJyYXlMZW5ndGh9YDtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSByZXN1bHRPZlRlc3RzXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAoYWxnbzogeyBuYW1lOiBzdHJpbmc7IHJlbmRlclRpbWU6IG51bWJlciB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2PlNvcnRpbmcgbWV0aG9kOiAke2FsZ28ubmFtZX0uIFJlbmRlciB0aW1lOiAke2FsZ28ucmVuZGVyVGltZX1tczwvZGl2PmBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGlucHV0U3RyaW5nICsgcmVzdWx0U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmZvKGluZm86IHN0cmluZywgaXNBbGVydD86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGluZm9QYW5lbDogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1wYW5lbCcpO1xyXG4gICAgICAgIGlmIChpbmZvUGFuZWwpIHtcclxuICAgICAgICAgICAgaW5mb1BhbmVsLmlubmVySFRNTCA9IGluZm87XHJcbiAgICAgICAgICAgIGlmIChpc0FsZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvVmlldy50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IElWaWV3IGZyb20gJy4vSVZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld01vYmlsZSBleHRlbmRzIEV2ZW50QnVzIGltcGxlbWVudHMgSVZpZXcge1xyXG4gICAgcHJpdmF0ZSB0aW1lcklkOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGxvZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ3MnKTtcclxuICAgIHByaXZhdGUgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcclxuICAgIHByaXZhdGUgdmlzdWFsaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc3VhbGl6ZScpO1xyXG4gICAgcHJpdmF0ZSB0ZXN0U3BlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdHNwZWVkJyk7XHJcbiAgICBwcml2YXRlIGluZm9QYW5lbDogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1wYW5lbCcpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemUnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemVUZXN0Jyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNT0JJTEUgREVURUNURUQnKTtcclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHRoaXMudmlzdWFsaXplQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMOiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMZW5ndGggPSArYXJyYXlMLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCthcnJheUxlbmd0aCA+IDIgJiYgYXJyYXlMZW5ndGggPCA1MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpbzogYW55ID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hvb3NlQWxnbydcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRNZXRob2QgPSByYWRpby52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTb3J0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnc3RhcnQnLCB7IGFycmF5TGVuZ3RoLCBzb3J0TWV0aG9kIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYHdyb25nIHNpemUgb2YgYXJyYXkgKCAke2FycmF5TGVuZ3RofSApISBJdCBzaG91bGQgYmUgYmV0d2VlbiAoIDItNTEgKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhpbmZvLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxpemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndmlzdWFsaXplJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTcGVlZEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3RTcGVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1NwZWVkIHRlc3QgaW4gcHJvZ3Jlc3MuLi4nLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUx0ZXN0OiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZVRlc3QnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlc3RBcnJheUxlbmd0aCA9ICthcnJheUx0ZXN0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCAhPT0gTmFOICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCA8IDMwMDAxXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Rlc3RTcGVlZCcsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdXcm9uZyBsZW5ndGggb2YgdGhlIGFycmF5JywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW5kZXIoaW5pdEFycmF5OiBudW1iZXJbXSk6IHZvaWQge31cclxuXHJcbiAgICB2aXN1YWxpemVTb3J0UHJvY2VzcyhsaXN0T2ZUdXJuczogbnVtYmVyW11bXSk6IHZvaWQge31cclxuXHJcbiAgICBzaG93UmVzdWx0KFxyXG4gICAgICAgIHN0YXJ0QXJyYXk6IG51bWJlcltdLFxyXG4gICAgICAgIHNvcnRNZXRob2Q6IHN0cmluZyxcclxuICAgICAgICByZXN1bHRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgYWN0aW9uVGltZTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2PklucHV0IGFycmF5OiAke3N0YXJ0QXJyYXkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+U29ydGluZyBtZXRob2Q6ICR7c29ydE1ldGhvZH08L2Rpdj5cclxuICAgICAgICA8ZGl2Pk91dHB1dCBhcnJheTogJHtyZXN1bHRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5SZW5kZXIgdGltZTogJHthY3Rpb25UaW1lfW1zPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWVkVGVzdFJlc3VsdHMocmVzdWx0T2ZUZXN0czogW10sIHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTdHJpbmcgPSBgVGVzdCBhcnJheSBsZW5ndGg6ICR7dGVzdEFycmF5TGVuZ3RofWA7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gcmVzdWx0T2ZUZXN0c1xyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgKGFsZ286IHsgbmFtZTogc3RyaW5nOyByZW5kZXJUaW1lOiBudW1iZXIgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHthbGdvLm5hbWV9LiBSZW5kZXIgdGltZTogJHthbGdvLnJlbmRlclRpbWV9bXM8L2Rpdj5gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudClcclxuICAgICAgICAgICAgdGhpcy5sb2dzRWxlbWVudC5pbm5lckhUTUwgPSBpbnB1dFN0cmluZyArIHJlc3VsdFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5mbyhpbmZvOiBzdHJpbmcsIGlzQWxlcnQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmZvUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuaW5uZXJIVE1MID0gaW5mbztcclxuICAgICAgICAgICAgaWYgKGlzQWxlcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwtLXJlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvVmlld01vYmlsZS50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IFNtYXJ0QXJyYXkgZnJvbSAnLi9TbWFydEFycmF5JztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBhcnJheU1vZGVsOiBTbWFydEFycmF5O1xyXG4gICAgcHJpdmF0ZSB2aWV3TW9kZWw6IFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyYXlNb2RlbDogU21hcnRBcnJheSwgdmlld01vZGVsOiBWaWV3KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFycmF5TW9kZWwgPSBhcnJheU1vZGVsO1xyXG4gICAgICAgIHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKCdzdGFydCcsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLmNyZWF0ZVJhbmRvbUFycmF5KGRhdGEuYXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXJyYXk6IG51bWJlcltdID0gdGhpcy5hcnJheU1vZGVsLmdldEFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFycmF5OiBudW1iZXJbXSA9IHRoaXMuYXJyYXlNb2RlbFtkYXRhLnNvcnRNZXRob2RdKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93UmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBcnJheSxcclxuICAgICAgICAgICAgICAgIGRhdGEuc29ydE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZmluaXNoVGltZSAtIHN0YXJ0VGltZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKCd2aXN1YWxpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFJlbmRlcih0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwudmlzdWFsaXplU29ydFByb2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLmxpc3RPZlR1cm5zXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuc2hvd0luZm8oJ1VzZSB2aXN1YWxpemUgYWZ0ZXIgc29ydCEhIScsICdhbGVydCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlld01vZGVsLnNldEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICd0ZXN0U3BlZWQnLFxyXG4gICAgICAgICAgICAodGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXM6IGFueSA9IHRoaXMuX3Rlc3RTcGVlZHModGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnNob3dTcGVlZFRlc3RSZXN1bHRzKHRlc3RSZXMsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93SW5mbygnU3BlZWQgdGVzdCBjb21wbGl0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF90ZXN0U3BlZWRzKHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsLmlzVGVzdCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdGVzdGVkQWxnb3JpdGhtcyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnSW5zZXJ0aW9uJywgZnVuY3Q6ICdpbnNlcnRpb25Tb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdRdWljaycsIGZ1bmN0OiAncXVpY2tTb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdNZXJnZScsIGZ1bmN0OiAnbWVyZ2VTb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdJbnRlcm5hbCcsIGZ1bmN0OiAnaW50ZXJuYWxTb3J0JywgcmVuZGVyVGltZTogMCB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCB0ZXN0QXJyYXkgPSB0aGlzLmFycmF5TW9kZWwuY3JlYXRlUmFuZG9tQXJyYXkodGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICB0ZXN0ZWRBbGdvcml0aG1zLmZvckVhY2goYWxnbyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlNb2RlbC5zZXRBcnJheSh0ZXN0QXJyYXkpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5TW9kZWxbYWxnby5mdW5jdF0oKTtcclxuICAgICAgICAgICAgY29uc3QgZmluaXNoVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGFsZ28ucmVuZGVyVGltZSA9IGZpbmlzaFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsLmlzVGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0ZXN0ZWRBbGdvcml0aG1zO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL01haW5Db250cm9sbGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==