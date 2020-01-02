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
        this.deleteBtn = document.getElementById('delete');
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
        if (this.deleteBtn)
            this.deleteBtn.addEventListener('click', th.onDeleteUser.bind(th));
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
                                if (this.adminContainer) {
                                    this.adminContainer.hidden = false;
                                }
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
    onDeleteUser() {
        if (!this.isAdminLogged) {
            this.showInfo('You can not delete users');
            return;
        }
        if (this.usernameField && !this.usernameField.value) {
            this.showInfo('Please, fill login field');
            return;
        }
        let userName = this.usernameField.value;
        if (!confirm(`Are You sure to delete user ${userName}?`))
            return;
        this.db.transaction(transaction => {
            const sql = 'DELETE FROM users WHERE username=?';
            transaction.executeSql(sql, [userName], () => {
                this.showInfo(`User ${userName} successfully deleted`);
            }, () => {
                this.showInfo('User can not be deleted');
                return false;
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZlOGViMWRlZDRhZDJjOTlmMDAiLCJ3ZWJwYWNrOi8vLy4vdHMvRXZlbnRCdXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvSW5pdC50cyIsIndlYnBhY2s6Ly8vLi90cy9Mb2dpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9TbWFydEFycmF5LnRzIiwid2VicGFjazovLy8uL3RzL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvVmlld01vYmlsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RlLE1BQU0sUUFBUTtJQUV6QjtRQURRLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRWhCLGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsUUFBYTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMs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QUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBQUE7QUFBQSIsImZpbGUiOiIuL2Rpc3QvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWZlOGViMWRlZDRhZDJjOTlmMDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrc0xpc3Q6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrc0xpc3QuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrc0xpc3RbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrc0xpc3RbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWl0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYWxsYmFja3NMaXN0Lmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYWxsYmFja3NJbkV2ZW50ID0gdGhpcy5jYWxsYmFja3NMaXN0W2V2ZW50TmFtZV07XHJcbiAgICAgICAgZm9yIChjb25zdCBmdW5jIG9mIGNhbGxiYWNrc0luRXZlbnQpIHtcclxuICAgICAgICAgICAgZnVuYyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvRXZlbnRCdXMudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuaW1wb3J0IFNtYXJ0QXJyYXkgZnJvbSAnLi9TbWFydEFycmF5JztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuaW1wb3J0IFZpZXdNb2JpbGUgZnJvbSAnLi9WaWV3TW9iaWxlJztcclxuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRyb2xsZXInO1xyXG5pbXBvcnQgSVZpZXcgZnJvbSAnLi9JVmlldyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luID0gbmV3IExvZ2luKCk7XHJcbiAgICBjb25zdCBteUFycmF5ID0gbmV3IFNtYXJ0QXJyYXkoKTtcclxuICAgIGxvZ2luLnNldEV2ZW50TGlzdGVuZXIoJ2xvZ2dlZCcsICgpID0+IHtcclxuICAgICAgICBsZXQgdmlld3BvcnQ6IGFueTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcGFkfGlyaXN8a2luZGxlfEFuZHJvaWR8U2lsa3xsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5zdWJzdHIoMCwgNClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2aWV3cG9ydCA9IG5ldyBWaWV3TW9iaWxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHZpZXdwb3J0ID0gbmV3IFZpZXcoKTtcclxuXHJcbiAgICAgICAgbmV3IE1haW5Db250cm9sbGVyKG15QXJyYXksIHZpZXdwb3J0KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvSW5pdC50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBkYjogRGF0YWJhc2UgPSB3aW5kb3cub3BlbkRhdGFiYXNlKCdpdGVtREInLCAnMS4wJywgJ2l0ZW1EQicsIDY1NTM1KTtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xyXG4gICAgcHJpdmF0ZSByZW1vdmVCdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUnKTtcclxuICAgIHByaXZhdGUgbG9naW5CdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbl9idG4nKTtcclxuICAgIHByaXZhdGUgbGlzdEJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3cnKTtcclxuICAgIHByaXZhdGUgZGVsZXRlQnRuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlJyk7XHJcbiAgICBwcml2YXRlIHVzZXJuYW1lRmllbGQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZEZpZWxkOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuICAgIHByaXZhdGUgaXNBZG1pbkZpZWxkOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRtaW4nKTtcclxuICAgIHByaXZhdGUgbWVzc2FnZXNGaWVsZDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzJyk7XHJcbiAgICBwcml2YXRlIGFkbWluQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tY29udGFpbmVyJyk7XHJcbiAgICBwcml2YXRlIHRhYmxlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfdXNlcnMnKTtcclxuXHJcbiAgICBwcml2YXRlIGlzQWRtaW5Mb2dnZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNHdWVzdExvZ2dlZCA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzQWRtaW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCB0aCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlQnRuKSB0aGlzLmNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uQ3JlYXRlVGFibGUuYmluZCh0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbW92ZUJ0bikgdGhpcy5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aC5vbkRlbGV0ZVRhYmxlLmJpbmQodGgpKTtcclxuICAgICAgICBpZiAodGhpcy5sb2dpbkJ0bikgdGhpcy5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uTG9naW4uYmluZCh0aCkpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RCdG4pIHRoaXMubGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uU2hvd1VzZXJzTGlzdC5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlQnRuKSB0aGlzLmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoLm9uRGVsZXRlVXNlci5iaW5kKHRoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRtaW5Db250YWluZXIpIHRoaXMuYWRtaW5Db250YWluZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dJbmZvKCdQbGVhc2UsIGxvZ2luIGZpcnN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpbigpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VybmFtZUZpZWxkICYmICF0aGlzLnVzZXJuYW1lRmllbGQudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnUGxlYXNlLCBlbnRlciB5b3VyIGxvZ2luJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dpblVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblVzZXIoKSB7XHJcbiAgICAgICAgbGV0IHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVGaWVsZCkgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lRmllbGQudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmRGaWVsZCkgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSAnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZT0/JztcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIFt1c2VybmFtZV0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCByZXN1bHQ6IFNRTFJlc3VsdFNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSByZXN1bHQucm93cy5pdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0d1ZXN0TG9nZ2VkID0gcGFzc3dvcmQgPT09ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTG9naW5UaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ2xvZ2dlZCcsIHsgdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIuaXNBZG1pbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkxvZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkZpZWxkKSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkxvZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNob3dJbmZvKCdUaGUgVXNlciBpcyBwcmVzZW50IGFuZCBwYXNzd29yZCBpcyBub3QgY29ycmVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkbWluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW5Mb2dnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNHdWVzdExvZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0FkbWluRmllbGQpIHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkbWluQ29udGFpbmVyKSB0aGlzLmFkbWluQ29udGFpbmVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FkbWluRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbiA9IHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW5Mb2dnZWQgPSB0aGlzLmlzQWRtaW5GaWVsZC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRtaW5Db250YWluZXIpIHRoaXMuYWRtaW5Db250YWluZXIuaGlkZGVuID0gIXRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzR3Vlc3RMb2dnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbkZpZWxkLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCwgdGhpcy5pc0FkbWluLnRvU3RyaW5nKCksIGAke3Bhc3N3b3JkID09PSAnJ31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ2xvZ2dlZCcsIHsgdXNlcm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYDxDSEVDSz4gJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGlzQWRtaW46IHN0cmluZywgaXNHdWVzdDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9ICdJTlNFUlQgSU5UTyB1c2VycyAodXNlcm5hbWUsIHBhc3N3b3JkLCB0aW1lc3RhbXAsIGlzQWRtaW4sIGlzR3Vlc3QpIFZBTFVFUyg/LD8sPyw/LD8pJztcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIFt1c2VybmFtZSwgcGFzc3dvcmQsIG5ldyBEYXRlKCksIGlzQWRtaW4sIGlzR3Vlc3RdLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ05ldyBpdGVtIGhhcyBhZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCBlcnJvcjogU1FMRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKGA8QUREVVNFUj4gJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMb2dpblRpbWUoKSB7XHJcbiAgICAgICAgbGV0IHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVGaWVsZCkge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWVGaWVsZC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPSBgVVBEQVRFIHVzZXJzIFNFVCB0aW1lc3RhbXA9PyBXSEVSRSB1c2VybmFtZT0/YDtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZSgpLCB1c2VybmFtZV0sXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCByZXN1bHQ6IFNRTFJlc3VsdFNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYFVzZXIgJHt1c2VybmFtZX0gaXMgbG9nZ2VkIGluYCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgZXJyb3I6IFNRTEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhgPFVQREFURT4gJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3dVc2Vyc0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkc1RvU2hvdyA9ICdpZCwgdXNlcm5hbWUsIHRpbWVzdGFtcCc7XHJcbiAgICAgICAgaWYgKHRoaXMudGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZG1pbkxvZ2dlZCkge1xyXG4gICAgICAgICAgICBmaWVsZHNUb1Nob3cgPSAnKic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzR3Vlc3RMb2dnZWQpIHtcclxuICAgICAgICAgICAgZmllbGRzVG9TaG93ID0gJ2lkLCB1c2VybmFtZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gYFNFTEVDVCAke2ZpZWxkc1RvU2hvd30gRlJPTSB1c2VycyBPUkRFUiBCWSBpZGA7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCByZXN1bHQ6IFNRTFJlc3VsdFNldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IElOREVYX09GX1JPVyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGVIVE1MVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhUTUxUZXh0ICs9IGA8dHI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBDT0xVTU5fTkFNRSBpbiByZXN1bHQucm93cy5pdGVtKElOREVYX09GX1JPVykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSFRNTFRleHQgKz0gYDx0ZD4ke0NPTFVNTl9OQU1FfTwvdGQ+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhUTUxUZXh0ICs9IGA8L3RyPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1c2VyTnVtYmVyID0gMDsgdXNlck51bWJlciA8IHJlc3VsdC5yb3dzLmxlbmd0aDsgdXNlck51bWJlcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3VsdC5yb3dzLml0ZW0odXNlck51bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIVE1MVGV4dCArPSBgPHRyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IENPTFVNTl9OQU1FIGluIHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhUTUxUZXh0ICs9IGA8dGQ+JHt1c2VyW0NPTFVNTl9OQU1FXX08L3RkPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUhUTUxUZXh0ICs9IGA8L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlKSB0aGlzLnRhYmxlLmlubmVySFRNTCA9IHRhYmxlSFRNTFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuaW5uZXJIVE1MID0gYDx0cj48dGQgY29sc3Bhbj1cIjNcIiBhbGlnbj1cImNlbnRlclwiPk5vIEl0ZW1zIEZvdW5kPC90ZD48L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5mbyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlc0ZpZWxkKSB0aGlzLm1lc3NhZ2VzRmllbGQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZVVzZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWRtaW5Mb2dnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnWW91IGNhbiBub3QgZGVsZXRlIHVzZXJzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWVGaWVsZCAmJiAhdGhpcy51c2VybmFtZUZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1BsZWFzZSwgZmlsbCBsb2dpbiBmaWVsZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXNlck5hbWUgPSB0aGlzLnVzZXJuYW1lRmllbGQudmFsdWU7XHJcbiAgICAgICAgaWYgKCFjb25maXJtKGBBcmUgWW91IHN1cmUgdG8gZGVsZXRlIHVzZXIgJHt1c2VyTmFtZX0/YCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9ICdERUxFVEUgRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZT0/JztcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXhlY3V0ZVNxbChcclxuICAgICAgICAgICAgICAgIHNxbCxcclxuICAgICAgICAgICAgICAgIFt1c2VyTmFtZV0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhgVXNlciAke3VzZXJOYW1lfSBzdWNjZXNzZnVsbHkgZGVsZXRlZGApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdVc2VyIGNhbiBub3QgYmUgZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZGIudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcWwgPVxyXG4gICAgICAgICAgICAgICAgJ0NSRUFURSBUQUJMRSB1c2VycyAnICtcclxuICAgICAgICAgICAgICAgICcoaWQgSU5URUdFUiBOT1QgTlVMTCBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCcgK1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lIFZBUkNIQVIoMTAwKSBOT1QgTlVMTCwnICtcclxuICAgICAgICAgICAgICAgICdwYXNzd29yZCBWQVJDSEFSKDEwKSBOT1QgTlVMTCwnICtcclxuICAgICAgICAgICAgICAgICdpc0FkbWluIFZBUkNIQVIoNSkgTk9UIE5VTEwsJyArXHJcbiAgICAgICAgICAgICAgICAnaXNHdWVzdCBWQVJDSEFSKDUpIE5PVCBOVUxMLCcgK1xyXG4gICAgICAgICAgICAgICAgJ3RpbWVzdGFtcCBWQVJDSEFSKDEwKSBOT1QgTlVMTCknO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKFxyXG4gICAgICAgICAgICAgICAgc3FsLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1RhYmxlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1RhYmxlIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRVc2VyKCdhZG1pbicsICdhZG1pbicsICd0cnVlJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVUYWJsZSgpIHtcclxuICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSBZb3UgU3VyZT8nKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRiLnRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgbGV0IHNxbCA9ICdEUk9QIFRBQkxFIHVzZXJzICc7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVTcWwoXHJcbiAgICAgICAgICAgICAgICBzcWwsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnVGFibGUgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnRXJyb3Igb2NjdXJlZCB3aGlsZSBkZWxldGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90cy9Mb2dpbi50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0QXJyYXkgZXh0ZW5kcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgbGlzdE9mVHVybnM6IG51bWJlcltdW10gPSBbXTtcclxuICAgIGlzVGVzdDogYW55ID0gZmFsc2U7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXJyYXkoYXJyOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnIuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmxpc3RPZlR1cm5zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0aW9uU29ydCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB7IHZhbHVlOiB0aGlzLmFycmF5W2ldLCBpbmRleDogaSB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlIDwgdGhpcy5hcnJheVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBxdWlja1NvcnQoZmlyc3RJbmRleCA9IDAsIGxhc3RJbmRleCA9IHRoaXMuYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UGFzc0luZGV4ID0gZmlyc3RJbmRleDtcclxuICAgICAgICBsZXQgZW5kUGFzc0luZGV4ID0gbGFzdEluZGV4O1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuYXJyYXlbZmlyc3RJbmRleF0sXHJcbiAgICAgICAgICAgIGluZGV4OiBmaXJzdEluZGV4XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aGlsZSAoc3RhcnRQYXNzSW5kZXggPCBlbmRQYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IC0tZW5kUGFzc0luZGV4OyBpID4gc3RhcnRQYXNzSW5kZXg7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlID4gdGhpcy5hcnJheVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N3YXBFbGVtZW50cyhjdXJyZW50SXRlbS5pbmRleCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUdXJucy5wdXNoKHRoaXMuYXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW5kUGFzc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKytzdGFydFBhc3NJbmRleDsgaSA8IGN1cnJlbnRJdGVtLmluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSA8IHRoaXMuYXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zd2FwRWxlbWVudHMoY3VycmVudEl0ZW0uaW5kZXgsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mVHVybnMucHVzaCh0aGlzLmFycmF5LnNsaWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0UGFzc0luZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uaW5kZXggLSBmaXJzdEluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aWNrU29ydChmaXJzdEluZGV4LCBjdXJyZW50SXRlbS5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXN0SW5kZXggLSBjdXJyZW50SXRlbS5pbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWlja1NvcnQoY3VycmVudEl0ZW0uaW5kZXggKyAxLCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVyZ2VTb3J0KGFycmF5ID0gdGhpcy5hcnJheSkge1xyXG4gICAgICAgIGNvbnN0IG1lcmdlZEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBtaWRkbGVJbmRleDogbnVtYmVyID0gTWF0aC50cnVuYyhhcnJheS5sZW5ndGggLyAyKTtcclxuICAgICAgICBsZXQgbGVmdEFycmF5OiBudW1iZXJbXSA9IGFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KTtcclxuICAgICAgICBsZXQgcmlnaHRBcnJheTogbnVtYmVyW10gPSBhcnJheS5zbGljZShtaWRkbGVJbmRleCwgYXJyYXkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKGxlZnRBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxlZnRBcnJheSA9IHRoaXMubWVyZ2VTb3J0KGxlZnRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgcmlnaHRBcnJheSA9IHRoaXMubWVyZ2VTb3J0KHJpZ2h0QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAocmlnaHRBcnJheS5sZW5ndGggJiYgbGVmdEFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAocmlnaHRBcnJheVswXSA8IGxlZnRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHJpZ2h0QXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wRWxlbWVudCB8fCB0ZW1wRWxlbWVudCA9PT0gMCkgbWVyZ2VkQXJyYXkucHVzaCh0ZW1wRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudDogbnVtYmVyIHwgdW5kZWZpbmVkID0gbGVmdEFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcEVsZW1lbnQgfHwgdGVtcEVsZW1lbnQgPT09IDApIG1lcmdlZEFycmF5LnB1c2godGVtcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lcmdlZEFycmF5LnB1c2goLi4ubGVmdEFycmF5LCAuLi5yaWdodEFycmF5KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZlR1cm5zLnB1c2gobWVyZ2VkQXJyYXkuc2xpY2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZWRBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcm5hbFNvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJhbmRvbUFycmF5KGxlbmd0aE9mQXJyYXk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJhc2VBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aE9mQXJyYXk7IGkrKykge1xyXG4gICAgICAgICAgICBiYXNlQXJyYXkucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZUFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGJhc2VBcnJheTtcclxuICAgICAgICB0aGlzLmxpc3RPZlR1cm5zID0gW2Jhc2VBcnJheS5zbGljZSgpXTtcclxuICAgICAgICByZXR1cm4gYmFzZUFycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3N3YXBFbGVtZW50cyhpbmRleEE6IG51bWJlciwgaW5kZXhCOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGVtcEl0ZW0gPSB0aGlzLmFycmF5W2luZGV4QV07XHJcbiAgICAgICAgdGhpcy5hcnJheVtpbmRleEFdID0gdGhpcy5hcnJheVtpbmRleEJdO1xyXG4gICAgICAgIHRoaXMuYXJyYXlbaW5kZXhCXSA9IHRlbXBJdGVtO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL1NtYXJ0QXJyYXkudHMiLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XHJcbmltcG9ydCBJVmlldyBmcm9tICcuL0lWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFdmVudEJ1cyBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIHByaXZhdGUgZGl2TWFyZ2luTGVmdDogbnVtYmVyID0gNTU7XHJcbiAgICBwcml2YXRlIGRpdkVsZW1lbnRzOiBIVE1MRGl2RWxlbWVudFtdID0gW107XHJcbiAgICBwcml2YXRlIHRpbWVySWQ6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJveCcpO1xyXG4gICAgcHJpdmF0ZSBsb2dzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dzJyk7XHJcbiAgICBwcml2YXRlIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XHJcbiAgICBwcml2YXRlIHZpc3VhbGl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUnKTtcclxuICAgIHByaXZhdGUgdGVzdFNwZWVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RzcGVlZCcpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemUnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemVUZXN0Jyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYXJyYXlMZW5ndGggPSArZG9jdW1lbnQuZm9ybXNbMV0uZWxlbWVudHMuYXJyYXlTaXplLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TDogYW55ID0gZG9jdW1lbnQuZm9ybXNbMV0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICdhcnJheVNpemUnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TGVuZ3RoID0gK2FycmF5TC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiAyICYmIGFycmF5TGVuZ3RoIDwgNTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaW86IGFueSA9IGRvY3VtZW50LmZvcm1zWzFdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Nob29zZUFsZ28nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0TWV0aG9kID0gcmFkaW8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbygnU29ydGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3N0YXJ0JywgeyBhcnJheUxlbmd0aCwgc29ydE1ldGhvZCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGB3cm9uZyBzaXplIG9mIGFycmF5ICggJHthcnJheUxlbmd0aH0gKSEgSXQgc2hvdWxkIGJlIGJldHdlZW4gKCAyLTUxIClgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oaW5mbywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlzdWFsaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzdWFsaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Zpc3VhbGl6ZScsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXN0U3BlZWRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy50ZXN0U3BlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTcGVlZCB0ZXN0IGluIHByb2dyZXNzLi4uJywgJ2FsZXJ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5THRlc3Q6IGFueSA9IGRvY3VtZW50LmZvcm1zWzFdLmVsZW1lbnRzLm5hbWVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAnYXJyYXlTaXplVGVzdCdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVzdEFycmF5TGVuZ3RoID0gK2FycmF5THRlc3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoICE9PSBOYU4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0QXJyYXlMZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoIDwgMzAwMDFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndGVzdFNwZWVkJywgdGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1dyb25nIGxlbmd0aCBvZiB0aGUgYXJyYXknLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0QXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlbmRlcihpbml0QXJyYXk6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2JveCc7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUubWFyZ2luTGVmdCA9IGAke3RoaXMuZGl2TWFyZ2luTGVmdCAqIGl9cHhgO1xyXG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQucG9zaXRpb24gPSBgJHtpfWA7XHJcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7aW5pdEFycmF5W2ldfWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkVsZW1lbnRzLnB1c2goZGl2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2aXN1YWxpemVTb3J0UHJvY2VzcyhsaXN0T2ZUdXJuczogbnVtYmVyW11bXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oJ1Zpc3VhbGl6YXRpb24gc3RhcnRlZCcpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0dXJuOiBudW1iZXJbXSA9IGxpc3RPZlR1cm5zLnNoaWZ0KCkgfHwgW107XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZU9mRWxlbWVudDogYW55O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgdHVybi5sZW5ndGg7IHBvc2l0aW9uKyspIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlT2ZFbGVtZW50ID0gdHVybltwb3NpdGlvbl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGl2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXZFbGVtZW50c1tpXS5pbm5lckhUTUwgPT0gdmFsdWVPZkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50c1tpXS5kYXRhc2V0LnBvc2l0aW9uID0gYCR7cG9zaXRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXZFbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9ICtkb21FbGVtZW50LmRhdGFzZXQucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBwb3MgKiB0aGlzLmRpdk1hcmdpbkxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFsaXN0T2ZUdXJucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oYFZpc3VhbGl6YXRpb24gZmluaXNoZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dSZXN1bHQoXHJcbiAgICAgICAgc3RhcnRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgc29ydE1ldGhvZDogc3RyaW5nLFxyXG4gICAgICAgIHJlc3VsdEFycmF5OiBudW1iZXJbXSxcclxuICAgICAgICBhY3Rpb25UaW1lOiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nc0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXY+SW5wdXQgYXJyYXk6ICR7c3RhcnRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHtzb3J0TWV0aG9kfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+T3V0cHV0IGFycmF5OiAke3Jlc3VsdEFycmF5LmpvaW4oJyAnKX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlJlbmRlciB0aW1lOiAke2FjdGlvblRpbWV9bXM8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BlZWRUZXN0UmVzdWx0cyhyZXN1bHRPZlRlc3RzOiBbXSwgdGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFN0cmluZyA9IGBUZXN0IGFycmF5IGxlbmd0aDogJHt0ZXN0QXJyYXlMZW5ndGh9YDtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSByZXN1bHRPZlRlc3RzXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAoYWxnbzogeyBuYW1lOiBzdHJpbmc7IHJlbmRlclRpbWU6IG51bWJlciB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2PlNvcnRpbmcgbWV0aG9kOiAke2FsZ28ubmFtZX0uIFJlbmRlciB0aW1lOiAke2FsZ28ucmVuZGVyVGltZX1tczwvZGl2PmBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxvZ3NFbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGlucHV0U3RyaW5nICsgcmVzdWx0U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmZvKGluZm86IHN0cmluZywgaXNBbGVydD86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGluZm9QYW5lbDogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1wYW5lbCcpO1xyXG4gICAgICAgIGlmIChpbmZvUGFuZWwpIHtcclxuICAgICAgICAgICAgaW5mb1BhbmVsLmlubmVySFRNTCA9IGluZm87XHJcbiAgICAgICAgICAgIGlmIChpc0FsZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvVmlldy50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IElWaWV3IGZyb20gJy4vSVZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld01vYmlsZSBleHRlbmRzIEV2ZW50QnVzIGltcGxlbWVudHMgSVZpZXcge1xyXG4gICAgcHJpdmF0ZSB0aW1lcklkOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGxvZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ3MnKTtcclxuICAgIHByaXZhdGUgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcclxuICAgIHByaXZhdGUgdmlzdWFsaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc3VhbGl6ZScpO1xyXG4gICAgcHJpdmF0ZSB0ZXN0U3BlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdHNwZWVkJyk7XHJcbiAgICBwcml2YXRlIGluZm9QYW5lbDogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1wYW5lbCcpO1xyXG4gICAgcHJpdmF0ZSBhcnJheVNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemUnKTtcclxuICAgIHByaXZhdGUgYXJyYXlTaXplVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJheVNpemVUZXN0Jyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNT0JJTEUgREVURUNURUQnKTtcclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHRoaXMudmlzdWFsaXplQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMOiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlMZW5ndGggPSArYXJyYXlMLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCthcnJheUxlbmd0aCA+IDIgJiYgYXJyYXlMZW5ndGggPCA1MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpbzogYW55ID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHMubmFtZWRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hvb3NlQWxnbydcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRNZXRob2QgPSByYWRpby52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdTb3J0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnc3RhcnQnLCB7IGFycmF5TGVuZ3RoLCBzb3J0TWV0aG9kIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYHdyb25nIHNpemUgb2YgYXJyYXkgKCAke2FycmF5TGVuZ3RofSApISBJdCBzaG91bGQgYmUgYmV0d2VlbiAoIDItNTEgKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyhpbmZvLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aXN1YWxpemVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxpemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgndmlzdWFsaXplJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTcGVlZEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3RTcGVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8oJ1NwZWVkIHRlc3QgaW4gcHJvZ3Jlc3MuLi4nLCAnYWxlcnQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUx0ZXN0OiBhbnkgPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50cy5uYW1lZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FycmF5U2l6ZVRlc3QnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlc3RBcnJheUxlbmd0aCA9ICthcnJheUx0ZXN0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCAhPT0gTmFOICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdEFycmF5TGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RBcnJheUxlbmd0aCA8IDMwMDAxXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3Rlc3RTcGVlZCcsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCdXcm9uZyBsZW5ndGggb2YgdGhlIGFycmF5JywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW5kZXIoaW5pdEFycmF5OiBudW1iZXJbXSk6IHZvaWQge31cclxuXHJcbiAgICB2aXN1YWxpemVTb3J0UHJvY2VzcyhsaXN0T2ZUdXJuczogbnVtYmVyW11bXSk6IHZvaWQge31cclxuXHJcbiAgICBzaG93UmVzdWx0KFxyXG4gICAgICAgIHN0YXJ0QXJyYXk6IG51bWJlcltdLFxyXG4gICAgICAgIHNvcnRNZXRob2Q6IHN0cmluZyxcclxuICAgICAgICByZXN1bHRBcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgYWN0aW9uVGltZTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3NFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2PklucHV0IGFycmF5OiAke3N0YXJ0QXJyYXkuam9pbignICcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+U29ydGluZyBtZXRob2Q6ICR7c29ydE1ldGhvZH08L2Rpdj5cclxuICAgICAgICA8ZGl2Pk91dHB1dCBhcnJheTogJHtyZXN1bHRBcnJheS5qb2luKCcgJyl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5SZW5kZXIgdGltZTogJHthY3Rpb25UaW1lfW1zPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwZWVkVGVzdFJlc3VsdHMocmVzdWx0T2ZUZXN0czogW10sIHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTdHJpbmcgPSBgVGVzdCBhcnJheSBsZW5ndGg6ICR7dGVzdEFycmF5TGVuZ3RofWA7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gcmVzdWx0T2ZUZXN0c1xyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgKGFsZ286IHsgbmFtZTogc3RyaW5nOyByZW5kZXJUaW1lOiBudW1iZXIgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBgPGRpdj5Tb3J0aW5nIG1ldGhvZDogJHthbGdvLm5hbWV9LiBSZW5kZXIgdGltZTogJHthbGdvLnJlbmRlclRpbWV9bXM8L2Rpdj5gXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2dzRWxlbWVudClcclxuICAgICAgICAgICAgdGhpcy5sb2dzRWxlbWVudC5pbm5lckhUTUwgPSBpbnB1dFN0cmluZyArIHJlc3VsdFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5mbyhpbmZvOiBzdHJpbmcsIGlzQWxlcnQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmZvUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuaW5uZXJIVE1MID0gaW5mbztcclxuICAgICAgICAgICAgaWYgKGlzQWxlcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwtLXJlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mby1wYW5lbC0tcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdHMvVmlld01vYmlsZS50cyIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcclxuaW1wb3J0IFNtYXJ0QXJyYXkgZnJvbSAnLi9TbWFydEFycmF5JztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBhcnJheU1vZGVsOiBTbWFydEFycmF5O1xyXG4gICAgcHJpdmF0ZSB2aWV3TW9kZWw6IFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyYXlNb2RlbDogU21hcnRBcnJheSwgdmlld01vZGVsOiBWaWV3KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFycmF5TW9kZWwgPSBhcnJheU1vZGVsO1xyXG4gICAgICAgIHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKCdzdGFydCcsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLmNyZWF0ZVJhbmRvbUFycmF5KGRhdGEuYXJyYXlMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXJyYXk6IG51bWJlcltdID0gdGhpcy5hcnJheU1vZGVsLmdldEFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFycmF5OiBudW1iZXJbXSA9IHRoaXMuYXJyYXlNb2RlbFtkYXRhLnNvcnRNZXRob2RdKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaFRpbWU6IG51bWJlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93UmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBcnJheSxcclxuICAgICAgICAgICAgICAgIGRhdGEuc29ydE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZmluaXNoVGltZSAtIHN0YXJ0VGltZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5zZXRFdmVudExpc3RlbmVyKCd2aXN1YWxpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFJlbmRlcih0aGlzLmFycmF5TW9kZWwubGlzdE9mVHVybnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwudmlzdWFsaXplU29ydFByb2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheU1vZGVsLmxpc3RPZlR1cm5zXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuc2hvd0luZm8oJ1VzZSB2aXN1YWxpemUgYWZ0ZXIgc29ydCEhIScsICdhbGVydCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlld01vZGVsLnNldEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICd0ZXN0U3BlZWQnLFxyXG4gICAgICAgICAgICAodGVzdEFycmF5TGVuZ3RoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXM6IGFueSA9IHRoaXMuX3Rlc3RTcGVlZHModGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLnNob3dTcGVlZFRlc3RSZXN1bHRzKHRlc3RSZXMsIHRlc3RBcnJheUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5zaG93SW5mbygnU3BlZWQgdGVzdCBjb21wbGl0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF90ZXN0U3BlZWRzKHRlc3RBcnJheUxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsLmlzVGVzdCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdGVzdGVkQWxnb3JpdGhtcyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAnSW5zZXJ0aW9uJywgZnVuY3Q6ICdpbnNlcnRpb25Tb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdRdWljaycsIGZ1bmN0OiAncXVpY2tTb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdNZXJnZScsIGZ1bmN0OiAnbWVyZ2VTb3J0JywgcmVuZGVyVGltZTogMCB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICdJbnRlcm5hbCcsIGZ1bmN0OiAnaW50ZXJuYWxTb3J0JywgcmVuZGVyVGltZTogMCB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCB0ZXN0QXJyYXkgPSB0aGlzLmFycmF5TW9kZWwuY3JlYXRlUmFuZG9tQXJyYXkodGVzdEFycmF5TGVuZ3RoKTtcclxuICAgICAgICB0ZXN0ZWRBbGdvcml0aG1zLmZvckVhY2goYWxnbyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXlNb2RlbC5zZXRBcnJheSh0ZXN0QXJyYXkpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5TW9kZWxbYWxnby5mdW5jdF0oKTtcclxuICAgICAgICAgICAgY29uc3QgZmluaXNoVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGFsZ28ucmVuZGVyVGltZSA9IGZpbmlzaFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1vZGVsLmlzVGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0ZXN0ZWRBbGdvcml0aG1zO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RzL01haW5Db250cm9sbGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==