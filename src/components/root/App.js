import React, { Component } from 'react'
import Navbar from '../navi/Navbar'
import {Route,Switch} from "react-router-dom"
import  Dashboard from "./Dashboard"
import CartDetails from '../cart/CartDetails'
import Product from '../products/Product'
import AddOrUpdateProduct from '../products/AddOrUpdateProduct'
import NotFound from '../common/NotFound'




class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Product}/>
          <Route path="/cart" exact component={CartDetails}/>
          <Route path="/saveProduct/:productId" component={AddOrUpdateProduct}/>
          <Route path="/saveProduct/"component={AddOrUpdateProduct}/>
          <Route exact component={NotFound}/>

        </Switch>
        
      </div>
    )
  }
}
export default App;