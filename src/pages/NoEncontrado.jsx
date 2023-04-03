import React from "react";
import "@styles/NoEncontrado.scss";
import notfoundimg from "@assets/notfound.png";
import nmbrfour from "@assets/number-four.png";
import { useState, useEffect, useRef } from "react";
import CELLS from "vanta/dist/vanta.cells.min";

const NoEncontrado = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <div className="vanta" ref={vantaRef}>
            <div className="notfound-container">
                <div className="pagnoenc">
                    <p>4</p>
                    <img className="cookiemnstr" src={notfoundimg} />
                    <p>4</p>
                </div>
                <p className="notfoundtext">
                   <strong>La pagina que estas buscando ha sido movida a otro universo</strong> 
                </p>
            </div>
        </div>
    );
};
export default NoEncontrado;
