import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            });

            if (response.ok) {
                localStorage.removeItem('token');
                navigate('/login'); // Redirect using navigate
                window.location.reload(); // Reload page to update navbar state
            } else {
                console.error('Logout failed');
            }
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;