import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    const links = <>
        <NavLink className="mr-3 text-[#706F6F]" to="/">Home</NavLink>
        <NavLink className="mr-3 text-[#706F6F]" to="/about">About</NavLink>
        <NavLink className=" text-[#706F6F]" to="/career">Career</NavLink>
    </>
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div>{links}</div>
            <div className='flex items-center  gap-2'>
                <img width={41} height={41} src={user} alt="" />
                <button className='bg-[#403F3F] hover:cursor-pointer text-white px-5 py-1'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;