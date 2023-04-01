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

import AppContext from "@context/AppContext";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personajes" element={<Personajes />} />
                    <Route path="*" element={<NoEncontrado />} />
                    <Route path="/buzon_no" element={<BuzonNo />} />
                    <Route path="/acerca_de" element={<AcercaDe />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
