// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 코드 추가

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfUs7cy7JTfEN8Gr6jHTw0yKQT4670RLY",
  authDomain: "devclass-379004.firebaseapp.com",
  projectId: "devclass-379004",
  storageBucket: "devclass-379004.appspot.com",
  messagingSenderId: "382785736159",
  appId: "1:382785736159:web:0f37bda3732c552c63886a",
  measurementId: "G-3CMNZVKJGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // 코드 추가
