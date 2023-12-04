import '../styles/Login.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';

const Login = ({login}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    let navigate = useNavigate();

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePWChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let response = login(email, password);

        if (response.success) {
            navigate('/');
        } else {
            setShowError(true);
        }
        console.log('validating login');
    }

    return (
        <>
            <div className="Login-Wrapper d-flex align-items-center justify-content-center w-100">
                <div className="Login rounded">
                    <h6 className="mb-3">Login to View Fan-Page</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="Login-Form-Group mb-2">
                            <label htmlFor="email" className="form-label">
                                Email Address:
                            </label>
                            <input
                                type="email"
                                className="form-control Login-Form-Input"
                                onChange={handleEmailChange}
                            ></input>
                        </div>
                        <div className="Login-Form-Group mb-2">
                            <label htmlFor="password" className="form-label">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="form-control Login-Form-Input"
                                onChange={handlePWChange}
                            ></input>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-dark block w-100 mt-2"
                        >
                            Submit
                        </button>
                    </form>
                    {showError ? (
                        <div style={{color: 'red'}}>Login failed</div>
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default Login;
