import  * as actionTypes from "./actionTypes"


export function addtoCart(cartItem){
        return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}

export function removefromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}

