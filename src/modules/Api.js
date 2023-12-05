class Api {
    constructor() {
        this.localstorage = localStorage;
    }

    userExists(email) {
        return this.localstorage.getItem(email) ? true : false;
    }

    registerUser(user) {
        //already validating in formik
        if (!user.email) {
            return {success: false};
        }
        let strUser = JSON.stringify(user);
        this.localstorage.setItem(user.email, strUser);
        return {success: true};
    }
    getUser(email, password) {
        if (!email && !password) {
            return null;
        }

        let strUser = this.localstorage.getItem(email);
        let userObj = strUser ? JSON.parse(strUser) : null;
        return userObj && password === userObj.password ? userObj : null;
    }
    removeUser(user) {
        if (!user.email) {
            return;
        }
        this.localstorage.removeItem(user.email);
    }
}

export default Api;
