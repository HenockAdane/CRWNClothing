import React from "react"
import Button from "./button"
import {SignUpWithEmailAndPassword} from "../firebase"

class SignUp extends React.Component{

    constructor(){
        super()
        this.state ={
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        this.onSub = this.onSub.bind(this)
        this.changeE = this.changeE.bind(this)
        this.SignUp = this.SignUp.bind(this)
    }


    onSub(e){
        e.preventDefault();

        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }


    changeE(e){
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>console.log(this.state))
    }

    SignUp(){
        SignUpWithEmailAndPassword(this.state.displayName, this.state.email,this.state.password)
    }

    render(){
        return(
            <div className="signUp">
            <h4>I Do Not Have An Account</h4>
            <p>Sign Up with your email and password.</p>

            <form className="signUp-form" onSubmit={this.onSub}>
            
                <label for="displayName">FullName</label>
                <input name="displayName" type="text" value={this.state.displayName} onChange={this.changeE} required />

                <label for="email">Email</label>
                <input name="email" type="email" value={this.state.email} onChange={this.changeE} required />
                
                <label for="password">Password</label>
                <input name="password" type="password" value={this.state.password} onChange={this.changeE} required />

                <label for="Confirmpassword">Confirm Password</label>
                <input name="Confirmpassword" type="password" value={this.state.confirmpassword} onChange={this.changeE} required />


                <Button type="submit" click={this.SignUp} text="Sign Up" />

            </form>


            </div>
        )
    }
}

export default SignUp