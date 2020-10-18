import React from 'react'
import "../componentsCSS/checkout.scss"

import {useDispatch, useSelector} from "react-redux"
import { addItem, reduceItem, removeItem } from '../Redux/reducers/cart-reducer';
import StripeBtn from './stripeBtn';


function Checkout() {

    const dispatch = useDispatch()
    const selector =  useSelector

    let items = selector(state => state.cartReducer.cartItems)
    let sum = 0;

    items.forEach(a => sum+= (a.price * a.quantity))



    console.log(items)

    console.log(dispatch)
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <p className="headerTitles">PRODUCT</p>
                <p className="headerTitles">DESCRIPTION</p>
                <p className="headerTitles">QUANTITY</p>
                <p className="headerTitles">PRICE</p>
                <p className="headerTitles small">REMOVE</p>
            </div>

            {items.map(a => (
                <div className="checkout-items">
                    <img className="itemTitles" src={a.image} />
                    <h4 className="itemTitles">{a.title}</h4>
                    <div className="itemTitles quantity">

                        <button onClick={()=>dispatch(reduceItem({image: a.img,
            title:a.title,
            price:a.price}))}>-</button>

                        <p>{a.quantity}</p>

                        <button onClick={()=>dispatch(addItem({image: a.img,
            title:a.title,
            price:a.price}))}>+</button>

                    </div>
                    <h4 className="itemTitles">${a.price}</h4>
                    <button className="delete" onClick={()=> dispatch(removeItem(a.title))}>X</button>
                </div>
            ))}

            <h1>TOTAL:${sum}</h1>
            <StripeBtn price={sum} />

            <div style={{color : "red"}}>
                <h5>CARD NUMBER:4242 4242 4242 4242</h5>
                <h5>EXP: 01/20</h5>
                <h5>CVC: 123 </h5>
            </div>
        </div>
            
    )
}

export default Checkout
