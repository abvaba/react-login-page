// import React, {useState} from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Link to='/login-page'>login</Link>
      <Outlet />
    </div>
  );
}

export default App;
