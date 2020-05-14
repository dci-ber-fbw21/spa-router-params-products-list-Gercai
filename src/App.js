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

<Link to="/">Home</Link>
      
<Switch>
  <Route path="/">
      <Home/>
  </Route>
 
</Switch>  
    
      </Router>
    </div>
  );
}

export default App;
