import React from "react";
import './LeftSide.css';
import { Link } from 'react-router-dom';

function LeftSide() {
    return (
        <div className="LeftSide_main">
            <div className="LeftSide_li">
                <Link to="/shop">
                    <li>shop</li>
                </Link>
                <li>cart</li>
                <li>c/s</li>
                <li>my page</li>
            </div>
        </div>
    )
}

export default LeftSide;