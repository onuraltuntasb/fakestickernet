import * as  actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function saveProductReducer(state = initialState.savedProduct, action) {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return {...state,...action.payload}
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return {...state,...action.payload}
        default:
            return state;
    }
}