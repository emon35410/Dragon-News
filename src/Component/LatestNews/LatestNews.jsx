import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-[#F3F3F3] p-3'>
            <p className='text-white bg-[#D72050] px-3 py-2'>Latest</p>
            <Marquee className='flex gap-6' speed={60} pauseOnHover={true}>
                <p className='text-[#403F3F] font-bold'>
                    🏏 Bangladesh beats Sri Lanka by 5 wickets in thrilling ODI series decider!
                </p>
                <p className='text-[#403F3F] font-bold'>
                    ⚽ Lionel Messi scores a stunning hat-trick as Inter Miami reach MLS final.
                </p>
                <p className='text-[#403F3F] font-bold'>
                    🔵🔴 Barcelona crush Real Madrid 4–1 in El Clásico — Pedri and Gavi shine bright!
                </p>
                <p className='text-[#403F3F] font-bold'>
                    🇦🇷 Argentina defeat Brazil 2–0 in Copa América final — Messi lifts another trophy!
                </p>
                <p className='text-[#403F3F] font-bold'>
                    🥇 Paris Olympics 2024: Team Argentina wins gold in football after dramatic penalty shootout!
                </p>
            </Marquee>

        </div>
    );
};

export default LatestNews;