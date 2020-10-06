import {combineReducers} from "redux"

import userReducer from "./userReducer"
import cartReducer from "./cart-reducer"


const rootReducer = combineReducers({
    userReducer,
    cartReducer
})

export default rootReducer