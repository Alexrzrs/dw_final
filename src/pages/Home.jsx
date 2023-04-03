import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImage from "@assets/carousel1.jpg";
import coverImage2 from "@assets/carousel2.jpg";
import coverImage3 from "@assets/carousel3.jpg";
import "@styles/Home.scss";
import SubHeading from "@components/SubHeading";
import Carousel from "@components/Carousel";

const Home = () => {
    // arreglo de imagenes del carousel
    const images = [coverImage, coverImage2, coverImage3];

    // usamos el estado para llevar el conteo de las imagenes y cambiarlas por su index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigation = useNavigate();

    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Get Schwifty" />

                <h1 className="app__header-h1">
                    Viaja a dimensiones infinitas con Rick and Morty
                    <br />
                    <button
                        type="button"
                        className="custom__button"
                        onClick={() => navigation("/acerca_de")}
                    >
                        Conoce más
                    </button>
                </h1>
            </div>

            {/* Renderizado del carousel */}
            <Carousel
                images={images}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
            />

            {/* Muestra la imagen actual*/}
            <div className="app__wrapper_img">
                <img src={images[currentImageIndex]} alt="header_img" />
            </div>
        </div>
    );
};

export default Home;
