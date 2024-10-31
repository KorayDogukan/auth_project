import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://test-jokercrm.rteca.com/api/v1/login', {
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/json' },
            });

            const token = response.data.token;
            localStorage.setItem('token', token); 
            navigate('/dashboard');
        } catch (error) {
            console.error('Giriş başarısız:', error);
        }
    };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <h2>Giriş Yap</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Giriş Yap</button>
            </form>
            <p>Hesabınız yok mu? <button onClick={goToRegister}>Kayıt Ol</button></p>
        </div>
    );
}

export default Login;
