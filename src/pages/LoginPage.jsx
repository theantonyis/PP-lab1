import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            const { data } = await login(credentials);
            localStorage.setItem('token', data.token);
            navigate('/items');
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default LoginPage;
