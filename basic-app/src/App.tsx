// import react components
import React from 'react';
import { Route, Routes } from "react-router-dom";

// import custom components
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
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
