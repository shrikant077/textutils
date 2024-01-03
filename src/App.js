import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light Mode";

      //flashing title 
      // setInterval(() => {
      //   document.title = "TextUtils - is Amazing Mode";  
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils - is Amazing Mode";  
      // }, 1500);
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#282a2d';
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" home="Home" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="#" element={<Textform enter="Enter Text Below" mode={mode} showAlert={showAlert} />} />
          </Routes>          
        </div>
      </Router>
    </>
  );
}

export default App;
