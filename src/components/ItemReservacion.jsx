import React, { useContext } from 'react';
import "@styles/ItemReservacion.scss";
import { FaTimesCircle } from 'react-icons/fa';
import AppContext from "@context/AppContext";

const ItemReservacion = ({data, index}) => {
    const { states, deleteReservation } = useContext(AppContext);

    const handleCLickDelete = (indexItem) => {
        deleteReservation(indexItem);
    }
    return (
        <div className="reservation-card">
            <div className="reservation-global">
                <div className="container-reservation-image">
                    <img className="reservation-image" src={data.image} />
                </div>
                <div className="reservation-items">
                    <p className="character-name">{data.name}</p>
                    <p className="character-name">1</p>
                    <p className="character-name">${states.generalPrice}</p>

                </div> 
            </div>
               
            <div className="reservation-actions">
                <FaTimesCircle 
                    className="icon-delete-reservation" 
                    title="Eliminar reservación"
                    onClick={() => handleCLickDelete(index)}
                />
            </div>
        </div>
    );
}

export default ItemReservacion;