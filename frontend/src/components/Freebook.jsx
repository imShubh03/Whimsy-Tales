import React from 'react';
import List from "../../src/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Freebook() {
    // Filter books with category 'Free'
    const freeData = List.filter((data) => data.category === "Free");

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-16 px-4'>
                <div>
                    <h1 className='font-semibold text-lg'>Explore Our Free Children's Books</h1>
                    <p>Discover a selection of engaging and interactive books available at no cost. Perfect for young readers to explore new adventures and learning experiences!</p>
                </div>

                {/* Slider */}
                <div className='slider-container'>
                    <Slider {...settings}>
                        {
                            freeData.map((item) => (
                                <Card item={item} key={item.id} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
