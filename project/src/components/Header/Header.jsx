import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import '../Login/Login.jsx';
import { auth } from "../../firebase-config.js";
import {signOut} from 'firebase/auth';



function Header({user}) {
    const logout = ()=> {
        window.open("http://localhost:5000/auth/logout", "_self");
    };

    const logOutCheck = async () => {
        await signOut(auth);
    };

    return (
        <div className='header'>
            <Link to = "/">
                <img className='header_logo' src={process.env.PUBLIC_URL+'/image/logo.png'}></img>
            </Link>
            {user ? ( 
                <div className='header_nav'>
                    <div className='header_option'>
                        <img 
                            src={user.photos[0].value}
                            alt=''
                            className='header_avatar'
                        />
                        <span className='header_name'>{user.displayName}</span>
                        <span className='header_logout' onClick={logout}>Log Out</span>
                    </div>
                </div> 
            ) : (
                <div className='header_nav'>
                    <div className='header_option'>
                        <Link to = "/Login">
                            <span className='header_option_icon'>로그인하기</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Header;