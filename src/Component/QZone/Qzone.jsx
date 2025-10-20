import React from 'react';
import swimming from "../../assets/swimming.png"
import playground from "../../assets/playground.png"
import clas from "../../assets/class.png"
import bg from "../../assets/Interstellar 4K Cinematic Space and Black hole  Wallpaper.jfif"

const Qzone = () => {
    return (
        <>
            <div className='ml-4 bg-base-300 p-3'>
                <h1 className='font-bold'>Q-zone</h1>
                <div className='space-y-3.5'>
                    <img src={swimming} alt="" />
                    <img src={clas} alt="" />
                    <img src={playground} alt="" />
                </div>
            </div>
            <div className='ml-4'>
                <img className='rounded-2xl' src={bg} alt="" />
            </div>
        </>
    );
};

export default Qzone;