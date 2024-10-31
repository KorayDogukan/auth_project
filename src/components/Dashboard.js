import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/login');
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Hoş geldiniz!</p>
            <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
    );
}

export default Dashboard;
