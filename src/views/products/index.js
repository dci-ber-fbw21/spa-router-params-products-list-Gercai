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
      productsSorted : []
    }
  }

componentDidMount(){
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
  let {history,location, match} = this.props;

  // let {slug} = match.params;
  // let {search} = this.props.location;

  console.log(search);
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
        <p onClick={() => this.sort("sort=")}>Reset</p>
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
      {products.map((details,index) =>{

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