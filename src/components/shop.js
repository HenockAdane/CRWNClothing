import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import ShopData from './shop-data';
import Collection from "./collections-preview"

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            collection: ShopData
        }
    }

    render(){

        const Preview = this.state.collection.map((a)=>{
            return (<div><h2 className="collection-title">{a.title}</h2><div className="collection-container">
                    
                    {a.items.map((b, i)=>{
                        if (i <=3){
                            return (
                            <Collection img={b.imageUrl} title={b.name} price={b.price} />
                        )
                        }
                    })}</div></div>
            )
        })
        return Preview
    }
}

export default ShopPage