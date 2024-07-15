import React from 'react'
import List from "../../src/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';



function Freebook() {
    const freeData = List.filter((data) => data.category === "Free")

    var settings = {
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
            <div className=' max-w-screen-xl container mx-auto md:px-16 px-4'>
                <div>
                    <h1 className=' font-semibold text-lg'>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias aliquam ex asperiores, explicabo facere nemo iste esse ipsum saepe!</p>
                </div>

                {/* slider */}
                <div className=' slider-container' >
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
    )
}

export default Freebook