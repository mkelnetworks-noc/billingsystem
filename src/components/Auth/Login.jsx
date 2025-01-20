import React, { useState } from 'react';
import Modal from '../utility/ModalAuth';
import axios from 'axios';

const LoginModal = ({ onClose, onSwitchToRegister, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        keepmeloggedin: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log('Login successful:', response.data);
            alert('Login successful!');
            onLoginSuccess(); // Call the redirection callback on success
        } catch (err) {
            console.error(err.response.data.message);
            alert(err.response.data.message || 'Login failed');
        }
    };

    return (
        <Modal title="Login" onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        name="keepmeloggedin"
                        checked={formData.keepmeloggedin}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label className="text-gray-700">Keep me logged in</label>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-skyBlue text-white font-semibold rounded-lg hover:bg-sky-600"
                >
                    Login
                </button>
            </form>
            <p className="text-center text-gray-500 mt-4">
                Don’t have an account?{' '}
                <span
                    onClick={onSwitchToRegister}
                    className="text-skyBlue cursor-pointer hover:underline"
                >
                    Register
                </span>
            </p>
        </Modal>
    );
};

export default LoginModal;
