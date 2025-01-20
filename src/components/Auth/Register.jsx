import React, { useState } from 'react';
import Modal from '../utility/ModalAuth';
import axios from 'axios';

const RegisterModal = ({ onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, surname, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', {
                username: `${name} ${surname}`, // Combine name and surname
                password,
                email,
            });
            console.log('Registration successful:', response.data);
            alert('Registration successful!');
            onSwitchToLogin(); // Switch to login modal
        } catch (err) {
            console.error(err.response.data.message);
            alert(err.response.data.message || 'Registration failed');
        }
    };

    return (
        <Modal title="Register" onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Surname</label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Surname"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
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
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-skyBlue text-white font-semibold rounded-lg hover:bg-sky-600"
                >
                    Register
                </button>
            </form>
            <p className="text-center text-gray-500 mt-4">
                Already have an account?{' '}
                <span
                    onClick={onSwitchToLogin}
                    className="text-skyBlue cursor-pointer hover:underline"
                >
                    Login
                </span>
            </p>
        </Modal>
    );
};

export default RegisterModal;
