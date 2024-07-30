import React, { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// the context values to be used
interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

// create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const cred_username = process.env.REACT_APP_USERNAME;
    const cred_password = process.env.REACT_APP_PASSWORD;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = process.env.REACT_APP_TOKEN as string;

    const login = async (username: string, password: string) => {
        console.log("authContext login called");
        if (username === cred_username && password === cred_password) {
            // normally get token from the backend
            Cookies.set('authToken', token, { expires: 1 });
            setIsAuthenticated(true);
            toast.success('Login successful');
        }
        else {
            toast.error('Login credentials invalid');
            // stay on login page
        }
    }

    const logout = () => {
        Cookies.remove('authToken');
        setIsAuthenticated(false);
        toast.success('Logout successful');
    }

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []); // effect hook will run on initial mount and unmount

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// hook to use AutContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth not used within an AuthProvider');
    }
    return context;
};
