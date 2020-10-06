import React from "react"
import { connect } from "react-redux"
import "../componentsCSS/cartIcon.scss"



import { ReactComponent as CartSVG } from "./images/shopping-bag.svg"

const CartIcon = (props) => (
    <div className="cartIconDiv" onClick={props.cartToggle}>
        <CartSVG className="cartIcon" />
        <span className="itemCount">{props.items.length}</span>
    </div>
)

const mapStateToProps = (state) => ({
    items: state.cartReducer.cartItems
})

export default connect(mapStateToProps, null)(CartIcon)