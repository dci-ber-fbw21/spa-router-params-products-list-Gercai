import React from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import products from  "../../data/products.json";

import "./index.scss";


class Home extends React.Component{

componentDidMount(){
    // let data = JSON.parse(products);
    // console.log(data);
}


GoTo(){

}

render(){

    // let data = JSON.parse(products);


return (
  <article>

    <section>
        back to 
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
          return(
              <tr>
              <td>{details.name}</td>
              <td>{details.shortDescription}</td>
              <td>{details.price}</td>
              </tr>
          )
      })
      }
      </tbody>
      </table>
  </article>
)


}


}

export default withRouter(Home);