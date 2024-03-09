// Profile.jsx

import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    console.log(user, "user")

    return (
        <div style={{ position: 'relative', top: '26%', right: '16%' }}>
            {user ? (
                <div style={{ color: 'green' }}>Welcome {user}</div>
            ) : (
                <div style={{ color: 'red' }}>Please Login!</div>
            )}
        </div>
    );
}

export default Profile;
