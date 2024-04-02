import React, { Component } from 'react'
import { connect } from "react-redux"
import {
  Card, CardImg, CardText, CardBody,
  CardSubtitle, Button, Badge, Row, Container, Col,
} from 'reactstrap';
import {Link} from "react-router-dom"
import { bindActionCreators } from 'redux';
import * as addtoCartActions from "../../redux/actions/addtoCartActions"
import * as productActions from "../../redux/actions/productActions"
import alertify from "alertifyjs"


class Product extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addtoCart({quantity:1,product})
    alertify.success(product.productName+" added to your cart!")
  }


  render() {
    return (
      <div className="landing-page">
      
        <Container>
        <h3><Badge color="warning">Stickers</Badge></h3>
          <Row xs="5">
              {this.props.products.map(product => (
                <Col key={product.id}>
                <Card>
                  <CardImg top width="100%" src={product.image} id="UncontrolledTooltipExample" alt="Card image cap" />
                  <CardBody>
                  <CardText >
                  <Link to={"/saveProduct/"+product.id}> {product.productName}</Link>
                  </CardText>
                    <CardSubtitle>Price : {product.unitPrice}₺</CardSubtitle><br></br>
                    <Button onClick={() => this.addToCart(product)}> add</Button>
                  </CardBody>
                </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    Cart: state.addtoCartReducer,
    products: state.productListReducer,
    currentCategory: state.changeCategoryReducer,
   
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {

      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addtoCart: bindActionCreators(addtoCartActions.addtoCart, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);