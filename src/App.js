//TitanHacks 2020
import React from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import UserProvider from './Providers/UserProvider';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App(){
    return (
        <UserProvider>  
            <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Dashboard />
                </Route>
            </Switch>
           </Router>
        </UserProvider>
    );
}

export default App;
