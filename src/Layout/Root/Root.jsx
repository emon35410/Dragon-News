import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/Header/Header';
import LatestNews from '../../Component/LatestNews/LatestNews';
import Navbar from '../../Component/Navbar/Navbar';
import LeftAside from '../../Component/Sidebar/LeftAside';
import RightAside from '../../Component/Sidebar/RightAside';

const Root = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='md:w-11/12 md:mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='md:w-11/12 md:mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            
            <main className='md:w-11/12 md:mx-auto grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main md:mr-3 col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default Root;