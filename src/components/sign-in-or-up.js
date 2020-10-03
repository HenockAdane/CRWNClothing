import React from "react"
import SignIn from "./sign-in"
import SignUp from "./sign-up"

class SignInOrUp extends React.Component{


    render(){
        return (<div className="SignIn-Up-Container">
        <SignIn />
        <SignUp />
        </div>)
    }
}


export default SignInOrUp