import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const JoinWithUs = () => {
    return (
        <div className=''>
            <div className="join join-vertical ml-3 w-full ">
                <button  className="btn bg-base-100 join-item justify-start hover:bg-[#8C8C8C]"><FaFacebook size={18} /> Facebook</button>
                <button className="btn bg-base-100 join-item justify-start hover:bg-[#8C8C8C]"><FaXTwitter />  X</button>
                <button className="btn bg-base-100 join-item justify-start hover:bg-[#8C8C8C]"><FaInstagram size={18} />  Instagram</button>
            </div>
        </div>
    );
};

export default JoinWithUs;