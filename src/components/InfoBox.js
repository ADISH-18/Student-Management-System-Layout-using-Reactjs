import React, { useState, useEffect } from 'react';
import { FaUser, FaClipboardList, FaChartBar } from 'react-icons/fa';

const InfoBox = ({ title, icon, color, counter }) => {
    return (
        <div className="info-box" style={{ backgroundColor: color }}>
            <div className="info-content">
                <i>{icon}</i>
                <p>{title}</p>
                <h3>{counter}</h3>
            </div>
        </div>
    );
};

const DashboardInfoBoxes = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(prevCount => prevCount + Math.floor(Math.random() * 100) + 1);
    }, []);

    return (
        <div className="info-boxes">
            <InfoBox title="Regular Students" icon={<FaUser size={36} />} color="red" counter={count} />
            <InfoBox title="Remedial Students" icon={<FaClipboardList size={36} />} color="purple" counter={count} />
            <InfoBox title="In Paid Clubs" icon={<FaChartBar size={36} />} color="green" counter={count} />
            <InfoBox title="New Students" icon={<FaUser size={36} />} color="blue" counter={count + 1} />
        </div>
    );
};

export default DashboardInfoBoxes;
