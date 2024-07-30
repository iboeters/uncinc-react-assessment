import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            toast.error('You must be logged in to access this page');
            navigate('/login');
        }
    }, [isAuthenticated, navigate]); // effect hook that will run when change in isAuthenticated or navigate

    return (
        <div>
            <h1>Welcome to the Dasboard Page!</h1>
            <p>This page is restricted to logged in users only.</p>
        </div>
    );
};

export default DashboardPage;
