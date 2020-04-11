import React from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import UserProvider from './Providers/UserProvider';

function App(){
    return (
        <UserProvider>  
            <Login />
            <Dashboard />            
        </UserProvider>
    );
}

export default App;