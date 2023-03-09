import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx'
import Login from './components/Login/Login.jsx'
import Pwid from './components/Pwid/Pwid.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    const getUser = ()=>{
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "aplication/json",
          "Access-Control-Allow-Credentials": true,
        }
      }).then((response)=> {
        if(response.status ===200) return response.json();
        throw new Error("authentication has been failed!")
      }).then(resObject=>{
        setUser(resObject.user)
      }).catch(err=> {
        console.log(err)
      });
    };
    getUser();
  },[]);

  console.log(user)

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} />
        <Routes>
          <Route path="/*" element={<Main />}/>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
          {/* <Route path='/post/:id' element(<post />)> */}
          <Route path='/Pwid' element={<Pwid />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
