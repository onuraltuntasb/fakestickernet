import React, { Component } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Badge ,Row, Container, Col,
  } from 'reactstrap';

import { connect } from "react-redux"
import alertify from "alertifyjs"
import { bindActionCreators } from 'redux';
import * as addtoCartActions from "../../redux/actions/addtoCartActions"


class CartDetails extends Component {
    removeFromCart =(product)=>{
        this.props.actions.removeFromCart(product)
        alertify.success(product.productName+" removed from your cart!")
    }

    render() {
        return (
            <div>
                <Container>
                    <h3><Badge color="warning">Cart Details</Badge></h3>
                    <Row xs="5">
                        {this.props.cart.map(cartItem => (
                            <Col key={cartItem.product.id}>
                                <Card>
                                    <CardImg top width="100%" src={cartItem.product.image} alt="Card image cap" />
                                    <CardBody>
                                        <CardText>{cartItem.product.productName}</CardText>
                                        <CardSubtitle>Price :{cartItem.product.unitPrice}₺</CardSubtitle><br></br>
                                        <Button onClick={() => this.removeFromCart(cartItem.product)}> Remove</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        cart: state.addtoCartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(addtoCartActions.removefromCart, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);