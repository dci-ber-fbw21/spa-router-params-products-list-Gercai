import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./index.scss";

class Home extends React.Component{



componentDidMount(){

}

GoTo(){

}

render(){

return (
  <article>
    <section className="products">
    <div>Welcome Visitor</div>
    <button onClick={() => this.GoTo()}>Go to Products</button>
    </section>
  </article>
)


}


}

export default Home;