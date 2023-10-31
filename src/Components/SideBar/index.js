import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '20%', backgroundColor: '#f4f4f4', border: "1px solid red" }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
