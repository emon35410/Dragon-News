import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, Logout } = use(AuthContext)
    const handleLogout = () => {
        // alert("user trying to be logout")
        Logout()
            .then(() => {
                alert("Sign-out successful.") 
            }).catch((error) => {
                console.log(error)
            });
    }
    const links = <>
        <NavLink className="mr-3 text-[#706F6F]" to="/">Home</NavLink>
        <NavLink className="mr-3 text-[#706F6F]" to="/about">About</NavLink>
        <NavLink className=" text-[#706F6F]" to="/career">Career</NavLink>
    </>
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div>{links}</div>
            <div className='flex items-center  gap-2'>
                <img width={41} height={41} src={userimg} alt="" />
                {
                    user ? <button className='bg-[#403F3F] hover:cursor-pointer text-white px-5 py-1' onClick={handleLogout}>Log Out</button> : <Link to="/auth/login" className='bg-[#403F3F] hover:cursor-pointer text-white px-5 py-1'>Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;