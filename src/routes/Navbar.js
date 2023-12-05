import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import AuthContext from '../auth/AuthContext.js';

import '../styles/Navbar.css';

const Navbar = ({logout}) => {
    const [isAuthenticated] = useContext(AuthContext);

    return (
        <nav className="Navbar">
            <div className="NavBar-Left-Container">
                <Link to="/" className="NavBar-HomePage">
                    GOT
                </Link>
            </div>
            <div className="NavBar-Right-Container">
                {!isAuthenticated ? (
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link to="/books">Books</Link>
                        </li>
                        <li>
                            <Link to="/houses">Houses</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={logout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};
export default Navbar;
