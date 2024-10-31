import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://test-jokercrm.rteca.com/api/v1/register', {
                email,
                password,
            });

            alert("Kayıt başarılı! Giriş yapabilirsiniz.");
            navigate('/login');
        } catch (error) {
            console.error('Kayıt başarısız:', error);
            alert("Kayıt başarısız! Lütfen bilgilerinizi kontrol edin.");
        }
    };

    return (
        <div>
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    );
}

export default Register;
