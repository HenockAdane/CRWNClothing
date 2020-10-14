import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
// import MenuItem from "./components/menu-item"
import Directory from "./components/directory"
import ShopPage from "./components/shop"
import Header from "./components/header"
import SignInOrUp from "./components/sign-in-or-up"
import { auth, CreateUserProfile } from "./firebase"
import { connect } from "react-redux"

import { setCurrentUser } from "./Redux/reducers/userReducer"
import Checkout from './components/checkout';

class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

      this.props.setCurrentUser(user)
      CreateUserProfile(user)
      // console.log(user.providerData)
      console.log(this.props.currentUser)

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
    console.log(this.unsubscribeFromAuth)
  }





  render(){
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact={true} path="/" component={Directory} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/signinandup" render={()=> this.props.currentUser ? (<Redirect to="/" />) : <SignInOrUp />} />
          <Route exact={true} path="/checkout" component={Checkout} />
        </Switch>
        {/* <Link to="/hats">CLICK</Link>   */}
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {connect} from "react-redux"
// import {add} from "./reducers/counter"
// import {minus} from "./reducers/counter"
// import { logInAction, logOutAction } from './reducers/loginReducer';




// class App extends React.Component{



//   log = () =>{
//     if (this.props.signIn === "false"){
//       return this.props.logIn()
//     }

//     else{
//       return this.props.logOut()
//     }
//   }

//   render(){

//     return (
//       <div>

//         <button onClick={this.props.minus}>-</button><h1>{this.props.count}
//         </h1><button onClick={this.props.add}>+</button>


//         <button onClick={this.log}>{this.props.signIn === "false" ? "SIGN IN" : "SIGN OUT"}</button>

//       </div>

//     )
//   }
// }

// // const mapStateToProps = (state) => {
// //   return {
// //     // status: state.loginStatus.name,
// //     // num: state.countAction.count
// //   }
// // }

// const mapStateToProps = (state) => {
//   return {
//     count: state.counterReducer.count,
//     signIn: state.loginReducer.signIn
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // checkStatus: (name) => dispatch(loginAction(name)),
//     // add: ()=> dispatch(add()),
//     // minus: () => dispatch(minus())
//     add: ()=> dispatch(add()),
//     minus: ()=> dispatch(minus()),
//     logIn: ()=> dispatch(logInAction()),
//     logOut: ()=> dispatch(logOutAction())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

