import React from "react";

const Home = () => {
    const newsList = [
        {
            id: 1,
            category: "Sports",
            title: "Manchester United's Maguire Heads Late Winner Over Liverpool",
            author: "Reuters",
            views: 12000,
            img: "https://pictures.tribuna.com/image/2efc6361-6cef-4747-91a0-e6a67036dd11?width=1920&quality=70",
        },
        {
            id: 2,
            category: "International",
            title: "Global Leaders Meet to Discuss Climate Change Solutions",
            author: "Global News",
            views: 8000,
            img: "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/1594844799.1872.png",
        },
        {
            id: 3,
            category: "Lionel Messi & Barcelona",
            title: "Lionel Messi Sends Message to Barcelona on Anniversary of His Debut",
            author: "Barça Blaugranes",
            views: 15000,
            img: "https://platform.barcablaugranes.com/wp-content/uploads/sites/21/2025/10/gettyimages-56058006.jpg?quality=90&strip=all&crop=0%2C5.4966887417218%2C100%2C89.006622516556&w=1080",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>

            <div className="grid grid-cols-1 gap-6">
                {newsList.map((news) => (
                    <div
                        key={news.id}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                    >
                        <img
                            src={news.img}
                            alt={news.title}
                            className="md:w-full w-[350] h-64 md:object-cover "
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">{news.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                By {news.author} • {news.views} views
                            </p>
                            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
