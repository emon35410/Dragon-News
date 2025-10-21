import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';



const DetailsNews = ({ news }) => {

    const {
        title,
        details,
        image_url,
    } = news;
   
    return (
        <div className='mr-5'>
            <div className="card w-full shadow-sm mt-5">
                <img  src={image_url} alt={title} className="my-5 mx-5" />
                <div className="p-5">
                    <h2 className="text-2xl font-bold mb-3">{title}</h2>
                    <p className="text-[#706F6F] my-5">{details}</p>
                </div>
            
                    <Link to={`/category/${news.category_id}`}  className='ml-5 w-3/4 md:w-1/3 mb-10 flex items-center gap-2 text-white px-5 py-2 bg-[#D72050]'><FaArrowLeft /> <span>All news in this category</span></Link>
                
            </div>
        </div>
    );
};

export default DetailsNews;
