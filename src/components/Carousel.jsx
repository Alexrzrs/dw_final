import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@styles/Carousel.scss";

const Carousel = ({ images, setCurrentImageIndex }) => {
    // Ajustes del carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (newIndex) => setCurrentImageIndex(newIndex),
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`carousel-${index}`} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
