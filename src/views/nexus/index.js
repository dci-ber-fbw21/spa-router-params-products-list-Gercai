import React from "react";
import Products from "../products";
import ProductPage from "../productPage";
import Home from "../home";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

import "./index.scss";
import productPage from "../productPage";

class Hub extends React.Component{

componentDidMount(){

}

GoTo(pathname){
  let {history} = this.props;
  history.push({
    pathname,
    search: ""
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
   
   <Route path="/home" component={Home}></Route>
   <Route path="/products" component={Products}></Route>
   <Route path="/productPage" component={ProductPage}></Route>
   <Route exact path="/" component={Home}></Route>

     </Router>
    </section>
  </article>
)}

}

export default withRouter(Hub);