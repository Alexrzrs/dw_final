import React from "react";
import "@styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import NoEncontrado from "@pages/NoEncontrado";
import Personajes from "@pages/Personajes";
import "@styles/Global.css";
import "@styles/App.css";
import BuzonNo from '@pages/BuzonNo';
import Reservaciones from "@pages/Reservaciones";
import AppContext from "@context/AppContext";
import useStatesGeneral from "../hooks/useStatesGeneral";

const App = () => {
    const statesGeneral = useStatesGeneral();
    return (
        <AppContext.Provider value={statesGeneral}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/personajes" element={<Personajes />} />
                        <Route path="*" element={<NoEncontrado />} />
                        <Route path="/buzon_no" element={<BuzonNo/>} />
                        <Route path="/reservaciones" element={<Reservaciones/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
