import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading='Enter your text below to analyze' mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
