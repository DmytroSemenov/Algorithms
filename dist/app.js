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
                            this.updateLoginTime();
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
                            this.showInfo('The User is present and password is not correct');
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
    addUser(username, password, isAdmin, isGuest) {
        this.db.transaction(transaction => {
            const sql = 'INSERT INTO users (username, password, timestamp, isAdmin, isGuest) VALUES(?,?,?,?,?)';
            transaction.executeSql(sql, [username, password, new Date(), isAdmin, isGuest], () => {
                this.showInfo('New item has added successfully');
            }, (transaction, error) => {
                this.showInfo(`<ADDUSER> ${error.message}`);
                return false;
            });
        });
    }
    updateLoginTime() {
        let username;
        if (this.usernameField) {
            username = this.usernameField.value;
        }
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
        let fieldsToShow = 'id, username, timestamp';
        if (this.table) {
            this.table.innerHTML = '';
        }
        if (this.isAdminLogged) {
            fieldsToShow = '*';
        }
        if (this.isGuestLogged) {
            fieldsToShow = 'id, username';
        }
        this.db.transaction(transaction => {
            const sql = `SELECT ${fieldsToShow} FROM users ORDER BY id`;
            transaction.executeSql(sql, undefined, (transaction, result) => {
                const INDEX_OF_ROW = 0;
                if (result.rows.length) {
                    let tableHTMLText = '';
                    tableHTMLText += `<tr>`;
                    for (const COLUMN_NAME in result.rows.item(INDEX_OF_ROW)) {
                        tableHTMLText += `<td>${COLUMN_NAME}</td>`;
                    }
                    tableHTMLText += `</tr>`;
                    for (let userNumber = 0; userNumber < result.rows.length; userNumber++) {
                        let user = result.rows.item(userNumber);
                        tableHTMLText += `<tr>`;
                        for (const COLUMN_NAME in user) {
                            tableHTMLText += `<td>${user[COLUMN_NAME]}</td>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWFmNjVkNmY0MWM0NDE1ZDk4NjkiLCJ3ZWJwYWNrOi8vLy4vdHMvRXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvSW5pdC50cyIsIndlYnBhY2s6Ly8vLi90cy9Mb2dpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9TbWFydEFycmF5LnRzIiwid2VicGFjazovLy8uL3RzL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvVmlld01vYmlsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RlLE1BQU0sUUFBUTtJQUV6QjtRQURRLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRWhCLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsUUFBYTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMs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QUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDOUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQUFBO0FBQUEiLCJmaWxlIjoiLi9kaXN0L2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVhZjY1ZDZmNDFjNDQxNWQ5ODY5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBjYWxsYmFja3NMaXN0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYWxsYmFja3NMaXN0Lmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3NMaXN0W2V2ZW50TmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3NMaXN0W2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FsbGJhY2tzTGlzdC5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzSW5FdmVudCA9IHRoaXMuY2FsbGJhY2tzTGlzdFtldmVudE5hbWVdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZnVuYyBvZiBjYWxsYmFja3NJbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZ1bmMoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL0V2ZW50QnVzLnRzIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vRXZlbnRCdXMnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XHJcbmltcG9ydCBTbWFydEFycmF5IGZyb20gJy4vU21hcnRBcnJheSc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XHJcbmltcG9ydCBWaWV3TW9iaWxlIGZyb20gJy4vVmlld01vYmlsZSc7XHJcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL01haW5Db250cm9sbGVyJztcclxuaW1wb3J0IElWaWV3IGZyb20gJy4vSVZpZXcnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dpbiA9IG5ldyBMb2dpbigpO1xyXG4gICAgY29uc3QgbXlBcnJheSA9IG5ldyBTbWFydEFycmF5KCk7XHJcbiAgICBsb2dpbi5zZXRFdmVudExpc3RlbmVyKCdsb2dnZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZpZXdwb3J0OiBhbnk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXBhZHxpcmlzfGtpbmRsZXxBbmRyb2lkfFNpbGt8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyKDAsIDQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmlld3BvcnQgPSBuZXcgVmlld01vYmlsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB2aWV3cG9ydCA9IG5ldyBWaWV3KCk7XHJcblxyXG4gICAgICAgIG5ldyBNYWluQ29udHJvbGxlcihteUFycmF5LCB2aWV3cG9ydCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL0luaXQudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgZGI6IERhdGFiYXNlID0gd2luZG93Lm9wZW5EYXRhYmFzZSgnaXRlbURCJywgJzEuMCcsICdpdGVtREInLCA2NTUzNSk7XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcclxuICAgIHByaXZhdGUgcmVtb3ZlQnRuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlJyk7XHJcbiAgICBwcml2YXRlIGxvZ2luQnRuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5fYnRuJyk7XHJcbiAgICBwcml2YXRlIGxpc3RCdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Jyk7XHJcbiAgICBwcml2YXRlIHVzZXJuYW1lRmllbGQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZEZpZWxkOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuICAgIHByaXZhdGUgaXNBZG1pbkZpZWxkOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRtaW4nKTtcclxuICAgIHByaXZhdGUgbWVzc2FnZXNGaWVsZDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzJyk7XHJcbiAgICBwcml2YXRlIGFkbWluQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tY29udGFpbmVyJyk7XHJcbiAgICBwcml2YXRlIHRhYmxlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfdXNlcnMnKTtcclxuXHJcbiAgICBwcml2YXRlIGlzQWRtaW5Mb2dnZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNHdWVzdExvZ2dlZCA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzQWRtaW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCB0aCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlQnRuKSB0aGlzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uQ3JlYXRlVGFibGUuYmluZCh0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbW92ZUJ0bikgdGhpcy5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aC5vbkRlbGV0ZVRhYmxlLmJpbmQodGgpKTtcclxuICAgICAgICBpZiAodGhpcy5sb2dpbkJ0bikgdGhpcy5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uTG9naW4uYmluZCh0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RCdG4pIHRoaXMubGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uU2hvd1VzZXJzTGlzdC5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRtaW5Db250YWluZXIpIHRoaXMuYWRtaW5Db250YWluZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dJbmZvKCdQbGVhc2UsIGxvZ2luIGZpcnN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpbigpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VybmFtZUZpZWxkICYmICF0aGlzLnVzZXJuYW1lRmllbGQudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnUGxlYXNlLCBlbnRlciB5b3VyIGxvZ2luJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dpblVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblVzZXIoKSB7XHJcbiAgICAgICAgbGV0IHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVGaWVsZCkgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRmllbGQudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmRGaWVsZCkgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSAnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZT0/JztcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIFt1c2VybmFtZV0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCByZXN1bHQ6IFNRTFJlc3VsdFNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSByZXN1bHQucm93cy5pdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0d1ZXN0TG9nZ2VkID0gcGFzc3dvcmQgPT09ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTG9naW5UaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ2xvZ2dlZCcsIHsgdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIuaXNBZG1pbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW5Mb2dnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWRtaW5GaWVsZCkgdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW5Mb2dnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5zaG93SW5mbygnVGhlIFVzZXIgaXMgcHJlc2VudCBhbmQgcGFzc3dvcmQgaXMgbm90IGNvcnJlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluTG9nZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR3Vlc3RMb2dnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZG1pbkNvbnRhaW5lcikgdGhpcy5hZG1pbkNvbnRhaW5lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluTG9nZ2VkID0gdGhpcy5pc0FkbWluRmllbGQuY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9ICF0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0d1ZXN0TG9nZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVXNlcih1c2VybmFtZSwgcGFzc3dvcmQsIHRoaXMuaXNBZG1pbi50b1N0cmluZygpLCBgJHtwYXNzd29yZCA9PT0gJyd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCdsb2dnZWQnLCB7IHVzZXJuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCBlcnJvcjogU1FMRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGA8Q0hFQ0s+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBpc0FkbWluOiBzdHJpbmcsIGlzR3Vlc3Q6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSAnSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lLCBwYXNzd29yZCwgdGltZXN0YW1wLCBpc0FkbWluLCBpc0d1ZXN0KSBWQUxVRVMoPyw/LD8sPyw/KSc7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICBbdXNlcm5hbWUsIHBhc3N3b3JkLCBuZXcgRGF0ZSgpLCBpc0FkbWluLCBpc0d1ZXN0XSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdOZXcgaXRlbSBoYXMgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgZXJyb3I6IFNRTEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhgPEFERFVTRVI+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTG9naW5UaW1lKCkge1xyXG4gICAgICAgIGxldCB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXJuYW1lRmllbGQpIHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRmllbGQudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gYFVQREFURSB1c2VycyBTRVQgdGltZXN0YW1wPT8gV0hFUkUgdXNlcm5hbWU9P2A7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoKSwgdXNlcm5hbWVdLFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgcmVzdWx0OiBTUUxSZXN1bHRTZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGBVc2VyICR7dXNlcm5hbWV9IGlzIGxvZ2dlZCBpbmApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYDxVUERBVEU+ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93VXNlcnNMaXN0KCkge1xyXG4gICAgICAgIGxldCBmaWVsZHNUb1Nob3cgPSAnaWQsIHVzZXJuYW1lLCB0aW1lc3RhbXAnO1xyXG4gICAgICAgIGlmICh0aGlzLnRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQWRtaW5Mb2dnZWQpIHtcclxuICAgICAgICAgICAgZmllbGRzVG9TaG93ID0gJyonO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0d1ZXN0TG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc1RvU2hvdyA9ICdpZCwgdXNlcm5hbWUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGBTRUxFQ1QgJHtmaWVsZHNUb1Nob3d9IEZST00gdXNlcnMgT1JERVIgQlkgaWRgO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgcmVzdWx0OiBTUUxSZXN1bHRTZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBJTkRFWF9PRl9ST1cgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlSFRNTFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIVE1MVGV4dCArPSBgPHRyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgQ09MVU1OX05BTUUgaW4gcmVzdWx0LnJvd3MuaXRlbShJTkRFWF9PRl9ST1cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhUTUxUZXh0ICs9IGA8dGQ+JHtDT0xVTU5fTkFNRX08L3RkPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIVE1MVGV4dCArPSBgPC90cj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdXNlck51bWJlciA9IDA7IHVzZXJOdW1iZXIgPCByZXN1bHQucm93cy5sZW5ndGg7IHVzZXJOdW1iZXIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSByZXN1bHQucm93cy5pdGVtKHVzZXJOdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSFRNTFRleHQgKz0gYDx0cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBDT0xVTU5fTkFNRSBpbiB1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIVE1MVGV4dCArPSBgPHRkPiR7dXNlcltDT0xVTU5fTkFNRV19PC90ZD5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIVE1MVGV4dCArPSBgPC90cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZSkgdGhpcy50YWJsZS5pbm5lckhUTUwgPSB0YWJsZUhUTUxUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLmlubmVySFRNTCA9IGA8dHI+PHRkIGNvbHNwYW49XCIzXCIgYWxpZ249XCJjZW50ZXJcIj5ObyBJdGVtcyBGb3VuZDwvdGQ+PC90cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCBlcnJvcjogU1FMRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0luZm8odGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXNGaWVsZCkgdGhpcy5tZXNzYWdlc0ZpZWxkLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25DcmVhdGVUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID1cclxuICAgICAgICAgICAgICAgICdDUkVBVEUgVEFCTEUgdXNlcnMgJyArXHJcbiAgICAgICAgICAgICAgICAnKGlkIElOVEVHRVIgTk9UIE5VTEwgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwnICtcclxuICAgICAgICAgICAgICAgICd1c2VybmFtZSBWQVJDSEFSKDEwMCkgTk9UIE5VTEwsJyArXHJcbiAgICAgICAgICAgICAgICAncGFzc3dvcmQgVkFSQ0hBUigxMCkgTk9UIE5VTEwsJyArXHJcbiAgICAgICAgICAgICAgICAnaXNBZG1pbiBWQVJDSEFSKDUpIE5PVCBOVUxMLCcgK1xyXG4gICAgICAgICAgICAgICAgJ2lzR3Vlc3QgVkFSQ0hBUig1KSBOT1QgTlVMTCwnICtcclxuICAgICAgICAgICAgICAgICd0aW1lc3RhbXAgVkFSQ0hBUigxMCkgTk9UIE5VTEwpJztcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdUYWJsZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdUYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkVXNlcignYWRtaW4nLCAnYWRtaW4nLCAndHJ1ZScsICdmYWxzZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVsZXRlVGFibGUoKSB7XHJcbiAgICAgICAgaWYgKCFjb25maXJtKCdBcmUgWW91IFN1cmU/JykpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzcWwgPSAnRFJPUCBUQUJMRSB1c2VycyAnO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1RhYmxlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ0Vycm9yIG9jY3VyZWQgd2hpbGUgZGVsZXRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvTG9naW4udHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydEFycmF5IGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBhcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgIGxpc3RPZlR1cm5zOiBudW1iZXJbXVtdID0gW107XHJcbiAgICBpc1Rlc3Q6IGFueSA9IGZhbHNlO1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheS5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFycmF5KGFycjogbnVtYmVyW10pIHtcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZUdXJucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydGlvblNvcnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0geyB2YWx1ZTogdGhpcy5hcnJheVtpXSwgaW5kZXg6IGkgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSA8IHRoaXMuYXJyYXlbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwRWxlbWVudHMoY3VycmVudEl0ZW0uaW5kZXgsIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmluZGV4ID0gajtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mVHVybnMucHVzaCh0aGlzLmFycmF5LnNsaWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVpY2tTb3J0KGZpcnN0SW5kZXggPSAwLCBsYXN0SW5kZXggPSB0aGlzLmFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBzdGFydFBhc3NJbmRleCA9IGZpcnN0SW5kZXg7XHJcbiAgICAgICAgbGV0IGVuZFBhc3NJbmRleCA9IGxhc3RJbmRleDtcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmFycmF5W2ZpcnN0SW5kZXhdLFxyXG4gICAgICAgICAgICBpbmRleDogZmlyc3RJbmRleFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKHN0YXJ0UGFzc0luZGV4IDwgZW5kUGFzc0luZGV4KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAtLWVuZFBhc3NJbmRleDsgaSA+IHN0YXJ0UGFzc0luZGV4OyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSA+IHRoaXMuYXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwRWxlbWVudHMoY3VycmVudEl0ZW0uaW5kZXgsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mVHVybnMucHVzaCh0aGlzLmFycmF5LnNsaWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVuZFBhc3NJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9ICsrc3RhcnRQYXNzSW5kZXg7IGkgPCBjdXJyZW50SXRlbS5pbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0udmFsdWUgPCB0aGlzLmFycmF5W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3dhcEVsZW1lbnRzKGN1cnJlbnRJdGVtLmluZGV4LCBpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5pbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RPZlR1cm5zLnB1c2godGhpcy5hcnJheS5zbGljZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydFBhc3NJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmluZGV4IC0gZmlyc3RJbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWlja1NvcnQoZmlyc3RJbmRleCwgY3VycmVudEl0ZW0uaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGFzdEluZGV4IC0gY3VycmVudEl0ZW0uaW5kZXggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVpY2tTb3J0KGN1cnJlbnRJdGVtLmluZGV4ICsgMSwgbGFzdEluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIG1lcmdlU29ydChhcnJheSA9IHRoaXMuYXJyYXkpIHtcclxuICAgICAgICBjb25zdCBtZXJnZWRBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgbWlkZGxlSW5kZXg6IG51bWJlciA9IE1hdGgudHJ1bmMoYXJyYXkubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgbGV0IGxlZnRBcnJheTogbnVtYmVyW10gPSBhcnJheS5zbGljZSgwLCBtaWRkbGVJbmRleCk7XHJcbiAgICAgICAgbGV0IHJpZ2h0QXJyYXk6IG51bWJlcltdID0gYXJyYXkuc2xpY2UobWlkZGxlSW5kZXgsIGFycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0QXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZWZ0QXJyYXkgPSB0aGlzLm1lcmdlU29ydChsZWZ0QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHRBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0QXJyYXkgPSB0aGlzLm1lcmdlU29ydChyaWdodEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHJpZ2h0QXJyYXkubGVuZ3RoICYmIGxlZnRBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHJpZ2h0QXJyYXlbMF0gPCBsZWZ0QXJyYXlbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSByaWdodEFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcEVsZW1lbnQgfHwgdGVtcEVsZW1lbnQgPT09IDApIG1lcmdlZEFycmF5LnB1c2godGVtcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IGxlZnRBcnJheS5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBFbGVtZW50IHx8IHRlbXBFbGVtZW50ID09PSAwKSBtZXJnZWRBcnJheS5wdXNoKHRlbXBFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXJnZWRBcnJheS5wdXNoKC4uLmxlZnRBcnJheSwgLi4ucmlnaHRBcnJheSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKG1lcmdlZEFycmF5LnNsaWNlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJuYWxTb3J0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSYW5kb21BcnJheShsZW5ndGhPZkFycmF5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBiYXNlQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhPZkFycmF5OyBpKyspIHtcclxuICAgICAgICAgICAgYmFzZUFycmF5LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhc2VBcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBiYXNlQXJyYXk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZUdXJucyA9IFtiYXNlQXJyYXkuc2xpY2UoKV07XHJcbiAgICAgICAgcmV0dXJuIGJhc2VBcnJheS5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zd2FwRWxlbWVudHMoaW5kZXhBOiBudW1iZXIsIGluZGV4QjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRlbXBJdGVtID0gdGhpcy5hcnJheVtpbmRleEFdO1xyXG4gICAgICAgIHRoaXMuYXJyYXlbaW5kZXhBXSA9IHRoaXMuYXJyYXlbaW5kZXhCXTtcclxuICAgICAgICB0aGlzLmFycmF5W2luZGV4Ql0gPSB0ZW1wSXRlbTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9TbWFydEFycmF5LnRzIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vRXZlbnRCdXMnO1xyXG5pbXBvcnQgSVZpZXcgZnJvbSAnLi9JVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRXZlbnRCdXMgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgICBwcml2YXRlIGRpdk1hcmdpbkxlZnQ6IG51bWJlciA9IDU1O1xyXG4gICAgcHJpdmF0ZSBkaXZFbGVtZW50czogSFRNTERpdkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0aW1lcklkOiBhbnkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ib3gnKTtcclxuICAgIHByaXZhdGUgbG9nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9ncycpO1xyXG4gICAgcHJpdmF0ZSBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xyXG4gICAgcHJpdmF0ZSB2aXN1YWxpemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplJyk7XHJcbiAgICBwcml2YXRlIHRlc3RTcGVlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0c3BlZWQnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyYXlTaXplJyk7XHJcbiAgICBwcml2YXRlIGFycmF5U2l6ZVRlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyYXlTaXplVGVzdCcpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGFycmF5TGVuZ3RoID0gK2RvY3VtZW50LmZvcm1zWzFdLmVsZW1lbnRzLmFycmF5U2l6ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUw6IGFueSA9IGRvY3VtZW50LmZvcm1zWzFdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAnYXJyYXlTaXplJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUxlbmd0aCA9ICthcnJheUwudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gMiAmJiBhcnJheUxlbmd0aCA8IDUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGlvOiBhbnkgPSBkb2N1bWVudC5mb3Jtc1sxXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaG9vc2VBbGdvJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydE1ldGhvZCA9IHJhZGlvLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1NvcnRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCdzdGFydCcsIHsgYXJyYXlMZW5ndGgsIHNvcnRNZXRob2QgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBgd3Jvbmcgc2l6ZSBvZiBhcnJheSAoICR7YXJyYXlMZW5ndGh9ICkhIEl0IHNob3VsZCBiZSBiZXR3ZWVuICggMi01MSApYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGluZm8sICdhbGVydCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpc3VhbGl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnZpc3VhbGl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCd2aXN1YWxpemUnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVzdFNwZWVkQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdFNwZWVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnU3BlZWQgdGVzdCBpbiBwcm9ncmVzcy4uLicsICdhbGVydCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUx0ZXN0OiBhbnkgPSBkb2N1bWVudC5mb3Jtc1sxXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZVRlc3QnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlc3RBcnJheUxlbmd0aCA9ICthcnJheUx0ZXN0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCAhPT0gTmFOICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCA8IDMwMDAxXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Rlc3RTcGVlZCcsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdXcm9uZyBsZW5ndGggb2YgdGhlIGFycmF5JywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW5kZXIoaW5pdEFycmF5OiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdib3gnO1xyXG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBgJHt0aGlzLmRpdk1hcmdpbkxlZnQgKiBpfXB4YDtcclxuICAgICAgICAgICAgICAgIGRpdi5kYXRhc2V0LnBvc2l0aW9uID0gYCR7aX1gO1xyXG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke2luaXRBcnJheVtpXX1gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50cy5wdXNoKGRpdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmlzdWFsaXplU29ydFByb2Nlc3MobGlzdE9mVHVybnM6IG51bWJlcltdW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dJbmZvKCdWaXN1YWxpemF0aW9uIHN0YXJ0ZWQnKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHVybjogbnVtYmVyW10gPSBsaXN0T2ZUdXJucy5zaGlmdCgpIHx8IFtdO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVPZkVsZW1lbnQ6IGFueTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHR1cm4ubGVuZ3RoOyBwb3NpdGlvbisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZU9mRWxlbWVudCA9IHR1cm5bcG9zaXRpb25dO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGl2RWxlbWVudHNbaV0uaW5uZXJIVE1MID09IHZhbHVlT2ZFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGl2RWxlbWVudHNbaV0uZGF0YXNldC5wb3NpdGlvbiA9IGAke3Bvc2l0aW9ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGl2RWxlbWVudHMuZm9yRWFjaCgoZG9tRWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zOiBudW1iZXIgPSArZG9tRWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gcG9zICogdGhpcy5kaXZNYXJnaW5MZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghbGlzdE9mVHVybnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGBWaXN1YWxpemF0aW9uIGZpbmlzaGVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UmVzdWx0KFxyXG4gICAgICAgIHN0YXJ0QXJyYXk6IG51bWJlcltdLFxyXG4gICAgICAgIHNvcnRNZXRob2Q6IHN0cmluZyxcclxuICAgICAgICByZXN1bHRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgYWN0aW9uVGltZTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2PklucHV0IGFycmF5OiAke3N0YXJ0QXJyYXkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+U29ydGluZyBtZXRob2Q6ICR7c29ydE1ldGhvZH08L2Rpdj5cclxuICAgICAgICA8ZGl2Pk91dHB1dCBhcnJheTogJHtyZXN1bHRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5SZW5kZXIgdGltZTogJHthY3Rpb25UaW1lfW1zPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWVkVGVzdFJlc3VsdHMocmVzdWx0T2ZUZXN0czogW10sIHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTdHJpbmcgPSBgVGVzdCBhcnJheSBsZW5ndGg6ICR7dGVzdEFycmF5TGVuZ3RofWA7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gcmVzdWx0T2ZUZXN0c1xyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgKGFsZ286IHsgbmFtZTogc3RyaW5nOyByZW5kZXJUaW1lOiBudW1iZXIgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHthbGdvLm5hbWV9LiBSZW5kZXIgdGltZTogJHthbGdvLnJlbmRlclRpbWV9bXM8L2Rpdj5gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudClcclxuICAgICAgICAgICAgdGhpcy5sb2dzRWxlbWVudC5pbm5lckhUTUwgPSBpbnB1dFN0cmluZyArIHJlc3VsdFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5mbyhpbmZvOiBzdHJpbmcsIGlzQWxlcnQ/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBpbmZvUGFuZWw6IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tcGFuZWwnKTtcclxuICAgICAgICBpZiAoaW5mb1BhbmVsKSB7XHJcbiAgICAgICAgICAgIGluZm9QYW5lbC5pbm5lckhUTUwgPSBpbmZvO1xyXG4gICAgICAgICAgICBpZiAoaXNBbGVydCkge1xyXG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwtLXJlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2luZm8tcGFuZWwtLXJlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL1ZpZXcudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBJVmlldyBmcm9tICcuL0lWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdNb2JpbGUgZXh0ZW5kcyBFdmVudEJ1cyBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIHByaXZhdGUgdGltZXJJZDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBsb2dzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dzJyk7XHJcbiAgICBwcml2YXRlIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XHJcbiAgICBwcml2YXRlIHZpc3VhbGl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUnKTtcclxuICAgIHByaXZhdGUgdGVzdFNwZWVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RzcGVlZCcpO1xyXG4gICAgcHJpdmF0ZSBpbmZvUGFuZWw6IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tcGFuZWwnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyYXlTaXplJyk7XHJcbiAgICBwcml2YXRlIGFycmF5U2l6ZVRlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyYXlTaXplVGVzdCcpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTU9CSUxFIERFVEVDVEVEJyk7XHJcbiAgICAgICAgaWYgKHRoaXMudmlzdWFsaXplQnV0dG9uKSB0aGlzLnZpc3VhbGl6ZUJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TDogYW55ID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICdhcnJheVNpemUnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TGVuZ3RoID0gK2FycmF5TC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICgrYXJyYXlMZW5ndGggPiAyICYmIGFycmF5TGVuZ3RoIDwgNTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaW86IGFueSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Nob29zZUFsZ28nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0TWV0aG9kID0gcmFkaW8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnU29ydGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3N0YXJ0JywgeyBhcnJheUxlbmd0aCwgc29ydE1ldGhvZCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGB3cm9uZyBzaXplIG9mIGFycmF5ICggJHthcnJheUxlbmd0aH0gKSEgSXQgc2hvdWxkIGJlIGJldHdlZW4gKCAyLTUxIClgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oaW5mbywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlzdWFsaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzdWFsaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Zpc3VhbGl6ZScsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXN0U3BlZWRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy50ZXN0U3BlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTcGVlZCB0ZXN0IGluIHByb2dyZXNzLi4uJywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMdGVzdDogYW55ID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICdhcnJheVNpemVUZXN0J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXN0QXJyYXlMZW5ndGggPSArYXJyYXlMdGVzdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggIT09IE5hTiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggPCAzMDAwMVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KCd0ZXN0U3BlZWQnLCB0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnV3JvbmcgbGVuZ3RoIG9mIHRoZSBhcnJheScsICdhbGVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0UmVuZGVyKGluaXRBcnJheTogbnVtYmVyW10pOiB2b2lkIHt9XHJcblxyXG4gICAgdmlzdWFsaXplU29ydFByb2Nlc3MobGlzdE9mVHVybnM6IG51bWJlcltdW10pOiB2b2lkIHt9XHJcblxyXG4gICAgc2hvd1Jlc3VsdChcclxuICAgICAgICBzdGFydEFycmF5OiBudW1iZXJbXSxcclxuICAgICAgICBzb3J0TWV0aG9kOiBzdHJpbmcsXHJcbiAgICAgICAgcmVzdWx0QXJyYXk6IG51bWJlcltdLFxyXG4gICAgICAgIGFjdGlvblRpbWU6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9nc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dzRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdj5JbnB1dCBhcnJheTogJHtzdGFydEFycmF5LmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlNvcnRpbmcgbWV0aG9kOiAke3NvcnRNZXRob2R9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5PdXRwdXQgYXJyYXk6ICR7cmVzdWx0QXJyYXkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+UmVuZGVyIHRpbWU6ICR7YWN0aW9uVGltZX1tczwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTcGVlZFRlc3RSZXN1bHRzKHJlc3VsdE9mVGVzdHM6IFtdLCB0ZXN0QXJyYXlMZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0U3RyaW5nID0gYFRlc3QgYXJyYXkgbGVuZ3RoOiAke3Rlc3RBcnJheUxlbmd0aH1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IHJlc3VsdE9mVGVzdHNcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgIChhbGdvOiB7IG5hbWU6IHN0cmluZzsgcmVuZGVyVGltZTogbnVtYmVyIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYDxkaXY+U29ydGluZyBtZXRob2Q6ICR7YWxnby5uYW1lfS4gUmVuZGVyIHRpbWU6ICR7YWxnby5yZW5kZXJUaW1lfW1zPC9kaXY+YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9nc0VsZW1lbnQpXHJcbiAgICAgICAgICAgIHRoaXMubG9nc0VsZW1lbnQuaW5uZXJIVE1MID0gaW5wdXRTdHJpbmcgKyByZXN1bHRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0luZm8oaW5mbzogc3RyaW5nLCBpc0FsZXJ0PzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5mb1BhbmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLmlubmVySFRNTCA9IGluZm87XHJcbiAgICAgICAgICAgIGlmIChpc0FsZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9QYW5lbC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsLS1yZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2luZm8tcGFuZWwtLXJlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL1ZpZXdNb2JpbGUudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBTbWFydEFycmF5IGZyb20gJy4vU21hcnRBcnJheSc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgYXJyYXlNb2RlbDogU21hcnRBcnJheTtcclxuICAgIHByaXZhdGUgdmlld01vZGVsOiBWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFycmF5TW9kZWw6IFNtYXJ0QXJyYXksIHZpZXdNb2RlbDogVmlldykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsID0gYXJyYXlNb2RlbDtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3TW9kZWwuc2V0RXZlbnRMaXN0ZW5lcignc3RhcnQnLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlNb2RlbC5jcmVhdGVSYW5kb21BcnJheShkYXRhLmFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEFycmF5OiBudW1iZXJbXSA9IHRoaXMuYXJyYXlNb2RlbC5nZXRBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRBcnJheTogbnVtYmVyW10gPSB0aGlzLmFycmF5TW9kZWxbZGF0YS5zb3J0TWV0aG9kXSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuc2hvd1Jlc3VsdChcclxuICAgICAgICAgICAgICAgIHN0YXJ0QXJyYXksXHJcbiAgICAgICAgICAgICAgICBkYXRhLnNvcnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRBcnJheSxcclxuICAgICAgICAgICAgICAgIGZpbmlzaFRpbWUgLSBzdGFydFRpbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3TW9kZWwuc2V0RXZlbnRMaXN0ZW5lcigndmlzdWFsaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcnJheU1vZGVsLmxpc3RPZlR1cm5zLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmluaXRSZW5kZXIodGhpcy5hcnJheU1vZGVsLmxpc3RPZlR1cm5zWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnZpc3VhbGl6ZVNvcnRQcm9jZXNzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlNb2RlbC5saXN0T2ZUdXJuc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnNob3dJbmZvKCdVc2UgdmlzdWFsaXplIGFmdGVyIHNvcnQhISEnLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAndGVzdFNwZWVkJyxcclxuICAgICAgICAgICAgKHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0UmVzOiBhbnkgPSB0aGlzLl90ZXN0U3BlZWRzKHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93U3BlZWRUZXN0UmVzdWx0cyh0ZXN0UmVzLCB0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuc2hvd0luZm8oJ1NwZWVkIHRlc3QgY29tcGxpdGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfdGVzdFNwZWVkcyh0ZXN0QXJyYXlMZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXJyYXlNb2RlbC5pc1Rlc3QgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRlc3RlZEFsZ29yaXRobXMgPSBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ0luc2VydGlvbicsIGZ1bmN0OiAnaW5zZXJ0aW9uU29ydCcsIHJlbmRlclRpbWU6IDAgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnUXVpY2snLCBmdW5jdDogJ3F1aWNrU29ydCcsIHJlbmRlclRpbWU6IDAgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnTWVyZ2UnLCBmdW5jdDogJ21lcmdlU29ydCcsIHJlbmRlclRpbWU6IDAgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnSW50ZXJuYWwnLCBmdW5jdDogJ2ludGVybmFsU29ydCcsIHJlbmRlclRpbWU6IDAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgdGVzdEFycmF5ID0gdGhpcy5hcnJheU1vZGVsLmNyZWF0ZVJhbmRvbUFycmF5KHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgdGVzdGVkQWxnb3JpdGhtcy5mb3JFYWNoKGFsZ28gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5TW9kZWwuc2V0QXJyYXkodGVzdEFycmF5KTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsW2FsZ28uZnVuY3RdKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBhbGdvLnJlbmRlclRpbWUgPSBmaW5pc2hUaW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNb2RlbC5pc1Rlc3QgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGVzdGVkQWxnb3JpdGhtcztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJzb3VyY2VSb290IjoiIn0=