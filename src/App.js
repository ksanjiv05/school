import React from 'react';
import Colors from "./util/Util"
import './App.css';
import { Header } from './components/header/Header';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import Admission from './components/admission/Admission'
import { Preview } from './components/admission/Preview';

const App = () => {

  return (
    <div className="containerx">

      <Header />
      <Preview />
      {/* <Admission /> */}

      {/* <Register /> */}
      {/* <Login /> */}
      {/* <h1 style={Colors.HeaderFont} >hii sanjiv</h1>
      <button style={Object.assign(Colors.Button, Colors.Font)} className="btn">hii</button> */}
    </div>
  )
}
export default App;
