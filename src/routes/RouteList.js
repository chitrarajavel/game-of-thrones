// import '../styles/RouteList.css';
import React from 'react';
import {Navigate, BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import FrontPage from '../pages/FrontPage';
import Characters from '../pages/Characters';
import Books from '../pages/Books';
import Houses from '../pages/Houses';
import Navbar from './Navbar.js';
import PrivateRoute from './PrivateRoute.js';

const RouteList = ({login, signup, logout}) => {
    return (
        <div className="RouteList">
            <BrowserRouter>
                <Navbar logout={logout} />
                <Routes>
                    <Route exact path="/" element={<FrontPage />} />

                    <Route
                        exact
                        path="/login"
                        element={<Login login={login} />}
                    />
                    <Route
                        exact
                        path="/signup"
                        element={<Signup signup={signup} />}
                    />

                    <Route element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/characters"
                            element={<Characters />}
                        />
                        <Route exact path="/books" element={<Books />} />
                        <Route exact path="/houses" element={<Houses />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default RouteList;
