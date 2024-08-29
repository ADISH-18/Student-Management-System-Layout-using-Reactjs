import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './components/styles.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Dashboard />
        </div>
    );
}

export default App;
