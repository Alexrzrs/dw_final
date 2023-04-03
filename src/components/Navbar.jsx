import React, { useState, useContext } from "react";
import { GiHamburgerMenu, GiSpaceSuit } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "@styles/Navbar.scss";
import rickandmorty from "@assets/rickandmorty.png";

import { useNavigate, Link} from 'react-router-dom';

import AppContex from '@context/AppContext';


const Navbar = () => {
    //para hacer dinamico el menu
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigation = useNavigate();
    const { states } = useContext(AppContex);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={rickandmorty} alt="app logo" />
            </div>

            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="p__opensans">
                    <Link to="acerca_de">Acerca de</Link>
                </li>
                <li className="p__opensans">
                    <Link to="personajes">Personajes</Link>
                </li>
                <li className="p__opensans">
                    <Link to="Plataformas">Donde ver</Link>
                </li>
            </ul>

            <div className="app__navbar-login">
                <a
                    className="p__opensans"
                    onClick={() => navigation("/buzon_no")}
                >
                    Buzon de Noticias
                </a>
                <div />
                <p className="p__opensans">
                    <Link to="reservaciones" >Reservaciones</Link>
                    <strong className="app-navbar-total-reservations">
                        {
                            states.reservations.length > 0 ?
                                states.reservations.length :
                            0
                        }
                    </strong>
                </p>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => setToggleMenu(true)}
                />
                <strong className="app-navbar-smallscreen-total-reservations">
                    {
                        states.reservations.length > 0 ?
                            states.reservations.length :
                        0
                    }
                </strong>
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <GiSpaceSuit
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}
                        />

                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans">
                                <a href="#Home">Inicio</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#about">Acerca de</a>
                            </li>
                            <li className="p__opensans">
                                <Link to="personajes">Personajes</Link>
                            </li>
                            <li className="p__opensans">
                                <a href="#Contacto">Donde ver</a>
                            </li>
                            <li className="p__opensans_reservaciones">
                                <Link to="reservaciones" >Reservaciones</Link>
                                <strong className="app-navbar-smallscreen_links-total-reservations">
                                    {
                                        states.reservations.length > 0 ?
                                            states.reservations.length :
                                        0
                                    }
                                </strong>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
