import React from "react"
import {Link} from "react-router-dom"
import { auth } from "../firebase"


import { ReactComponent as Logo } from "./images/original.svg"
// "./images/original.svg"

class Header extends React.Component{


    render(){
        return(
            <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <nav>
                <Link className="header-links" to="/shop">SHOP</Link>
                <Link className="header-links" to="/contacts">CONTACTS</Link>
                {
                    this.props.currentUser ? (<a href="#" className="header-links" onClick={()=> auth.signOut()}>SIGN OUT</a>)
                    : (<Link className="header-links" to="/signinandup">SIGN IN/UP</Link>)
                }
            </nav>

            </div>
        )
    }
}

export default Header