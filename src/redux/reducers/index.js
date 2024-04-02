import {combineReducers} from "redux"
import addtoCartReducer from "./addtoCartReducer"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import saveProductReducer from "./saveProductReducer"



const rootReducer = combineReducers({
    addtoCartReducer,
    categoryListReducer,
    changeCategoryReducer,
    productListReducer,
    saveProductReducer
})

export default rootReducer;