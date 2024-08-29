import React from 'react';
import DashboardInfoBoxes from './InfoBox';
import { FaUser, FaClipboardList, FaChartBar, FaChalkboardTeacher, FaEnvelope, FaCheckSquare, FaClinicMedical } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Student Management</h2>
            <DashboardInfoBoxes />
            <div className="menu">
                <div className="menu-item">
                    <i><FaChalkboardTeacher size={48} /></i>
                    <p>Regular Enrollment</p>
                </div>
                <div className="menu-item">
                    <i><FaClipboardList size={48} /></i>
                    <p>Remedial Enrollment</p>
                </div>
                <div className="menu-item">
                    <i><FaChartBar size={48} /></i>
                    <p>Club Management</p>
                </div>
                <div className="menu-item">
                    <i><FaChalkboardTeacher size={48} /></i>
                    <p>Classroom Management</p>
                </div>
                <div className="menu-item">
                    <i><FaEnvelope size={48} /></i>
                    <p>SMS / EMAIL</p>
                </div>
                <div className="menu-item">
                    <i><FaCheckSquare size={48} /></i>
                    <p>Attendance</p>
                </div>
                <div className="menu-item">
                    <i><FaClinicMedical size={48} /></i>
                    <p>Clinic</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
