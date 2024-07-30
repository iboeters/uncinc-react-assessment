import React from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import '../App.css';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // call login of the AuthContext
        login(username, password);
    }

    const handleLogout = () => {
        // call logout of the AuthContext
        logout();
    }

    return (
        <div>
            {!isAuthenticated &&
                <div className="menu">
                    <TextField className="item"
                        helperText="Please enter your username" id="filled-basic" label="Username" variant="filled" required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField className="item"
                        helperText="Please enter your password" id="filled-basic" label="Password" variant="filled" type="password" required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin} variant="contained">
                        Log in
                    </Button>
                </div>
            }
            {isAuthenticated &&
                <div className="menu">
                    <Button onClick={handleLogout} variant="contained">
                        Log out
                    </Button>
                </div>
            }
        </div>
    );
};

export default LoginPage;
