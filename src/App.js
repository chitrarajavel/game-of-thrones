import {useEffect, useState} from 'react';

import RouteList from './routes/RouteList.js';
import AuthContext from './auth/AuthContext.js';
import Api from './modules/Api.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const api = new Api();

    // useEffect(() => {}, []);

    /**
     * Sign up function to register user via Api module
     */

    function signup(userObj) {
        let response = api.registerUser(userObj);

        if (response.success) {
            setCurrentUser(userObj);
            setIsAuthenticated(true);
        }
    }

    /**
     * Login function to get user via Api module
     */

    function login(email, password) {
        // get userObj from the API
        let userObj = api.getUser(email, password);

        if (!userObj) return {success: false};

        setCurrentUser(userObj);
        setIsAuthenticated(true);
        return {success: true};
    }

    /**
     * Logout function to reset currentUser
     */

    function logout() {
        setCurrentUser(null);
        setIsAuthenticated(false);
    }

    return (
        <div className="App">
            <AuthContext.Provider value={[isAuthenticated, currentUser]}>
                <RouteList login={login} signup={signup} logout={logout} />
            </AuthContext.Provider>
        </div>
    );
}
export default App;