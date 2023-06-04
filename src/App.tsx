import React from 'react';
import "./App.css";
import Header from "../src/assets/images/bg-header-desktop.svg";

const App = () => {
  return (
    <div className='App'>
      <img src={Header} alt="header" className='headerImage' />
    </div>
  )
}

export default App