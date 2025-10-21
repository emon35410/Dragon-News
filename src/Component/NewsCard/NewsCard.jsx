import React from 'react';
import { FaShareAlt, FaBookmark, FaStar } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {id, title, author, details, thumbnail_url, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="card bg-base-100 shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <CiBookmark className="cursor-pointer hover:text-[text-bg-gray-500" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body px-4 pb-2">
        <h2 className="card-title text-lg font-bold leading-snug">
          {title}
        </h2>
        <p className="text-sm text-gray-600">
          {details.length > 180 ? details.slice(0, 180) + '...' : details}
          <Link to= {`/news-details/${id}`} className="text-primary font-semibold cursor-pointer ml-1">Read More</Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? 'text-warning' : 'text-gray-300'} />
          ))}
          <span className="text-gray-700 font-medium ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <AiOutlineEye className="text-lg" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
