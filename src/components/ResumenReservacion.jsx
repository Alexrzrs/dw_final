import React, { useContext, useEffect, useState } from 'react';
import "@styles/ResumenReservacion.scss";
import AppContext from '@context/AppContext';

const ResumenReservacion = ({data}) => {
    const { states } = useContext(AppContext);
    const [subTotal, setSubTotal] = useState(0);

    const handleGetTotal = () => {
        var total = 0;
        data.reservations.map((item) => {
            total = total + states.generalPrice;
        });
        setSubTotal(total);
    }

    useEffect(() => {
        handleGetTotal();
    }, [states.reservations]);

    return (     
        <>           
            <div className="checkout-title"> 
                Resumen de reservación
            </div>
            <div className="checkout-total-items">
                <p>
                    {data.reservations.length > 0 
                        ? data.reservations.length 
                    : 0}
                </p> 
                {data.reservations.length === 1 
                    ? " item reservado" 
                : " items reservados"}
            </div>
            <div className="checkout-information">
                <div className="checkout-text-subtotal">
                    <p>Subtotal:</p>
                </div>
                <div className="checkout-number-subtotal">
                    <p>${subTotal}</p>
                </div>
            </div>
            <div className="checkout-payment-btn">
                Pagar
            </div>
            <p className="text-credits-card">Pagos con</p>
            <div className="info-credits-card">
                <img className="credit-card" src={"https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.webp"} />
                <img className="credit-card" src={"https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.webp"} />
                <img className="credit-card" src={"https://img.ltwebstatic.com/images2_pi/2018/06/06/15282719811871317559.webp"} />
            </div>
        </>
    );
}

export default ResumenReservacion;