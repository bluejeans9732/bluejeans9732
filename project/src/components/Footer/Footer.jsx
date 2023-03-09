import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_contianer_Left">
                    <div>주식회사 모드나인아트컴퍼니 | 배효진 | mod.9@modnine.com | 02-538-3861</div>
                    <div>135080 역삼로12길 22, B1층 1호 (역삼동) 서울특별시 강남구 역삼동</div>
                    <div>146-88-01400 | 2019-서울강남-03186</div>
                </div>
                <div className="footer_contianer_Right">
                    <div><a href="/">INSTAGRAM</a></div>
                    <div><a href="/">FACEBOOK</a></div>
                    <div><a href="/">KAKAOTALK</a></div>
                    <div><a href="/">BLOG</a></div>
                    <div><a href="/">NAVERCAFE</a></div>
                </div>
            </div>
           
        </div>
    )
}

export default Footer;