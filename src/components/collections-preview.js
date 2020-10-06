import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import "../componentsCSS/collection.scss"
import Button from './button';

import { connect } from "react-redux"
import { addItem } from '../Redux/reducers/cart-reducer';



class Collection extends React.Component{

    add = (e) => {
        console.log(this.props.items)

        return this.props.addItem({image: this.props.img,
            title:this.props.title,
            price:this.props.price})

    }

    render(){
        return(
            <div className="collection-item">
                <div className="image" style={{
                    backgroundImage: `url(${this.props.img})`
                }} />

                <div className="collection-footer">
                    <p>{this.props.title}</p>
                    <p>{`£${this.props.price}`}</p>
                </div>
                <Button text="ADD TO CART" click={this.add} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.cartReducer.cartItems
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Collection) 