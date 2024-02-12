import React from 'react'
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Faria",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        name: "Nabila",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://st4.depositphotos.com/12982378/30287/i/450/depositphotos_302876834-stock-photo-beautiful-smiling-girl-isolated-pink.jpg",
    },
    {
        id: 3,
        name: "Mohona",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwXikbG3pwNG9UT2ZK19wSo7uKLp6N8czQEMrU-NwBvP-PrvAfiMJ0ovZ76_YjXYnwWc&usqp=CAU",
    },
    {
        id: 5,
        name: "Suchi",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://img.freepik.com/free-photo/beautiful-female-model-smiling-pleased-showing-okay-zero-sign-complimenting-praising-you-standing-beige-background_1258-86850.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705363200&semt=ais",
    },
];

function Testimonials() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        What our customers are saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>

                {/* Testimonial cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className="my-6">
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    <div className="mb-4">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full w-20 h-20 object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-light">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials