import React from "react";
import {
  withRouter,
} from "react-router-dom";
import productList from  "../../data/products.json";
import "./index.scss";
import { exportDefaultSpecifier } from "@babel/types";


class Home extends React.Component{

  constructor(props){

    super(props);
    this.state= {
      products: productList,
      sortImage: "",
      sortOrder: false
    }

    this.baseState = this.state;
  }

componentDidUpdate(){
  
  let {location} = this.props;
  let sort = location.search.split("=")[1];
  let newArray = [];
  let sorting = this.state.products.concat(newArray);
  let image = "";

   switch(sort){
    case "asc":
        sorting = sorting.sort((a,b) => {
          return a.price - b.price
        })
         image = "up";
        break;
    case "desc":
       sorting =  sorting.sort((a,b) => {
              return b.price - a.price
        })
        image = "down";
        break;
      default:
        image = "";
        break;
  }

  if(this.state.order&&image){
    this.setState({
      products: sorting,
      order: false,
      sortImage: image
    })
  } else if(this.state.order&&!image){
    this.setState({
      products: this.baseState.products,
      order: false,
      sortImage: image
    })
  }

  }

goTo(pathname,search){
  let {history} = this.props;
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

  let {history} = this.props;
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
              <th>Price <span>{this.state.sortImage}</span></th>
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