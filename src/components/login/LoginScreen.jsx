import React from 'react'
import { useNavigate } from 'react-router-dom';

// export const LoginScreen = ({ history }) => {    } // version anterior donde 'history' se recibia por las props

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        //history.replace('/');
        navigate('/marvel', {
            replace: true // reemplazar la entrada del 'history'
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
