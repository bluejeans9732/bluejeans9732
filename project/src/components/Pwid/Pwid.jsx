import './Pwid.css';
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import { Link } from "react-router-dom"


function Pwid() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");
    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const [passwordType, setPasswordType] = useState({
        type:'password',
        visible: false
    });

    const handlePasswordType = e => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

    const Correct = () => {
        if(registerPassword === registerPassword2) {
            return true
        }
    };
    

    return(
        <div className="Pwid">
             <h1 className="PwidTitle">회원 가입 하기</h1>
            <div className="Pwid_wrapper">
                <div className='Pwid_email'>
                    <span>이메일 : </span>
                    <input
                        placeholder="Email"
                        onChange={(e) => {
                            setRegisterEmail(e.target.value);
                        }}
                    />
                    <button>중복체크</button>
                </div>
                <div className="Pwid_email_check">이미 다른 사용자가 사용 중 입니다.</div>
                <div className='Pwid_pw'>
                    <span>비밀번호 : </span>
                    <input
                        type={passwordType.type}
                        placeholder="Password"
                        onChange={(e) => {
                            setRegisterPassword(e.target.value);
                        }}
                        value={registerPassword}
                       
                    />
                </div>
                <div className='Pwid_pw_re'>
                    <span>비밀번호 확인 : </span>
                    <input
                        type={passwordType.type}
                        placeholder="Password again"
                        onChange={(e) => {
                            setRegisterPassword2(e.target.value);
                        }}
                        value={registerPassword2}
                    />
                </div>

                <div className='Pwid_correct' onChange={Correct}>
                    {registerPassword.length < 1 ? <span>&nbsp;</span> : Correct() ? 
                    <span>비밀번호가 같습니다</span> : <span>비밀번호가 다릅니다</span>}
                </div>

                <button onClick={handlePasswordType}>
                    {passwordType.visible ? <span>비밀번호 숨기기</span> : <span>비밀번호 보이기</span>}
                </button>

                <div className='Pwid_button'>
                    <button className="Pwid_button_registry" onClick={register}>가입하기</button>
                    <Link to="/Login">
                        <button className="Pwid_button_cancle">취소</button>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Pwid;