import React, {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';

import UserContext from '../auth/UserContext.js';

function PrivateRoute() {
    const userObj = useContext(UserContext);

    if (!userObj) {
        return <Navigate to="/" />;
    }

    //return a route using the parameters passed in the function
    return <Outlet />;
}

export default PrivateRoute;
