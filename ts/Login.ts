import EventBus from './EventBus';

export default class Login extends EventBus {
    private db: Database = window.openDatabase('itemDB', '1.0', 'itemDB', 65535);

    private createBtn: HTMLElement | null = document.getElementById('create');
    private removeBtn: HTMLElement | null = document.getElementById('remove');
    private loginBtn: HTMLElement | null = document.getElementById('login_btn');
    private listBtn: HTMLElement | null = document.getElementById('show');
    private usernameField: any = document.getElementById('username');
    private passwordField: any = document.getElementById('password');
    private isAdminField: any = document.getElementById('admin');
    private messagesField: HTMLElement | null = document.querySelector('.messages');
    private adminContainer: HTMLElement | null = document.querySelector('.admin-container');
    private table: HTMLElement | null = document.querySelector('.table_users');

    private isAdminLogged = false;
    private isGuestLogged = true;
    private isAdmin = false;

    constructor() {
        super();
        let th = this;
        if (this.createBtn) this.createBtn.addEventListener('click', th.onCreateTable.bind(th));
        if (this.removeBtn) this.removeBtn.addEventListener('click', th.onDeleteTable.bind(th));
        if (this.loginBtn) this.loginBtn.addEventListener('click', th.onLogin.bind(th));
        if (this.listBtn) this.listBtn.addEventListener('click', th.onShowUsersList.bind(th));
        if (this.isAdminField) this.isAdminField.checked = false;
        if (this.adminContainer) this.adminContainer.hidden = true;
        this.showInfo('Please, login first');
    }

    onLogin() {
        if (this.usernameField && !this.usernameField.value) {
            this.showInfo('Please, enter your login');
            return;
        }
        this.loginUser();
    }

    addUser(username: string, password: string, isAdmin: string, isGuest: string) {
        this.db.transaction(transaction => {
            const sql = 'INSERT INTO users (username, password, timestamp, isAdmin, isGuest) VALUES(?,?,?,?,?)';
            transaction.executeSql(
                sql,
                [username, password, new Date(), isAdmin, isGuest],
                () => {
                    this.showInfo('New item has added successfully');
                },
                (transaction: SQLTransaction, error: SQLError) => {
                    this.showInfo(`<ADD> ${error.message}`);
                    return false;
                }
            );
        });
    }

    loginUser() {
        let username: string;
        let password: string;

        if (this.usernameField) username = this.usernameField.value;
        if (this.passwordField) password = this.passwordField.value;

        this.db.transaction(transaction => {
            const sql = 'SELECT * FROM users WHERE username=?';
            transaction.executeSql(
                sql,
                [username],
                (transaction: SQLTransaction, result: SQLResultSet) => {
                    if (result.rows.length) {
                        for (let i = 0; i < result.rows.length; i++) {
                            let user = result.rows.item(i);
                            if (user.password === password) {
                                this.isGuestLogged = password === '';
                                this.updateUserTime();
                                this.emitEvent('logged', {username});
                                if (user.isAdmin === 'true') {
                                    if (this.adminContainer) this.adminContainer.hidden = false;
                                    this.isAdminLogged = true;
                                } else {
                                    if (this.isAdminField) this.isAdminField.checked = false;
                                    if (this.adminContainer) this.adminContainer.hidden = true;
                                    this.isAdminLogged = false;
                                }
                            } else this.showInfo('User is present or password is incorrect');
                        }
                    } else {
                        if (password === '') {
                            this.isAdmin = false;
                            this.isAdminLogged = false;
                            this.isGuestLogged = true;
                            if (this.isAdminField) this.isAdminField.checked = false;
                            if (this.adminContainer) this.adminContainer.hidden = true;
                        } else if (this.isAdminField) {
                            this.isAdmin = this.isAdminField.checked;
                            this.isAdminLogged = this.isAdminField.checked;
                            if (this.adminContainer) this.adminContainer.hidden = !this.isAdminField.checked;
                            this.isGuestLogged = false;
                            this.isAdminField.checked = false;
                        }

                        this.addUser(username, password, this.isAdmin.toString(), `${password === ''}`);
                        this.emitEvent('logged', {username});
                    }
                },
                (transaction: SQLTransaction, error: SQLError) => {
                    this.showInfo(`<CHECK> ${error.message}`);
                    return false;
                }
            );
        });
    }

    updateUserTime() {
        let username: string;
        if (this.usernameField) username = this.usernameField.value;
        this.db.transaction(transaction => {
            const sql = `UPDATE users SET timestamp=? WHERE username=?`;
            transaction.executeSql(
                sql,
                [new Date(), username],
                (transaction: SQLTransaction, result: SQLResultSet) => {
                    this.showInfo(`User ${username} is logged in`);
                },
                (transaction: SQLTransaction, error: SQLError) => {
                    this.showInfo(`<UPDATE> ${error.message}`);
                    return false;
                }
            );
        });
    }

    onShowUsersList() {
        if (this.table) this.table.innerHTML = '';
        let fieldsToShow = 'id, username, timestamp';
        if (this.isAdminLogged) fieldsToShow = '*';
        if (this.isGuestLogged) fieldsToShow = 'id, username';

        this.db.transaction(transaction => {
            const sql = `SELECT ${fieldsToShow} FROM users ORDER BY id`;
            transaction.executeSql(
                sql,
                undefined,
                (transaction, result) => {
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

                        if (this.table) this.table.innerHTML = tableText;
                    } else if (this.table) {
                        this.table.innerHTML = `<tr><td colspan="3" align="center">No Items Found</td></tr>`;
                    }
                },
                (transaction: SQLTransaction, error: SQLError) => {
                    console.log(error.message);
                    return false;
                }
            );
        });
    }

    showInfo(text: string) {
        console.log(text);
        if (this.messagesField) this.messagesField.innerHTML = text;
    }

    onCreateTable() {
        this.db.transaction(transaction => {
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
                    return false;
                }
            );
        });

        this.addUser('admin', 'admin', 'true', 'false');
    }

    onDeleteTable() {
        if (!confirm('Are You Sure?')) return;

        this.db.transaction(transaction => {
            let sql = 'DROP TABLE users ';
            transaction.executeSql(
                sql,
                undefined,
                () => {
                    this.showInfo('Table deleted successfully');
                },
                () => {
                    this.showInfo('Error occured while deleting');
                    return false;
                }
            );
        });
    }
}
