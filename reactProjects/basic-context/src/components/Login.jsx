import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import 'tailwindcss/tailwind.css'; // Make sure to import Tailwind CSS
import Profile from './Profile';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const onSubmit = (e) => {
        e.preventDefault();
        setUser(username, password);
    };

    return (
        <>
            {/* <div className="flex justify-center items-center h-screen"> */}
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* <Profile /> */}
            {/* </div> */}
        </>
    );
}

export default Login;
