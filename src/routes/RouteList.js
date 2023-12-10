import React from 'react';
import {Navigate, BrowserRouter, Routes, Route} from 'react-router-dom';

import Signup from '../pages/Signup.js';
import Login from '../pages/Login.js';
import FrontPage from '../pages/FrontPage.js';
import Characters from '../pages/Characters.js';
import Books from '../pages/Books.js';
import Houses from '../pages/Houses.js';
import Navbar from './Navbar.js';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

const RouteList = ({login, signup, logout}) => {
    return (
        <div className="RouteList">
            <BrowserRouter>
                <Navbar logout={logout} />
                <Routes>
                    <Route exact path="/" element={<FrontPage />} />
                    <Route element={<PublicRoute />}>
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
                    </Route>

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
