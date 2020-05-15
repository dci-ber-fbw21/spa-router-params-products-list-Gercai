import React from "react";
import Products from "../products";
import Home from "../home";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

import "./index.scss";

class Hub extends React.Component{

componentDidMount(){

}

GoTo(pathname){
  let {history} = this.props;
  history.push({
    pathname,
    search: "?ok"
  })
}

render(){

  let {pathname} = this.props.location;
  console.log(pathname);
return (

  <article>
    <p>Image_Placeholder</p>
    <section className="container">
      <Router>
        <Home/>
      </Router>
    </section>
  </article>
)}

}

export default withRouter(Hub);