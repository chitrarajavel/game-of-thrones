import './App.css';
import RouteList from './routes/RouteList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from './modules/Api.js';
import {useEffect, useState} from 'react';
import UserContext from './auth/UserContext.js';

function App() {
    const api = new Api();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {}, []);

    /**
     * Sign up function to register user via Api module
     */

    function signup(userObj) {
        let validated = api.registerUser(userObj);

        if (!validated) return {success: false};

        setCurrentUser(userObj);
        return {success: true};
    }

    /**
     * Login function to get user via Api module
     */

    function login(email, password) {
        // get userObj from the API
        let userObj = api.getUser(email, password);

        if (!userObj) return {success: false};

        setCurrentUser(userObj);
        return {success: true};
    }

    /**
     * Logout function to reset currentUser
     */

    function logout() {
        setCurrentUser(null);
    }

    return (
        <div className="App">
            <UserContext.Provider value={currentUser}>
                <RouteList login={login} signup={signup} logout={logout} />
            </UserContext.Provider>
        </div>
    );
}
export default App;
