import React from "react";
import {
  withRouter,
} from "react-router-dom";
import products from  "../../data/products.json";
import "./index.scss";


class Home extends React.Component{

componentDidMount(){
}

GoTo(pathname,search){
  let {history,location, match} = this.props;
  history.push({
    pathname,
    search 
  })
}
render(){

  return (
  <article>
    <section>
      <button onClick={() => this.GoTo("/")} > back to </button>  
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
              <tr onClick={() => this.GoTo("/productPage",product)}>
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