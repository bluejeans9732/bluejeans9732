import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { getFireStore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfUs7cy7JTfEN8Gr6jHTw0yKQT4670RLY",
    authDomain: "devclass-379004.firebaseapp.com",
    projectId: "devclass-379004",
    storageBucket: "devclass-379004.appspot.com",
    messagingSenderId: "382785736159",
    appId: "1:382785736159:web:0f37bda3732c552c63886a",
    measurementId: "G-3CMNZVKJGG"
  };

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();


// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };