import React ,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  // this is for alert 
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  // this is for mode changing
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      setBtnColor('primary');
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black'
      showAlert('Light Mode successfully enable', 'success');
      document.title = 'TextUtils - Light Mode';
    } else {
      setmode('dark')
      setBtnColor('primary');
      document.querySelector('body').style.backgroundColor = '#0b0e29'
      document.querySelector('body').style.color = 'white';
      showAlert('Dark Mode successfully enable', 'success')
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode Enable';
      // }, 600);
    }
  }
  const changeColor = (bgColor, texcColor) => {
    setmode(bgColor);
    setBtnColor(bgColor)
    document.querySelector('body').style.backgroundColor = texcColor;
    document.querySelector('body').style.color = 'white';
    bgColor = bgColor[0].toUpperCase() + bgColor.slice(1)
    showAlert(`${bgColor} Mode successfully enable`, 'success')
  }
  // set btn color
  const [btnC, setbtnC] = useState('primary');
  const setBtnColor = (btnColor) => {
    setbtnC(btnColor);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TestUtils" mode={mode} setmode={setmode} toggleMode={toggleMode} changeColor={changeColor} />
        {<Alert Alert={alert} />}
        {/* <TextForm heading="Paste your text here ..." btnC={btnC} /> */}
        <Routes>
          <Route exact path="/" element={ <TextForm heading="Paste your text here ..." btnC={btnC} showAlert={showAlert} />} />
          <Route exact path="/about" element={ <About mode={mode} />}/>
        </Routes>
  
     
      {/* <Switch>
        <Route exact path="/">
       
        </Route>
        <Route path="/about">
       
        </Route>
      </Switch> */}
    </BrowserRouter>
    </>
  );
}

export default App;
