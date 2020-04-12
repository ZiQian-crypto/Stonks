import React, { useContext } from 'react';
import '../Styles/Login.css';
import { signInWithGoogle, firestore } from '../Firebase';
import { UserContext } from '../Providers/UserProvider';

function Login(){
    let user = useContext(UserContext); 

    const handleLogin = () => {
        signInWithGoogle();
    }

    const printUser = () => {
        console.log(user);
    }

    return (
        <div className="login-wrapper">
            <div className="login-window">
                <div className="login-label">Email</div>
                <input className="login-detail" placeholder="Your email"/>
                <div className="login-label">Password</div>
                <input type="password" className="login-detail" placeholder="Your password"/>
                <div style={{margin: "5% 0 0 0"}}>
                    <button className="login-submit" onClick={printUser}>Login</button>
                </div>
                <div style={{margin: "5% 0 0 0"}}>
                    <button className="google-login-button" onClick={handleLogin}>Sign in with Google</button>
                </div>

            </div>
        </div>
    );
}

export default Login;