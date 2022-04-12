import React from 'react';
import './index.css';

import {Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import Header from "./header/Header";
import {ThemeProvider} from "./Providers/ThemeProvider";
import Layout from "./Layout";
// import Header from "./header/Header";



function App(){
    return(
        <ThemeProvider>
            <Layout>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/shop" element={<Shop/>} />
                        <Route path="/women" element={<Women/>} />
                        <Route  path="/men" element={<Men/>} />
                    </Routes>
            </Layout>
        </ThemeProvider>
    )
}

export default App