import React from 'react';
import { Switch, Route, Link, withRouter} from 'react-router-dom'


class MenuItem extends React.Component{




    render(){
        return(
              
            <div className="menu-items" onClick={()=> this.props.history.push(`/${this.props.link}`)}>

            <div className="e" style={{backgroundImage: `url(${this.props.img})`
            }}>
                <div className="menu-items-content">
                    <h3 className="menu-items-title">{this.props.title}</h3>
                    <span className="menu-items-subtitle">{this.props.subTitle}</span>
                </div>
                </div>
            </div>
            
        )
    }

}

export default withRouter(MenuItem)