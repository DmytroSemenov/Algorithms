const db = openDatabase('itemDB', '1.0', 'itemDB', 65535);

class Login {
    createBtn = document.getElementById('create');
    removeBtn = document.getElementById('remove');
    loginBtn = document.getElementById('login_btn');
    listBtn = document.getElementById('show');
    usernameField = document.getElementById('username');
    passwordField = document.getElementById('password');
    isAdminField = document.getElementById('admin');
    messagesField = document.querySelector('.messages');
    adminContainer = document.querySelector('.admin-container');
    table = document.querySelector('.table_users');

    isAdminLogged = false;
    isGuestLogged = true;
    isAdmin = false;

    initLoginPage() {
        let th = this;
        this.createBtn.addEventListener('click', th.onCreateTable.bind(th));
        this.removeBtn.addEventListener('click', th.onDeleteTable.bind(th));
        this.loginBtn.addEventListener('click', th.onLogin.bind(th));
        this.listBtn.addEventListener('click', th.onShowUsersList.bind(th));
        this.isAdminField.checked = false;
        this.adminContainer.hidden = true;
    }

    onLogin() {
        if (!this.usernameField.value) {
            this.showInfo('Please, enter your login');
            return;
        }
        this.loginUser();
    }

    addUser(username, password, isAdmin, isGuest) {
        db.transaction(transaction => {
            const sql = 'INSERT INTO users (username, password, timestamp, isAdmin, isGuest) VALUES(?,?,?,?,?)';
            transaction.executeSql(
                sql,
                [username, password, new Date(), isAdmin, isGuest],
                () => {
                    this.showInfo('New item has added successfully');
                },
                (transaction, error) => {
                    this.showInfo(`<ADD> ${error.message}`);
                }
            );
        });
    }

    loginUser() {
        db.transaction(transaction => {
            const sql = 'SELECT * FROM users WHERE username=?';
            transaction.executeSql(
                sql,
                [this.usernameField.value],
                (transaction, result) => {
                    if (result.rows.length) {
                        for (let i = 0; i < result.rows.length; i++) {
                            let user = result.rows[i];
                            if (user.password === this.passwordField.value) {
                                this.isGuestLogged = this.passwordField.value === '';
                                this.updateUserTime();
                                if (user.isAdmin === 'true') {
                                    this.adminContainer.hidden = false;
                                    this.isAdminLogged = true;
                                } else {
                                    this.isAdminField.checked = false;
                                    this.adminContainer.hidden = true;
                                    this.isAdminLogged = false;
                                }
                            } else this.showInfo('User is present or password is incorrect');
                        }
                    } else {
                        if (this.passwordField.value === '') {
                            this.isAdmin = false;
                            this.isAdminLogged = false;
                            this.isGuestLogged = true;
                            this.isAdminField.checked = false;
                            this.adminContainer.hidden = true;
                        } else {
                            this.isAdmin = this.isAdminField.checked;
                            this.isAdminLogged = this.isAdminField.checked;
                            this.adminContainer.hidden = !this.isAdminField.checked;
                            this.isGuestLogged = false;
                            this.isAdminField.checked = false;
                        }

                        this.addUser(
                            this.usernameField.value,
                            this.passwordField.value,
                            this.isAdmin,
                            this.passwordField.value === ''
                        );
                    }
                },
                (transaction, error) => {
                    this.showInfo(`<CHECK> ${error.message}`);
                }
            );
        });
    }

    updateUserTime() {
        db.transaction(transaction => {
            const sql = `UPDATE users SET timestamp=? WHERE username=?`;
            transaction.executeSql(
                sql,
                [new Date(), this.usernameField.value],
                (transaction, result) => {
                    this.showInfo(`User ${this.usernameField.value} is logged in`);
                },
                (transaction, error) => {
                    this.showInfo(`<UPDATE> ${error.message}`);
                }
            );
        });
    }

    onShowUsersList() {
        this.table.innerHTML = '';
        let fieldsToShow = 'id, username, timestamp';
        if (this.isAdminLogged) fieldsToShow = '*';
        if (this.isGuestLogged) fieldsToShow = 'id, username';

        db.transaction(transaction => {
            const sql = `SELECT ${fieldsToShow} FROM users ORDER BY id`;
            transaction.executeSql(
                sql,
                undefined,
                (transaction, result) => {
                    if (result.rows.length) {
                        let tableText = `<tr>`;
                        for (const key in result.rows[0]) {
                            tableText += `<td>${key}</td>`;
                        }

                        tableText += `</tr>`;

                        for (let i = 0; i < result.rows.length; i++) {
                            let row = result.rows[i];

                            tableText += `<tr>`;
                            for (const key in result.rows[i]) {
                                tableText += `<td>${row[key]}</td>`;
                            }

                            tableText += `</tr>`;
                        }

                        this.table.innerHTML = tableText;
                    } else {
                        this.table.innerHTML = `<tr><td colspan="3" align="center">No Items Found</td></tr>`;
                    }
                },
                (transaction, error) => {
                    console.log(error.message);
                }
            );
        });
    }

    showInfo(text) {
        console.log(text);
        this.messagesField.innerHTML = text;
    }

    onCreateTable() {
        db.transaction(transaction => {
            const sql =
                'CREATE TABLE users ' +
                '(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,' +
                'username VARCHAR(100) NOT NULL,' +
                'password VARCHAR(10) NOT NULL,' +
                'isAdmin VARCHAR(5) NOT NULL,' +
                'isGuest VARCHAR(5) NOT NULL,' +
                'timestamp VARCHAR(10) NOT NULL)';
            transaction.executeSql(
                sql,
                undefined,
                () => {
                    this.showInfo('Table created successfully');
                },
                () => {
                    this.showInfo('Table has already been created');
                }
            );
        });

        this.addUser('admin', 'admin', 'true', 'false');
    }

    onDeleteTable() {
        if (!confirm('Are You Sure?', '')) return;

        db.transaction(transaction => {
            let sql = 'DROP TABLE users ';
            transaction.executeSql(
                sql,
                undefined,
                () => {
                    this.showInfo('Table deleted successfully');
                },
                () => {
                    this.showInfo('Error occured while deleting');
                }
            );
        });
    }
}

window.addEventListener('load', () => {
    const log = new Login();
    log.initLoginPage();
});
