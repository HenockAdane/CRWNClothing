import React from "react"
import { connect } from "react-redux"
import "../componentsCSS/cartIcon.scss"



import { ReactComponent as CartSVG } from "./images/shopping-bag.svg"

const CartIcon = (props) => {

    let sum = 0;
    props.items.forEach(a => sum+= a.quantity);
    
    return(
    <div className="cartIconDiv" onClick={props.cartToggle}>
        <CartSVG className="cartIcon" />
        <span className="itemCount">{sum}</span>
    </div>
)}

const mapStateToProps = (state) => ({
    items: state.cartReducer.cartItems
})

export default connect(mapStateToProps, null)(CartIcon)