import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightAside from '../Sidebar/RightAside';
import DetailsNews from './DetailsNews';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const newsData = useLoaderData();
    const {id} =useParams()
    
    const [news,setNews] =useState({});
    useEffect(()=>{
        const newsdetails = newsData.find(singleNews=>singleNews.id==id);
        setNews(newsdetails)
    },[newsData,id])
    
    
    return (
        <div>
            <header className='mt-5'>
                <Header></Header>
            </header>
           
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-10'>
                <section className='col-span-9'>
                    <h1 className='font-semibold'>Dragon News</h1>
                    <DetailsNews news={news}></DetailsNews>
                </section>
                
                    <aside className='col-span-3'>
                        <RightAside></RightAside>
                    </aside>
                
                
            </main>
        </div>
    );
};

export default NewsDetails;