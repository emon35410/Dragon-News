import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const JoinWithUs = () => {
    return (
        <div className="w-full max-w-xs mx-auto"> {/* ensures it fits nicely */}
            <div className="join join-vertical w-full">
                <button className="btn w-full bg-base-100 join-item justify-start hover:bg-[#8C8C8C] flex items-center gap-2">
                    <FaFacebook /> Facebook
                </button>
                <button className="btn w-full bg-base-100 join-item justify-start hover:bg-[#8C8C8C] flex items-center gap-2">
                    <FaXTwitter /> X
                </button>
                <button className="btn w-full bg-base-100 join-item justify-start hover:bg-[#8C8C8C] flex items-center gap-2">
                    <FaInstagram /> Instagram
                </button>
            </div>
        </div>
    );
};

export default JoinWithUs;
