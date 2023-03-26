import React from "react";
import "@styles/NoEncontrado.scss";
import cookiemstr from "@assets/cookiemnstr.png";
import nmbrfour from "@assets/number-four.png";
import { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

const NoEncontrado = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x0,
                    shininess: 84.0,
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
                    <h1>OOPS!!!</h1>
                    <img className="number4" src={nmbrfour} />
                    <img className="cookiemnstr" src={cookiemstr} />
                    <img className="number4" src={nmbrfour} />
                    <p>
                        Has encontrado una pagina que no existe o el link fue
                        removido
                    </p>
                </div>
            </div>
        </div>
    );
};
export default NoEncontrado;
