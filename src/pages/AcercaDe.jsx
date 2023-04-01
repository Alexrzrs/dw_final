import React, { useEffect, useState } from "react";
import "@styles/AcercaDe.scss";
import SubHeading from "@components/SubHeading";
import gif1 from "@assets/about1.gif";
import gif2 from "@assets/about2.gif";

const AcercaDe = () => {
    const txt1 =
        "Rick Y Morty Es Una Serie Animada De Ciencia Ficción Y Comedia Que Sigue Las Aventuras De Rick Sánchez, Un Genio Científico Y Alcohólico, Y Su Inocente Nieto Morty Smith. Juntos, Viajan A Través De Diferentes Dimensiones Y Universos Paralelos, Enfrentándose A Situaciones Extrañas Y Peligrosas Mientras Exploran Temas Filosóficos Y Éticos. La Serie Combina Humor, Sátira Y Elementos De Ciencia Ficción Para Crear Una Experiencia De Entretenimiento Única.";
    const txt2 =
        "Rick Sánchez: Es un científico genial pero alcohólico y cínico que vive con la familia de su hija. Rick es el abuelo de Morty y constantemente lo arrastra a peligrosas aventuras interdimensionales.\n\nMorty Smith: Es el nieto de 14 años de Rick, quien lo acompaña en sus aventuras. Morty es un adolescente tímido e inseguro pero con un fuerte sentido de la moral, y a menudo actúa como contrapeso a la imprudencia de Rick.\n\nJerry Smith: Es el padre de Morty, esposo de Beth y yerno de Rick. Jerry es inseguro, torpe y en general, un personaje cómico.\n\nBeth Smith: Es la hija de Rick, madre de Morty y Summer, y esposa de Jerry. Beth es una cirujana veterinaria con problemas de autoestima y una relación complicada con su padre.\n\nSummer Smith: Es la hermana mayor de Morty y nieta de Rick. Summer es una adolescente inteligente y sarcástica que a veces se une a Rick y Morty en sus aventuras.";
    const speed = 20;

    const [startSecondSection, setStartSecondSection] = useState(false);

    useEffect(() => {
        let i = 0;
        const element = document.getElementById("parrafo1");
        if (element) {
            const interval = setInterval(() => {
                if (i < txt1.length) {
                    element.innerHTML += txt1.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        window.scrollTo({
                            top: document.getElementById("second-section")
                                .offsetTop,
                            behavior: "smooth",
                        });
                        setStartSecondSection(true);
                    }, 5000);
                }
            }, speed);
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        let i = 0;
        const element = document.getElementById("parrafo2");
        if (startSecondSection && element) {
            const interval = setInterval(() => {
                if (i < txt2.length) {
                    element.innerHTML += txt2.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
            return () => clearInterval(interval);
        }
    }, [startSecondSection]);

    return (
        <>
            <div
                className="app__header app__wrapper section__padding"
                id="home"
            >
                <div className="app__wrapper_info">
                    <SubHeading title="Acerca del show" />
                    <p
                        className="p__opensans"
                        style={{ margin: "2rem 0" }}
                        id="parrafo1"
                    ></p>
                </div>

                {/* Muestra la imagen actual*/}
                <div className="app__wrapper_img">
                    <img src={gif1} alt="header_img" />
                </div>
            </div>

            <div
                className="app__header app__wrapper section__padding"
                id="second-section"
            >
                <div className="app__wrapper_img">
                    <img src={gif2} alt="header_img" />
                </div>

                <div className="app__wrapper_info">
                    <SubHeading title="Personajes principales" />
                    <p
                        className="p__opensans"
                        style={{ margin: "2rem 0", whiteSpace: "pre-wrap" }}
                        id="parrafo2"
                    ></p>
                </div>
            </div>
        </>
    );
};

export default AcercaDe;
