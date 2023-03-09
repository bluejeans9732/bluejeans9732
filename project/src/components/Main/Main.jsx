import React from "react";
import './Main.css';
import { Routes, Route } from "react-router-dom";
import LeftSide from './LeftSide/LeftSide.jsx';
import Shop from './Shop/Shop.jsx';

function Main() {
    return (
        <div className="Main">
            <div className="Main_left"><LeftSide/></div>
            <Routes>
                <Route path="/shop" element={<Shop/>} />
            </Routes>
        </div>
    )
}

export default Main;