// import react components
import React from 'react';
import { Route, Routes } from "react-router-dom";

// import custom components
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
