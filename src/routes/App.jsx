import React from "react";
import "@styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import NoEncontrado from "@pages/NoEncontrado";
import Personajes from "@pages/Personajes";
import "@styles/Global.css";
import "@styles/App.css";
import BuzonNo from '@pages/BuzonNo';

import AppContext from "@context/AppContext";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/personajes" element={<Personajes />} />
                    {/* <Route path="*" element={<NoEncontrado />} /> */}
                    <Route path="/buzon_no" element={<BuzonNo/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
