import React from 'react'
import Button from './button'


import "../componentsCSS/cart-dropdown.scss"



const CartDropdown = (props)=> (
    <div className="cart-dropdown" style={{display: props.display}}>
        <div className="cart-items"></div>
        <Button text="GO TO CHECKOUT"/>
    </div>
)

export default CartDropdown