import React, { Component } from 'react'
import { connect } from "react-redux"

import { bindActionCreators } from 'redux';
import * as addtoCartActions from "../../redux/actions/addtoCartActions"
import {Link} from "react-router-dom"
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';



class CartList extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Cart is empty</NavLink>
            </NavItem>
        );
    }
    renderList() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
         </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color="danger" onClick ={()=>this.props.actions.removeFromCart(cartItem.product)}>X</Badge>
                                {cartItem.product.productName}
                                <Badge color="success">{cartItem.quantity} </Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem >
                        <Link to = {"/cart"} >Go to Cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {
               this.props.cart.length > 0 ? this.renderList() : this.renderEmpty()
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart:state.addtoCartReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(addtoCartActions.removefromCart, dispatch),
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartList);