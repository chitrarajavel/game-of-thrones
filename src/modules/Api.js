class Api {
    constructor() {
        // localstorage reference key
        this.databaseKey = 'GoT_DB';
        this.localstorage = localStorage;
        // [{firstName:"", lastName:"", email:"", password: "", favorites: {books:[], characters: [], houses:[]}}]
        this.database = {users: []};
        this.loadDatabase();
    }

    /**
     * Save database object {key = databaseKey, value = database }
     */

    saveDatabase() {
        this.localstorage.setItem(
            this.databaseKey,
            JSON.stringify(this.database)
        );
    }

    /**
     * Load database object and set it to this.database
     */

    loadDatabase() {
        let db = this.localstorage.getItem(this.databaseKey);
        if (db) {
            this.database = JSON.parse(db);
        }
    }

    /**
     *  Returns a boolean to validate if the email exists on the signup form
     */

    userExists(email) {
        let dbUsers = this.database.users;
        let filteredArr = dbUsers.filter(user => email === user.email);
        return filteredArr.length !== 0;
    }

    /**
     *  Save userobj from signup data to the database
     */

    registerUser(user) {
        let dbUsers = this.database.users;
        if (this.userExists(user.email)) return {success: false};
        dbUsers.push(user);
        this.saveDatabase();
        return {success: true};
    }

    /**
     * Get user from database for login information
     */

    getUser(email, password) {
        if (!email && !password) {
            return null;
        }
        let dbUsers = this.database.users;
        let filteredArr = dbUsers.filter(
            user => user.email === email && user.password === password
        );
        return filteredArr.length !== 0 ? filteredArr[0] : null;
    }

    /**
     *
     */

    removeUser(user) {
        if (!user.email) {
            return;
        }
        this.localstorage.removeItem(user.email);
    }
}

export default Api;
