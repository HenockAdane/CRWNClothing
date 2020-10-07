import React from "react"
import cartIcon from "./cartIcon"

import "../componentsCSS/cart-item.scss"

const CartItem = (props) => (
    <div className="cartItem">
        <img className="cartItemImg" src={`${props.img}`} alt="item" />
        <div className="itemDetails">
            <h5>{props.title}</h5>
            <p>{props.quantity} X £{props.price}</p>
        </div>
    </div>
)

export default CartItem