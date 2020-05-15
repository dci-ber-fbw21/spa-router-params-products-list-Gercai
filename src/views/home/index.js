import React from "react";
import products from  "../../data/products.json";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";

import "./index.scss";
import { thisExpression } from "@babel/types";

class Home extends React.Component{


  constructor(props){
    super(props);
    this.state={
      bestSeller: []
  }
  }


componentDidMount(){


  
  let bestSeller = products.sort((a,b) =>{
    return b.price - a.price;
  });


  this.setState({
    bestSeller
  })
}

GoTo(pathname){
  let {history} = this.props;
  history.push({
    pathname,
    search: "?ok"
  })
}

render(){


return (

    <article className="home">

  <section className="products">
  
  <div>Welcome Visitor</div>
  <button onClick={() => this.GoTo("/products")}>GoTo</button>
  
  </section>  

<section className="productList">
{
  this.state.bestSeller
  .filter((i, index) => (index < 4))
  .map((element) =>{
    return( <div>
      
        {element.slug}

      <p>{element.price.toFixed(2)} €</p>
      </div>)
  })
}
</section>


  </article>
)}

}

export default withRouter(Home);