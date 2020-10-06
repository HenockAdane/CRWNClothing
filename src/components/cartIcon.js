import React from "react"
import "../componentsCSS/cartIcon.scss"



import { ReactComponent as CartSVG } from "./images/shopping-bag.svg"

const CartIcon = (props) => (
    <div className="cartIconDiv" onClick={props.cartToggle}>
        <CartSVG className="cartIcon" />
        <span className="itemCount">0</span>
    </div>
)

export default CartIcon