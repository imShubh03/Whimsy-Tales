import React from "react";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <>
            <div className="max-w-screen-xl container mx-auto md:px-16 px-4 flex flex-col md:flex-row my-4">
                <div className="w-full md:w-1/2 mt-8 md:mt-20 order-2 md:order-1">
                    <div className="space-y-8">
                        <h1 className="text-2xl font-bold">
                            Dive into Interactive Adventures with Our Children's Books!
                        </h1>
                        <p className="text-lg">
                            Discover a world of fun and learning with our interactive children's books. Each story is designed to engage young minds with captivating illustrations, interactive elements, and memorable adventures. Find the perfect book to inspire your child's imagination and foster a love for reading.
                        </p>

                        {/* email */}
                        <label className="input input-bordered flex items-center gap-2 dark:bg-slate-800 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                                />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                                />
                            </svg>
                            <input type="text" className="grow" placeholder="Subscribe for Updates" />
                        </label>

                        {/* button */}
                        <Link to="/books" className="btn btn-primary">
                            Explore Books
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 mt-16 md:mt-5 dark:bg-slate-800 dark:text-white">
                    <img
                        src="https://www.maplepress.co.in/cdn/shop/products/PHOTO-2021-08-24-15-47-30_1024x1023.jpg?v=1630151227"
                        alt="interactive books"
                        className="w-80 h-80 md:ml-20 md:mt-20 rounded-md ml-3"
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
