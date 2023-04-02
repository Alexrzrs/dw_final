import React, { useContext } from 'react';
import "@styles/Reservaciones.scss";
import ItemReservacion from '@components/ItemReservacion';
import ResumenReservacion from '@components/ResumenReservacion';
import AppContext from "@context/AppContext";

const Reservaciones = () => {
    const {states} = useContext(AppContext);
    console.log(states);
    return (
        <div className="reservation-container">
            <div className="reservation-data">
                <div className="reservation-blank">&nbsp;</div>
                <div className="reservation-info">
                    <div className="reservation-header">
                        <div className="reservation-title">
                            Mis reservaciones
                        </div>
                        <div className="header-info-table">
                            <p className="space-blank">&nbsp;</p>
                            <p className="space-title">Nombre</p>
                            <p className="space-title">Cantidad</p>
                            <p className="space-title">Total</p>
                        </div>
                    </div>
                    { states.reservations.length > 0 &&
                        states.reservations.map((item, index) => {
                            return (
                                <ItemReservacion 
                                    data={item}
                                    key={index}
                                    index={index}
                                />
                            );
                        })
                    }

                </div>

                <div className="reservation-checkout">
                    <ResumenReservacion data={states}/>
                    
                    
                </div>
                <div className="reservation-blank">&nbsp;</div>
                
            </div>
        </div>
    );
}

export default Reservaciones;