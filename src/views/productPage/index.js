import React from "react";
import {
  withRouter,
} from "react-router-dom";
import "./index.scss";
import products from  "../../data/products.json";



class ProductPage extends React.Component{

constructor(props){
    super(props);
    this.state={
        product: {}
    }
}


componentDidMount(){
    let {history,location, match} = this.props;

    let product = products.find(({id}) => id == history.location.search.slice(1));

    console.log(product);
    this.setState({
        product
    })
}

GoTo(pathname){
    let {history,location, match} = this.props;
    // console.log(match);
  history.push({
    pathname,
    search: "?ok"
  })
}

render(){
return (
  <article>
        
    <section className="container">
            <button onClick={() => this.GoTo("/products")}> back to </button>  
       
        <h1>{this.state.product.slug}</h1>

        <img src={this.state.product.image}></img>
        <p>{this.state.product.description}</p>

    </section>

  </article>
)}
}

export default withRouter(ProductPage);