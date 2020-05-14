import React from "react";
import Products from "../products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";

import "./index.scss";

class Home extends React.Component{


componentDidMount(){

}

GoTo(){
  let {history} = this.props;
  console.log(history);
  history.push({
    pathname:"/products",
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
  <div>ai</div>:
  <div>oh</div>
}

    <Router>
        <button onClick={() => this.GoTo()}>GoTo
        </button>
    <Route path="/products" component={Products}></Route>
    </Router>
    
    </section>
  </article>
)}


}

export default withRouter(Home);