import React from 'react';
import { FaUser, FaMoneyBillWave, FaCheck, FaClipboard, FaChartBar } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item">
                <i><FaUser size={36} /></i>
                <p>Student Management</p>
            </div>
            <div className="navbar-item">
                <i><FaMoneyBillWave size={36} /></i>
                <p>Financial Management</p>
            </div>
            <div className="navbar-item">
                <i><FaClipboard size={36} /></i>
                <p>Quality Control</p>
            </div>
            <div className="navbar-item">
                <i><FaChartBar size={36} /></i>
                <p>Report Delivery</p>
            </div>
            <div className="navbar-item">
                <i><FaCheck size={36} /></i>
                <p>Attendance</p>
            </div>
        </div>
    );
}

export default Navbar;
