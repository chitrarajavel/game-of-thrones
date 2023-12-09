class Api {
    constructor() {
        // localstorage reference key
        this.databaseKey = 'GoT_DB';
        this.localstorage = localStorage;
        // [{firstName:"", lastName:"", email:"", password: "", favorites: {books:[], characters: [], houses:[]}}]
        this.database = {users: []};
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
     *  returns a boolean to validate if the email exists on the signup form
     */

    userExists(email) {
        let dbUsers = this.database.users;
        let filteredArr = dbUsers.filter(user =>
            email === user.email ? true : false
        );
        return filteredArr.length !== 0;
    }

    /**
     *
     */

    registerUser(user) {
        let dbUsers = this.database.users;
        if (this.userExists(user.email)) return {success: false};
        dbUsers.push(user);
        this.saveDatabase();
        return {success: true};
    }

    // registerUser(user) {
    //     //already validating in formik
    //     if (!user.email) {
    //         return {success: false};
    //     }
    //     let strUser = JSON.stringify(user);
    //     this.localstorage.setItem(user.email, strUser);
    //     return {success: true};
    // }

    /**
     *
     */

    getUser(email, password) {
        if (!email && !password) {
            return null;
        }

        let strUser = this.localstorage.getItem(email);
        let userObj = strUser ? JSON.parse(strUser) : null;
        return userObj && password === userObj.password ? userObj : null;
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
