import React from "react";
import Products from "../products";
import ProductPage from "../productPage";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";

import "./index.scss";

class Home extends React.Component{

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
return (

    <article>

  <section className="products">
  <div>Welcome Visitor</div>
  <button onClick={() => this.GoTo("/products")}>GoTo</button>
  </section>  
  </article>
)}

}

export default withRouter(Home);