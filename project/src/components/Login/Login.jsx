import React, {useState} from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import {
    // createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from "../../firebase-config.js";
// import { async } from "@firebase/util";
import GoogleBtn from './GoogleBtn.jsx';

function Login() {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    });

    const LoginCheck = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch(error) {
            console.log(error.message);
        }
    };

    const logOutCheck = async () => {
        await signOut(auth);
    };

    return(
        <div className="login"> 
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="login_wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        google
                    </div>
                    <GoogleBtn />
                    <div className="loginButton kakao">
                        KaKao
                    </div>
                    <div className="loginButton naver">
                        Naver
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input 
                        type="text" 
                        placeholder="Username"
                        onChange={(e)=>{
                            setLoginEmail(e.target.value);
                        }}
                    />
                    <input 
                        type="text" 
                        placeholder="Password"
                        onChange={(e)=> {
                            setLoginPassword(e.target.value);
                        }}
                    />
                    <button className="submit" onClick={LoginCheck}>Login</button>
                    <Link to="/Pwid">
                        <button className="submit">회원가입</button>
                    </Link>
                    <div>User Logged In: {user?.email}</div>
                    <button onClick={logOutCheck}>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

export default Login;