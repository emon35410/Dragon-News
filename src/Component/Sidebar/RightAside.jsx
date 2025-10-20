import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import JoinWithUs from '../JoinWithUS/JoinWithUs';
import Qzone from '../QZone/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <JoinWithUs></JoinWithUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;