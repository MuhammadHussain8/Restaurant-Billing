import React, { Children } from 'react';
import Header from '../Header';
import Sidebar from '../SideBar';
import "./layout.css"

const Layout = (Children) => {
    return (
        <div className='layout'>
            <div className='left-content'>
                <Sidebar />
            </div>
            <div className='right-content'>
                <Header />
                <div>
                    {
                        Children
                    }
                </div>
            </div>
        </div>
    );
};

export default Layout;
