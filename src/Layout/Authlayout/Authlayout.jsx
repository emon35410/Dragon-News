import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div className='min-h-screen bg-base-200'>
            <header className='w-11/12 mx-auto py-3 '>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default Authlayout;