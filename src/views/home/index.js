import React from "react";
import Products from "../products";
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
  console.log(history);
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
{
  pathname==="/products"?
  <Products></Products>:
  <Router>
  <button onClick={() => this.GoTo("/products")}>GoTo</button>
  <Route path="/products" component={Products}></Route>
  </Router>
}
    </section>
  </article>
)}


}

export default withRouter(Home);