import React from "react"
import {Link} from "react-router-dom"
import { auth } from "../firebase"


import { ReactComponent as Logo } from "./images/original.svg"
import { connect } from "react-redux"

import CartIcon from "./cartIcon"
import CartDropdown from "./cart-dropdown"
import { cartToggleAction } from "../Redux/reducers/cart-reducer"

import "../componentsCSS/header.scss"
// "./images/original.svg"

class Header extends React.Component{


    render(){
        return(
            <div className="header" style={{border: "1px solid"}}>
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <nav>
                <Link className="header-links" to="/shop">SHOP</Link>
                <Link className="header-links" to="/contacts">CONTACTS</Link>
                {
                    this.props.currentUser ? (<Link to={""} className="header-links" onClick={()=> auth.signOut()}>SIGN OUT</Link>)
                    : (<Link className="header-links" to="/signinandup">SIGN IN/UP</Link>)
                }

                <CartIcon cartToggle={this.props.toggleCart} />
            </nav>
            <CartDropdown display={this.props.cartDisplay ? "none" : "unset"} />


            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser,
    cartDisplay: state.cartReducer.hidden
})

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(cartToggleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)