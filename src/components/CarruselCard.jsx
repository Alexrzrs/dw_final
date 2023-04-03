import React, {useState} from "react";
import '@styles/CarruselCard.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CarruselCard = ({plataformas}) => {
    const [indice, setIndice] = useState(0);

    const next = () => {
        if (indice < plataformas.length - 1) {
            setIndice(indice + 1);
        } else {
            setIndice(0);
        }
    }

    const back = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        } else {
            setIndice(plataformas.length - 1);
        }
    }

    return (
        <div className="carrusel-card">
            <div className="carrusel-container">
                <FaArrowCircleLeft className="carrusel-control" onClick={back}/> 
                <div className="carrusel-info">
                    <img src={plataformas[indice].image} alt="" className="c-image"/>
                </div>
                <FaArrowCircleRight className="carrusel-control" onClick={next}/> 
            </div>
            <div className="carrusel-contador">
                {plataformas.map((e, index)=>{
                    if (index == indice ) {
                        return <div className="a-item"></div>
                    } else {
                        return <div className="i-item"></div>
                    }
                })}
            </div>
            <div className="carrusel-info">
                <h2 className="carrusel-subtitle">Descripcion</h2>
                <p>{plataformas[indice].description} </p>
                <h2 className="carrusel-subtitle">Precio</h2>
                <p>​{plataformas[indice].price} </p>
            </div>
        </div>
    );
}

export default CarruselCard;