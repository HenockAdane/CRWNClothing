import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
// import MenuItem from "./components/menu-item"
import Directory from "./components/directory"
import ShopPage from "./components/shop"
import Header from "./components/header"
import SignInOrUp from "./components/sign-in-or-up"
import { auth, CreateUserProfile } from "./firebase"

class App extends React.Component{

  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      }, ()=>console.log(this.state.currentUser))
      CreateUserProfile(user)
      // console.log(user.providerData)

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
    console.log(this.unsubscribeFromAuth)
  }





  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={Directory} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/signinandup" component={SignInOrUp} />
        </Switch>
        {/* <Link to="/hats">CLICK</Link>   */}
      </div>

    )
  }
}

export default App;
