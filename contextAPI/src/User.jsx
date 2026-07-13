import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext';

function User() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const handleUser = (e) => {
        setUserName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);
    }
    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => { handleUser(e) }} />
            <br />
            <br />
            <input type="text" name="" id="" onChange={(e) => { handlePassword(e) }} />
            <br />
            <button onClick={(e) => handleSubmit(e)}>submit</button>
        </div>
    )
}

export default User