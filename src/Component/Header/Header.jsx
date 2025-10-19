import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-center flex-col items-center'>
                <img src={logo} alt="" />
                <p className='my-2 text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <p className='font-medium text-[#706F6F]'>{format(new Date(),"EEEE, LLLL dd, uuuu")}</p>
            </div>
        </div>
    );
};

export default Header;