import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';

function Dashboard(){

    let user = useContext(UserContext);

    return(
        <div>
            <span>
                Hello {(user === null)? '' : user.displayName}!
            </span>
        </div>
    )
}

export default Dashboard;