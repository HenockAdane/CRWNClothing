import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'


class Collection extends React.Component{


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
            </div>
        )
    }
}


export default Collection