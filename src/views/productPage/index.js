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
        product: {},
        productIndex: 0
    }
}

componentDidMount(){
    let {history,location, match} = this.props;
    let product = products.find(({id}) => id == history.location.search.slice(1));
    let productIndex = products.indexOf(product);
    this.setState({
        product,
        productIndex
    })
}

componentDidUpdate(){
  console.log("ok");
}

next(index){

  if(index===-1){
    index = products.length-1;
  }
  else if(index === products.length){
    index= 0;
  };

  let product = products[index];
  let productIndex = products.indexOf(product);


  this.setState({
    product,
    productIndex
})

}

goTo(pathname){
    let {history,location, match} = this.props;
  history.push({
    pathname,
    search: "?ok"
  })
}

render(){
return (
  <article>
        
    <section className="container">
            <button onClick={() => this.goTo("/products")}> back to </button>  
       
        <h1>{this.state.product.slug}</h1>
        <img src={this.state.product.image} alt=""></img>
        <p>{this.state.product.description}</p>

    </section>
      <section className="switchTo">
          <p onClick={() => this.next(this.state.productIndex +1)}>Next</p>
          <p onClick={() => this.next(this.state.productIndex -1)}>Previous</p>
    </section>
  </article>
)}
}

export default withRouter(ProductPage);