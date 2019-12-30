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
                    let tableHTMLText = `<tr>`;
                    for (const key in result.rows.item(0)) {
                        tableHTMLText += `<td>${key}</td>`;
                    }
                    tableHTMLText += `</tr>`;
                    for (let i = 0; i < result.rows.length; i++) {
                        let row = result.rows.item(i);
                        tableHTMLText += `<tr>`;
                        for (const key in result.rows.item(i)) {
                            tableHTMLText += `<td>${row[key]}</td>`;
                        }
                        tableHTMLText += `</tr>`;
                    }
                    if (this.table)
                        this.table.innerHTML = tableHTMLText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWRmYjgyOGJjMTNmNWQzOTZmNWMiLCJ3ZWJwYWNrOi8vLy4vdHMvRXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvSW5pdC50cyIsIndlYnBhY2s6Ly8vLi90cy9Mb2dpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9TbWFydEFycmF5LnRzIiwid2VicGFjazovLy8uL3RzL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvVmlld01vYmlsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RlLE1BQU0sUUFBUTtJQUV6QjtRQURRLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRWhCLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsUUFBYTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMs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QUFDO1FBQ3JFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBQUE7QUFBQSIsImZpbGUiOiIuL2Rpc3QvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWRmYjgyOGJjMTNmNWQzOTZmNWMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrc0xpc3Q6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrc0xpc3QuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrc0xpc3RbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrc0xpc3RbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWl0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYWxsYmFja3NMaXN0Lmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYWxsYmFja3NJbkV2ZW50ID0gdGhpcy5jYWxsYmFja3NMaXN0W2V2ZW50TmFtZV07XHJcbiAgICAgICAgZm9yIChjb25zdCBmdW5jIG9mIGNhbGxiYWNrc0luRXZlbnQpIHtcclxuICAgICAgICAgICAgZnVuYyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvRXZlbnRCdXMudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuaW1wb3J0IFNtYXJ0QXJyYXkgZnJvbSAnLi9TbWFydEFycmF5JztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuaW1wb3J0IFZpZXdNb2JpbGUgZnJvbSAnLi9WaWV3TW9iaWxlJztcclxuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRyb2xsZXInO1xyXG5pbXBvcnQgSVZpZXcgZnJvbSAnLi9JVmlldyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luID0gbmV3IExvZ2luKCk7XHJcbiAgICBjb25zdCBteUFycmF5ID0gbmV3IFNtYXJ0QXJyYXkoKTtcclxuICAgIGxvZ2luLnNldEV2ZW50TGlzdGVuZXIoJ2xvZ2dlZCcsICgpID0+IHtcclxuICAgICAgICBsZXQgdmlld3BvcnQ6IGFueTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcGFkfGlyaXN8a2luZGxlfEFuZHJvaWR8U2lsa3xsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHIoMCwgNClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2aWV3cG9ydCA9IG5ldyBWaWV3TW9iaWxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHZpZXdwb3J0ID0gbmV3IFZpZXcoKTtcclxuXHJcbiAgICAgICAgbmV3IE1haW5Db250cm9sbGVyKG15QXJyYXksIHZpZXdwb3J0KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvSW5pdC50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBkYjogRGF0YWJhc2UgPSB3aW5kb3cub3BlbkRhdGFiYXNlKCdpdGVtREInLCAnMS4wJywgJ2l0ZW1EQicsIDY1NTM1KTtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xyXG4gICAgcHJpdmF0ZSByZW1vdmVCdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUnKTtcclxuICAgIHByaXZhdGUgbG9naW5CdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbl9idG4nKTtcclxuICAgIHByaXZhdGUgbGlzdEJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3cnKTtcclxuICAgIHByaXZhdGUgdXNlcm5hbWVGaWVsZDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkRmllbGQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgcHJpdmF0ZSBpc0FkbWluRmllbGQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbicpO1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlc0ZpZWxkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZXMnKTtcclxuICAgIHByaXZhdGUgYWRtaW5Db250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZG1pbi1jb250YWluZXInKTtcclxuICAgIHByaXZhdGUgdGFibGU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV91c2VycycpO1xyXG5cclxuICAgIHByaXZhdGUgaXNBZG1pbkxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0d1ZXN0TG9nZ2VkID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaXNBZG1pbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IHRoID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5jcmVhdGVCdG4pIHRoaXMuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGgub25DcmVhdGVUYWJsZS5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlQnRuKSB0aGlzLnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uRGVsZXRlVGFibGUuYmluZCh0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ2luQnRuKSB0aGlzLmxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGgub25Mb2dpbi5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdEJ0bikgdGhpcy5saXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGgub25TaG93VXNlcnNMaXN0LmJpbmQodGgpKTtcclxuICAgICAgICBpZiAodGhpcy5pc0FkbWluRmllbGQpIHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oJ1BsZWFzZSwgbG9naW4gZmlyc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXJuYW1lRmllbGQgJiYgIXRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdQbGVhc2UsIGVudGVyIHlvdXIgbG9naW4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvZ2luVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgaXNBZG1pbjogc3RyaW5nLCBpc0d1ZXN0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gJ0lOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSwgcGFzc3dvcmQsIHRpbWVzdGFtcCwgaXNBZG1pbiwgaXNHdWVzdCkgVkFMVUVTKD8sPyw/LD8sPyknO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgW3VzZXJuYW1lLCBwYXNzd29yZCwgbmV3IERhdGUoKSwgaXNBZG1pbiwgaXNHdWVzdF0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnTmV3IGl0ZW0gaGFzIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYDxBREQ+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5Vc2VyKCkge1xyXG4gICAgICAgIGxldCB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VybmFtZUZpZWxkKSB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5wYXNzd29yZEZpZWxkKSBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRGaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9ICdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lPT8nO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgW3VzZXJuYW1lXSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3VsdC5yb3dzLml0ZW0oaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR3Vlc3RMb2dnZWQgPSBwYXNzd29yZCA9PT0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCdsb2dnZWQnLCB7IHVzZXJuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLmlzQWRtaW4gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluTG9nZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0FkbWluRmllbGQpIHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRtaW5Db250YWluZXIpIHRoaXMuYWRtaW5Db250YWluZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluTG9nZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc2hvd0luZm8oJ1VzZXIgaXMgcHJlc2VudCBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluTG9nZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR3Vlc3RMb2dnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluTG9nZ2VkID0gdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9ICF0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0d1ZXN0TG9nZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVXNlcih1c2VybmFtZSwgcGFzc3dvcmQsIHRoaXMuaXNBZG1pbi50b1N0cmluZygpLCBgJHtwYXNzd29yZCA9PT0gJyd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCdsb2dnZWQnLCB7IHVzZXJuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCBlcnJvcjogU1FMRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGA8Q0hFQ0s+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXNlclRpbWUoKSB7XHJcbiAgICAgICAgbGV0IHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVGaWVsZCkgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRmllbGQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGBVUERBVEUgdXNlcnMgU0VUIHRpbWVzdGFtcD0/IFdIRVJFIHVzZXJuYW1lPT9gO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgW25ldyBEYXRlKCksIHVzZXJuYW1lXSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhgVXNlciAke3VzZXJuYW1lfSBpcyBsb2dnZWQgaW5gKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCBlcnJvcjogU1FMRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGA8VVBEQVRFPiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd1VzZXJzTGlzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50YWJsZSkgdGhpcy50YWJsZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBsZXQgZmllbGRzVG9TaG93ID0gJ2lkLCB1c2VybmFtZSwgdGltZXN0YW1wJztcclxuICAgICAgICBpZiAodGhpcy5pc0FkbWluTG9nZ2VkKSBmaWVsZHNUb1Nob3cgPSAnKic7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHdWVzdExvZ2dlZCkgZmllbGRzVG9TaG93ID0gJ2lkLCB1c2VybmFtZSc7XHJcblxyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSBgU0VMRUNUICR7ZmllbGRzVG9TaG93fSBGUk9NIHVzZXJzIE9SREVSIEJZIGlkYDtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGVIVE1MVGV4dDogc3RyaW5nID0gYDx0cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQucm93cy5pdGVtKDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhUTUxUZXh0ICs9IGA8dGQ+JHtrZXl9PC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSFRNTFRleHQgKz0gYDwvdHI+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSByZXN1bHQucm93cy5pdGVtKGkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSFRNTFRleHQgKz0gYDx0cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0LnJvd3MuaXRlbShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSFRNTFRleHQgKz0gYDx0ZD4ke3Jvd1trZXldfTwvdGQ+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSFRNTFRleHQgKz0gYDwvdHI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGUpIHRoaXMudGFibGUuaW5uZXJIVE1MID0gdGFibGVIVE1MVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS5pbm5lckhUTUwgPSBgPHRyPjx0ZCBjb2xzcGFuPVwiM1wiIGFsaWduPVwiY2VudGVyXCI+Tm8gSXRlbXMgRm91bmQ8L3RkPjwvdHI+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgZXJyb3I6IFNRTEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmZvKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VzRmllbGQpIHRoaXMubWVzc2FnZXNGaWVsZC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3JlYXRlVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9XHJcbiAgICAgICAgICAgICAgICAnQ1JFQVRFIFRBQkxFIHVzZXJzICcgK1xyXG4gICAgICAgICAgICAgICAgJyhpZCBJTlRFR0VSIE5PVCBOVUxMIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsJyArXHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUgVkFSQ0hBUigxMDApIE5PVCBOVUxMLCcgK1xyXG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkIFZBUkNIQVIoMTApIE5PVCBOVUxMLCcgK1xyXG4gICAgICAgICAgICAgICAgJ2lzQWRtaW4gVkFSQ0hBUig1KSBOT1QgTlVMTCwnICtcclxuICAgICAgICAgICAgICAgICdpc0d1ZXN0IFZBUkNIQVIoNSkgTk9UIE5VTEwsJyArXHJcbiAgICAgICAgICAgICAgICAndGltZXN0YW1wIFZBUkNIQVIoMTApIE5PVCBOVUxMKSc7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnVGFibGUgY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnVGFibGUgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFVzZXIoJ2FkbWluJywgJ2FkbWluJywgJ3RydWUnLCAnZmFsc2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZVRhYmxlKCkge1xyXG4gICAgICAgIGlmICghY29uZmlybSgnQXJlIFlvdSBTdXJlPycpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3FsID0gJ0RST1AgVEFCTEUgdXNlcnMgJztcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdUYWJsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdFcnJvciBvY2N1cmVkIHdoaWxlIGRlbGV0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL0xvZ2luLnRzIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vRXZlbnRCdXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRBcnJheSBleHRlbmRzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgYXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICBsaXN0T2ZUdXJuczogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgaXNUZXN0OiBhbnkgPSBmYWxzZTtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBcnJheShhcnI6IG51bWJlcltdKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFyci5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMubGlzdE9mVHVybnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRpb25Tb3J0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHsgdmFsdWU6IHRoaXMuYXJyYXlbaV0sIGluZGV4OiBpIH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0udmFsdWUgPCB0aGlzLmFycmF5W2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3dhcEVsZW1lbnRzKGN1cnJlbnRJdGVtLmluZGV4LCBqKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5pbmRleCA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RPZlR1cm5zLnB1c2godGhpcy5hcnJheS5zbGljZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHF1aWNrU29ydChmaXJzdEluZGV4ID0gMCwgbGFzdEluZGV4ID0gdGhpcy5hcnJheS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3RhcnRQYXNzSW5kZXggPSBmaXJzdEluZGV4O1xyXG4gICAgICAgIGxldCBlbmRQYXNzSW5kZXggPSBsYXN0SW5kZXg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5hcnJheVtmaXJzdEluZGV4XSxcclxuICAgICAgICAgICAgaW5kZXg6IGZpcnN0SW5kZXhcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdoaWxlIChzdGFydFBhc3NJbmRleCA8IGVuZFBhc3NJbmRleCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gLS1lbmRQYXNzSW5kZXg7IGkgPiBzdGFydFBhc3NJbmRleDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0udmFsdWUgPiB0aGlzLmFycmF5W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3dhcEVsZW1lbnRzKGN1cnJlbnRJdGVtLmluZGV4LCBpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5pbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RPZlR1cm5zLnB1c2godGhpcy5hcnJheS5zbGljZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbmRQYXNzSW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSArK3N0YXJ0UGFzc0luZGV4OyBpIDwgY3VycmVudEl0ZW0uaW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlIDwgdGhpcy5hcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRQYXNzSW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5pbmRleCAtIGZpcnN0SW5kZXggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVpY2tTb3J0KGZpcnN0SW5kZXgsIGN1cnJlbnRJdGVtLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhc3RJbmRleCAtIGN1cnJlbnRJdGVtLmluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aWNrU29ydChjdXJyZW50SXRlbS5pbmRleCArIDEsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZVNvcnQoYXJyYXkgPSB0aGlzLmFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgbWVyZ2VkQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IG1pZGRsZUluZGV4OiBudW1iZXIgPSBNYXRoLnRydW5jKGFycmF5Lmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIGxldCBsZWZ0QXJyYXk6IG51bWJlcltdID0gYXJyYXkuc2xpY2UoMCwgbWlkZGxlSW5kZXgpO1xyXG4gICAgICAgIGxldCByaWdodEFycmF5OiBudW1iZXJbXSA9IGFycmF5LnNsaWNlKG1pZGRsZUluZGV4LCBhcnJheS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAobGVmdEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgbGVmdEFycmF5ID0gdGhpcy5tZXJnZVNvcnQobGVmdEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJpZ2h0QXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByaWdodEFycmF5ID0gdGhpcy5tZXJnZVNvcnQocmlnaHRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChyaWdodEFycmF5Lmxlbmd0aCAmJiBsZWZ0QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChyaWdodEFycmF5WzBdIDwgbGVmdEFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudDogbnVtYmVyIHwgdW5kZWZpbmVkID0gcmlnaHRBcnJheS5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBFbGVtZW50IHx8IHRlbXBFbGVtZW50ID09PSAwKSBtZXJnZWRBcnJheS5wdXNoKHRlbXBFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSBsZWZ0QXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wRWxlbWVudCB8fCB0ZW1wRWxlbWVudCA9PT0gMCkgbWVyZ2VkQXJyYXkucHVzaCh0ZW1wRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWVyZ2VkQXJyYXkucHVzaCguLi5sZWZ0QXJyYXksIC4uLnJpZ2h0QXJyYXkpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNUZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mVHVybnMucHVzaChtZXJnZWRBcnJheS5zbGljZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlZEFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVybmFsU29ydCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUmFuZG9tQXJyYXkobGVuZ3RoT2ZBcnJheTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZUFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoT2ZBcnJheTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJhc2VBcnJheS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlQXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICB0aGlzLmFycmF5ID0gYmFzZUFycmF5O1xyXG4gICAgICAgIHRoaXMubGlzdE9mVHVybnMgPSBbYmFzZUFycmF5LnNsaWNlKCldO1xyXG4gICAgICAgIHJldHVybiBiYXNlQXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc3dhcEVsZW1lbnRzKGluZGV4QTogbnVtYmVyLCBpbmRleEI6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0ZW1wSXRlbSA9IHRoaXMuYXJyYXlbaW5kZXhBXTtcclxuICAgICAgICB0aGlzLmFycmF5W2luZGV4QV0gPSB0aGlzLmFycmF5W2luZGV4Ql07XHJcbiAgICAgICAgdGhpcy5hcnJheVtpbmRleEJdID0gdGVtcEl0ZW07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvU21hcnRBcnJheS50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IElWaWV3IGZyb20gJy4vSVZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEV2ZW50QnVzIGltcGxlbWVudHMgSVZpZXcge1xyXG4gICAgcHJpdmF0ZSBkaXZNYXJnaW5MZWZ0OiBudW1iZXIgPSA1NTtcclxuICAgIHByaXZhdGUgZGl2RWxlbWVudHM6IEhUTUxEaXZFbGVtZW50W10gPSBbXTtcclxuICAgIHByaXZhdGUgdGltZXJJZDogYW55IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm94Jyk7XHJcbiAgICBwcml2YXRlIGxvZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ3MnKTtcclxuICAgIHByaXZhdGUgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcclxuICAgIHByaXZhdGUgdmlzdWFsaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc3VhbGl6ZScpO1xyXG4gICAgcHJpdmF0ZSB0ZXN0U3BlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdHNwZWVkJyk7XHJcbiAgICBwcml2YXRlIGFycmF5U2l6ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FycmF5U2l6ZScpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVUZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FycmF5U2l6ZVRlc3QnKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhcnJheUxlbmd0aCA9ICtkb2N1bWVudC5mb3Jtc1sxXS5lbGVtZW50cy5hcnJheVNpemUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMOiBhbnkgPSBkb2N1bWVudC5mb3Jtc1sxXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMZW5ndGggPSArYXJyYXlMLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhcnJheUxlbmd0aCA+IDIgJiYgYXJyYXlMZW5ndGggPCA1MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpbzogYW55ID0gZG9jdW1lbnQuZm9ybXNbMV0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hvb3NlQWxnbydcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRNZXRob2QgPSByYWRpby52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTb3J0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnc3RhcnQnLCB7IGFycmF5TGVuZ3RoLCBzb3J0TWV0aG9kIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYHdyb25nIHNpemUgb2YgYXJyYXkgKCAke2FycmF5TGVuZ3RofSApISBJdCBzaG91bGQgYmUgYmV0d2VlbiAoIDItNTEgKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhpbmZvLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxpemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndmlzdWFsaXplJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTcGVlZEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3RTcGVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1NwZWVkIHRlc3QgaW4gcHJvZ3Jlc3MuLi4nLCAnYWxlcnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMdGVzdDogYW55ID0gZG9jdW1lbnQuZm9ybXNbMV0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICdhcnJheVNpemVUZXN0J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXN0QXJyYXlMZW5ndGggPSArYXJyYXlMdGVzdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggIT09IE5hTiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggPCAzMDAwMVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCd0ZXN0U3BlZWQnLCB0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnV3JvbmcgbGVuZ3RoIG9mIHRoZSBhcnJheScsICdhbGVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0UmVuZGVyKGluaXRBcnJheTogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSAnYm94JztcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7dGhpcy5kaXZNYXJnaW5MZWZ0ICogaX1weGA7XHJcbiAgICAgICAgICAgICAgICBkaXYuZGF0YXNldC5wb3NpdGlvbiA9IGAke2l9YDtcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgJHtpbml0QXJyYXlbaV19YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGl2RWxlbWVudHMucHVzaChkaXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZpc3VhbGl6ZVNvcnRQcm9jZXNzKGxpc3RPZlR1cm5zOiBudW1iZXJbXVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93SW5mbygnVmlzdWFsaXphdGlvbiBzdGFydGVkJyk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHR1cm46IG51bWJlcltdID0gbGlzdE9mVHVybnMuc2hpZnQoKSB8fCBbXTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlT2ZFbGVtZW50OiBhbnk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCB0dXJuLmxlbmd0aDsgcG9zaXRpb24rKykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVPZkVsZW1lbnQgPSB0dXJuW3Bvc2l0aW9uXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpdkVsZW1lbnRzW2ldLmlubmVySFRNTCA9PSB2YWx1ZU9mRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpdkVsZW1lbnRzW2ldLmRhdGFzZXQucG9zaXRpb24gPSBgJHtwb3NpdGlvbn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpdkVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczogbnVtYmVyID0gK2RvbUVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHBvcyAqIHRoaXMuZGl2TWFyZ2luTGVmdCArICdweCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWxpc3RPZlR1cm5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhgVmlzdWFsaXphdGlvbiBmaW5pc2hlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Jlc3VsdChcclxuICAgICAgICBzdGFydEFycmF5OiBudW1iZXJbXSxcclxuICAgICAgICBzb3J0TWV0aG9kOiBzdHJpbmcsXHJcbiAgICAgICAgcmVzdWx0QXJyYXk6IG51bWJlcltdLFxyXG4gICAgICAgIGFjdGlvblRpbWU6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9nc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dzRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdj5JbnB1dCBhcnJheTogJHtzdGFydEFycmF5LmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlNvcnRpbmcgbWV0aG9kOiAke3NvcnRNZXRob2R9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5PdXRwdXQgYXJyYXk6ICR7cmVzdWx0QXJyYXkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+UmVuZGVyIHRpbWU6ICR7YWN0aW9uVGltZX1tczwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTcGVlZFRlc3RSZXN1bHRzKHJlc3VsdE9mVGVzdHM6IFtdLCB0ZXN0QXJyYXlMZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0U3RyaW5nID0gYFRlc3QgYXJyYXkgbGVuZ3RoOiAke3Rlc3RBcnJheUxlbmd0aH1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IHJlc3VsdE9mVGVzdHNcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgIChhbGdvOiB7IG5hbWU6IHN0cmluZzsgcmVuZGVyVGltZTogbnVtYmVyIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYDxkaXY+U29ydGluZyBtZXRob2Q6ICR7YWxnby5uYW1lfS4gUmVuZGVyIHRpbWU6ICR7YWxnby5yZW5kZXJUaW1lfW1zPC9kaXY+YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9nc0VsZW1lbnQpXHJcbiAgICAgICAgICAgIHRoaXMubG9nc0VsZW1lbnQuaW5uZXJIVE1MID0gaW5wdXRTdHJpbmcgKyByZXN1bHRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0luZm8oaW5mbzogc3RyaW5nLCBpc0FsZXJ0PzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgaW5mb1BhbmVsOiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXBhbmVsJyk7XHJcbiAgICAgICAgaWYgKGluZm9QYW5lbCkge1xyXG4gICAgICAgICAgICBpbmZvUGFuZWwuaW5uZXJIVE1MID0gaW5mbztcclxuICAgICAgICAgICAgaWYgKGlzQWxlcnQpIHtcclxuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsLS1yZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvLXBhbmVsLS1yZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9WaWV3LnRzIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vRXZlbnRCdXMnO1xyXG5pbXBvcnQgSVZpZXcgZnJvbSAnLi9JVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3TW9iaWxlIGV4dGVuZHMgRXZlbnRCdXMgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgICBwcml2YXRlIHRpbWVySWQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgbG9nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9ncycpO1xyXG4gICAgcHJpdmF0ZSBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xyXG4gICAgcHJpdmF0ZSB2aXN1YWxpemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplJyk7XHJcbiAgICBwcml2YXRlIHRlc3RTcGVlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0c3BlZWQnKTtcclxuICAgIHByaXZhdGUgaW5mb1BhbmVsOiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXBhbmVsJyk7XHJcbiAgICBwcml2YXRlIGFycmF5U2l6ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FycmF5U2l6ZScpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVUZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FycmF5U2l6ZVRlc3QnKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01PQklMRSBERVRFQ1RFRCcpO1xyXG4gICAgICAgIGlmICh0aGlzLnZpc3VhbGl6ZUJ1dHRvbikgdGhpcy52aXN1YWxpemVCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUw6IGFueSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAnYXJyYXlTaXplJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUxlbmd0aCA9ICthcnJheUwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoK2FycmF5TGVuZ3RoID4gMiAmJiBhcnJheUxlbmd0aCA8IDUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGlvOiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaG9vc2VBbGdvJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydE1ldGhvZCA9IHJhZGlvLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1NvcnRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCdzdGFydCcsIHsgYXJyYXlMZW5ndGgsIHNvcnRNZXRob2QgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBgd3Jvbmcgc2l6ZSBvZiBhcnJheSAoICR7YXJyYXlMZW5ndGh9ICkhIEl0IHNob3VsZCBiZSBiZXR3ZWVuICggMi01MSApYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGluZm8sICdhbGVydCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpc3VhbGl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnZpc3VhbGl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCd2aXN1YWxpemUnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVzdFNwZWVkQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdFNwZWVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnU3BlZWQgdGVzdCBpbiBwcm9ncmVzcy4uLicsICdhbGVydCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5THRlc3Q6IGFueSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAnYXJyYXlTaXplVGVzdCdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVzdEFycmF5TGVuZ3RoID0gK2FycmF5THRlc3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoICE9PSBOYU4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoIDwgMzAwMDFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndGVzdFNwZWVkJywgdGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1dyb25nIGxlbmd0aCBvZiB0aGUgYXJyYXknLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlbmRlcihpbml0QXJyYXk6IG51bWJlcltdKTogdm9pZCB7fVxyXG5cclxuICAgIHZpc3VhbGl6ZVNvcnRQcm9jZXNzKGxpc3RPZlR1cm5zOiBudW1iZXJbXVtdKTogdm9pZCB7fVxyXG5cclxuICAgIHNob3dSZXN1bHQoXHJcbiAgICAgICAgc3RhcnRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgc29ydE1ldGhvZDogc3RyaW5nLFxyXG4gICAgICAgIHJlc3VsdEFycmF5OiBudW1iZXJbXSxcclxuICAgICAgICBhY3Rpb25UaW1lOiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nc0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXY+SW5wdXQgYXJyYXk6ICR7c3RhcnRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHtzb3J0TWV0aG9kfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+T3V0cHV0IGFycmF5OiAke3Jlc3VsdEFycmF5LmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlJlbmRlciB0aW1lOiAke2FjdGlvblRpbWV9bXM8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BlZWRUZXN0UmVzdWx0cyhyZXN1bHRPZlRlc3RzOiBbXSwgdGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFN0cmluZyA9IGBUZXN0IGFycmF5IGxlbmd0aDogJHt0ZXN0QXJyYXlMZW5ndGh9YDtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSByZXN1bHRPZlRlc3RzXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAoYWxnbzogeyBuYW1lOiBzdHJpbmc7IHJlbmRlclRpbWU6IG51bWJlciB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2PlNvcnRpbmcgbWV0aG9kOiAke2FsZ28ubmFtZX0uIFJlbmRlciB0aW1lOiAke2FsZ28ucmVuZGVyVGltZX1tczwvZGl2PmBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGlucHV0U3RyaW5nICsgcmVzdWx0U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmZvKGluZm86IHN0cmluZywgaXNBbGVydD86IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZm9QYW5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9QYW5lbC5pbm5lckhUTUwgPSBpbmZvO1xyXG4gICAgICAgICAgICBpZiAoaXNBbGVydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9QYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvLXBhbmVsLS1yZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9WaWV3TW9iaWxlLnRzIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vRXZlbnRCdXMnO1xyXG5pbXBvcnQgU21hcnRBcnJheSBmcm9tICcuL1NtYXJ0QXJyYXknO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGFycmF5TW9kZWw6IFNtYXJ0QXJyYXk7XHJcbiAgICBwcml2YXRlIHZpZXdNb2RlbDogVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcnJheU1vZGVsOiBTbWFydEFycmF5LCB2aWV3TW9kZWw6IFZpZXcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNb2RlbCA9IGFycmF5TW9kZWw7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblxyXG4gICAgICAgIHRoaXMudmlld01vZGVsLnNldEV2ZW50TGlzdGVuZXIoJ3N0YXJ0JywgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5TW9kZWwuY3JlYXRlUmFuZG9tQXJyYXkoZGF0YS5hcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRBcnJheTogbnVtYmVyW10gPSB0aGlzLmFycmF5TW9kZWwuZ2V0QXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0QXJyYXk6IG51bWJlcltdID0gdGhpcy5hcnJheU1vZGVsW2RhdGEuc29ydE1ldGhvZF0oKTtcclxuICAgICAgICAgICAgY29uc3QgZmluaXNoVGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnNob3dSZXN1bHQoXHJcbiAgICAgICAgICAgICAgICBzdGFydEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGF0YS5zb3J0TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0QXJyYXksXHJcbiAgICAgICAgICAgICAgICBmaW5pc2hUaW1lIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlld01vZGVsLnNldEV2ZW50TGlzdGVuZXIoJ3Zpc3VhbGl6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlNb2RlbC5saXN0T2ZUdXJucy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5pbml0UmVuZGVyKHRoaXMuYXJyYXlNb2RlbC5saXN0T2ZUdXJuc1swXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC52aXN1YWxpemVTb3J0UHJvY2VzcyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93SW5mbygnVXNlIHZpc3VhbGl6ZSBhZnRlciBzb3J0ISEhJywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3TW9kZWwuc2V0RXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ3Rlc3RTcGVlZCcsXHJcbiAgICAgICAgICAgICh0ZXN0QXJyYXlMZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlczogYW55ID0gdGhpcy5fdGVzdFNwZWVkcyh0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuc2hvd1NwZWVkVGVzdFJlc3VsdHModGVzdFJlcywgdGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnNob3dJbmZvKCdTcGVlZCB0ZXN0IGNvbXBsaXRlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rlc3RTcGVlZHModGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmFycmF5TW9kZWwuaXNUZXN0ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0ZXN0ZWRBbGdvcml0aG1zID0gW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICdJbnNlcnRpb24nLCBmdW5jdDogJ2luc2VydGlvblNvcnQnLCByZW5kZXJUaW1lOiAwIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ1F1aWNrJywgZnVuY3Q6ICdxdWlja1NvcnQnLCByZW5kZXJUaW1lOiAwIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ01lcmdlJywgZnVuY3Q6ICdtZXJnZVNvcnQnLCByZW5kZXJUaW1lOiAwIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ0ludGVybmFsJywgZnVuY3Q6ICdpbnRlcm5hbFNvcnQnLCByZW5kZXJUaW1lOiAwIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHRlc3RBcnJheSA9IHRoaXMuYXJyYXlNb2RlbC5jcmVhdGVSYW5kb21BcnJheSh0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgIHRlc3RlZEFsZ29yaXRobXMuZm9yRWFjaChhbGdvID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLnNldEFycmF5KHRlc3RBcnJheSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlNb2RlbFthbGdvLmZ1bmN0XSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgYWxnby5yZW5kZXJUaW1lID0gZmluaXNoVGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFycmF5TW9kZWwuaXNUZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRlc3RlZEFsZ29yaXRobXM7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvTWFpbkNvbnRyb2xsZXIudHMiXSwic291cmNlUm9vdCI6IiJ9