import React, {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';

import AuthContext from '../auth/AuthContext.js';

function PublicRoute() {
    const [isAuthenticated] = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    //return a route using the parameters passed in the function
    return <Outlet />;
}

export default PublicRoute;
