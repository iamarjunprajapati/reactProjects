import React, { useContext } from 'react'
import UserContext from './context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);
    return (
        <p>{user ? `Hello ${user}` : ""} </p>
    )
}

export default Profile