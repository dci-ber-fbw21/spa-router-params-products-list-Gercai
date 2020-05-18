import React from "react";
import {
  withRouter,
} from "react-router-dom";
import products from  "../../data/products.json";
import "./index.scss";


class Home extends React.Component{


  constructor(props){

    super(props);
    
    this.state= {
      products: products,
      sortOrder: true
    }
  }

componentDidMount(){
  console.log("mount");
}

componentDidUpdate(){
  
  let {location} = this.props;
  let sort = location.search.split("=")[1];
  let sorting = [];

  switch(sort){
    case "asc":
        sorting =  this.state.products.sort((a,b) => {
          return a.price - b.price
        })
        break;
    case "desc":
         sorting =     this.state.products.sort((a,b) => {
              return b.price - a.price
        })
        break; 
        default: 
        sorting = products;
        break;
  }

  if(this.state.order){
    this.setState({
      products: sorting,
      order: false 
    })
  }
  

}

goTo(pathname,search){
  let {history,location, match} = this.props;


  history.push({
    pathname,
    search 
  })
}

sort(search){
  let pathname= "/products";
  this.setState({
    order: true
  })   
  
  
  let {history,location, match} = this.props;
    history.replace({
    pathname,
    search 
  })
}



render(){

  return (
  <article>
    <section>
      <button onClick={() => this.goTo("/")} > back to </button>  
    </section>
    <section className="flex">
        <p onClick={() => this.sort("")}>Reset</p>
        <p onClick={() => this.sort("sort=asc")}>Sort Up</p>
        <p onClick={() => this.sort("sort=desc")}>Sort Down</p>
    </section>
        <table>
          <thead>
              <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              </tr>
          </thead>
          <tbody>
      {this.state.products.map((details,index) =>{

        let price = details.price.toFixed(2);

        let product = details.id;

          return(
              <tr onClick={() => this.goTo("/productPage",product)}>
              <td>{details.name}</td>
              <td>{details.shortDescription}</td>
              <td>{price} €</td>
              </tr>
          )
      })
      }
      </tbody>
      </table>
  </article>
)}

}

export default withRouter(Home);