// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.querySelector("body").style.backgroundColor = '#343a40';
      showAlert("Dark mode enabled!", 'success');
    }
    else{
      setMode('light');
      document.querySelector("body").style.backgroundColor = 'white';
      showAlert("Light mode enabled!", 'success');
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
              <Route exact path='/' element={<TextForm showAlert={showAlert} heading='Try TextUtils - Word & Character Counter and much more!' mode={mode} />} />
              <Route exact path='/about' element={<About mode={mode}/>}  />
              <Route exact path='*' element={<TextForm showAlert={showAlert} heading='Try TextUtils - Word & Character Counter and much more!' mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* check w3 schools react router for reference */}
      {/* why used exact prop in <Route/> : https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
    </>
  );
}

export default App;
