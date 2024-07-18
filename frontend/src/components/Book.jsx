import React from 'react';
import List from "../list.json";
import Card from './Card';
import { Link } from "react-router-dom";

function Book() {
    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-16 px-4'>
                <div className='mt-16 text-center space-y-5'>
                    <h1 className='text-2xl font-semibold'>Explore Our Collection of Books</h1>
                    <p className='mt-5'>
                        Discover a wide range of books across various genres. From captivating stories to educational reads, explore our diverse collection and find your next favorite book.
                    </p>
                    <Link to="/">
                        <button className='bg-purple-600 px-4 py-2 text-white rounded-md mt-5'>
                            Back to Home
                        </button>
                    </Link>
                </div>

                {/* Render the cards here */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        List.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Book;
