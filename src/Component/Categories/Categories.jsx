import React, { use } from 'react';
import { NavLink } from 'react-router';
import "./Category.css"

 const categoryPromise = fetch("/categories.json")
    .then((res)=>res.json())
    
const Categories = () => {
    const categories = use(categoryPromise)
    
    return (
        <div>
           <h1 className='font-bold'>All Category({categories.length})</h1>
           <div className='grid grid-cols-1 mt-4 gap-5'>
            {
                categories.map(category=><NavLink className={"hover:cursor-pointer hover:bg-[#e7e7e7] btn w-2/3 font-semibold text-[#505050] border-0 "} 
                    key={category.id}
                    to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;