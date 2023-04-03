import React from "react";
import "@styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NoEncontrado from "@pages/NoEncontrado";
import Personajes from "@pages/Personajes";
import "@styles/Global.css";
import "@styles/App.css";
import BuzonNo from "@pages/BuzonNo";
import AcercaDe from "@pages/AcercaDe";
import Plataformas from "@pages/Plataformas";

import AppContext from "@context/AppContext";
import useStatesGeneral from "@hooks/useStatesGeneral";
import Reservaciones from "@pages/Reservaciones";

const App = () => {
    const statesGeneral = useStatesGeneral();
    return (
        <AppContext.Provider value={statesGeneral}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/personajes" element={<Personajes />} />
                        <Route path="*" element={<NoEncontrado />} />
                        <Route path="/buzon_no" element={<BuzonNo />} />
                        <Route path="/acerca_de" element={<AcercaDe />} />
                        <Route path="/reservaciones" element={<Reservaciones/>} />
                         <Route path='/plataformas' element={<Plataformas/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
