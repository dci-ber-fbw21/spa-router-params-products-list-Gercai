import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./views/home";
import Products from "./views/products";

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
          <Home/>
      </Router>
    </div>
  );
}

export default App;
