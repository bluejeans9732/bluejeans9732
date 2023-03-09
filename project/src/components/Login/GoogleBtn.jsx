import { auth } from "../../firebase-config.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import './GoogleBtn.css';

function GoogleBtn() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); 
    signInWithPopup(auth, provider) 
      .then((data) => {
        setUserData(data.user); 
        console.log(data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button className="loginButton2 google2" onClick={handleGoogleLogin}>google</button>
      {/* <div>
        {userData
          ? "당신의 이름은 : " + userData.displayName
          : "로그인 버튼을 눌러주세요 :)"}
      </div> */}
    </div>
  );
}

export default GoogleBtn;