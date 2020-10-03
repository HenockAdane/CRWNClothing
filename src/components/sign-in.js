import React from "react"
import Button from "./button"

import {googleLogin} from "../../src/firebase"
import {SignInWithEmailAndPassword} from "../firebase"


class SignIn extends React.Component{
    
    constructor(){
        super()
        this.state = {
            email:"",
            password:""
        }

        this.onSub = this.onSub.bind(this)
        this.changeE = this.changeE.bind(this)
        this.SignIn = this.SignIn.bind(this)
    }

    onSub(e){
        e.preventDefault();

        this.setState({
            email:"",
            password:""
        })
    }

    changeE(e){
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>console.log(this.state))
    }

    SignIn(){
        SignInWithEmailAndPassword(this.state.email, this.state.password)
    }

    render(){
        return <div className="signIn">
            <h4>I Already Have An Account</h4>
            <p>Sign in with your email and password.</p>

            <form className="signIn-form" onSubmit={this.onSub}>
                <label for="email">Email</label>
                <input name="email" type="email" value={this.state.email} onChange={this.changeE} required />
                
                <label for="password">Password</label>
                <input name="password" type="password" value={this.state.password} onChange={this.changeE} required />
                

                <Button type="submit" click={this.SignIn} text="Submit Form" />
                <Button class={"google-login"} type="button" click={googleLogin} text="Google Sign-In" />
            </form>
        </div>
    }
}

export default SignIn