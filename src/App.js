import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./views/home";
import Products from "./views/products";
import Hub from "./views/nexus";


import './App.scss';

function App() {

  return (
    <div className="App">
      <Router>
      <Hub></Hub>
      </Router>
    </div>
  );
}

export default App;
