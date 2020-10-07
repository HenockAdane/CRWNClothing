import React from 'react'
import Button from './button'


import "../componentsCSS/cart-dropdown.scss"
import CartItem from './cart-item'
import { connect } from 'react-redux'



const CartDropdown = (props)=> (


    <div className="cart-dropdown" style={{display: props.display}}>
        <div className="cart-items">
        {props.cartItems.map(a => <CartItem img={a.image} title={a.title} quantity={a.quantity} price={a.price}  />)}
        </div>
        <Button text="GO TO CHECKOUT"/>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps, null)(CartDropdown)


{/* <div>
<img src={props.img} alt="item" />
<div className="itemDetails">
    <h5>{props.title}</h5>
    <p>{props.quantity} X £{props.price}</p>
</div>
</div> */}
{/* <CartItem img={a.img} title={a.title} quantity={a.quantity} price={a.price}  /> */}