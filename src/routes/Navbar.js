import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import UserContext from '../auth/UserContext.js';

import '../styles/Navbar.css';

const Navbar = ({logout}) => {
    const userObj = useContext(UserContext);
    console.log(userObj);

    let auth = userObj ? true : false;

    return (
        <nav className="Navbar">
            <div className="NavBar-Left-Container">
                <Link to="/" className="NavBar-HomePage">
                    GOT
                </Link>
            </div>
            <div className="NavBar-Right-Container">
                {!auth ? (
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
