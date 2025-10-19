import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-[#F3F3F3] p-3'>
            <p className='text-white bg-[#D72050] px-3 py-2'>Latest</p>
            <Marquee className='flex gap-4' speed={60} pauseOnHover={true}>
                <p className='text-[#403F3F] font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum atque rem corrupti exercitationem ipsa et quas similique?</p>
                 <p className='text-[#403F3F] font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum atque rem corrupti exercitationem ipsa et quas similique?</p>
                  <p className='text-[#403F3F] font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum atque rem corrupti exercitationem ipsa et quas similique?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;