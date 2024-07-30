import React from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import '../App.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleAuth = (username: string, password: string) => {
        console.log("handleAuth called");
    }

    const handleLogin = () => {
        console.log("handleLogin called");
        console.log(username);
        console.log(password);
        handleAuth(username, password);
    }

    return (
        <div className="menu">
            <TextField className="item"
                helperText="Please enter your username" id="filled-basic" label="Username" variant="filled" required
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField className="item"
                helperText="Please enter your password" id="filled-basic" label="Password" variant="filled" required
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} variant="contained">
                Log in
            </Button>
        </div>
    );
};

export default LoginPage;
