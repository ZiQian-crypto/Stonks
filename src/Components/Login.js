import React, { useContext } from 'react';
import '../Styles/Login.css';

function Login(){
    
    const handleLogin = () => {
        alert("Feature not implemented yet!")
    }
    return (
        <div className="login-wrapper">
            <div className="login-window">
                <div className="login-label">Email</div>
                <input className="login-detail" placeholder="Your email"/>
                <div className="login-label">Password</div>
                <input type="password" className="login-detail" placeholder="Your password"/>
                <div style={{margin: "5% 0 0 0"}}>
                    <button className="login-submit" onClick={handleLogin}>Login</button>
                </div>
                <div style={{margin: "5% 0 0 0"}}>
                    <button className="google-login-button" onClick={handleLogin}>Sign in with Google</button>
                </div>

            </div>
        </div>
    );
}

export default Login;