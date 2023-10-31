import React from 'react';
import Header from '../Header';
import "./layout.css"

const Layout = () => {
    return (
        <div className='layout'>
            <div className='left-content'></div>
            <div className='right-content'>
                <Header />
            </div>
        </div>
    );
};

export default Layout;
