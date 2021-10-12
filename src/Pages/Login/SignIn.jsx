import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React, { Component } from 'react'
import '../Login/SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passError: false,
        }
    }
    
    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !=='' ? false : true;
        errors.passError = this.state.password !=='' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.emailError || errors.passError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
        <div className="signin_main">
            <div className='Fundoo_signin'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading1">Sign in</div>
            <div className="sub_heading1">Use your Fundoo Account</div>
            <div className="email_phone1">
                <TextField 
                    className="email1" 
                    name="email"
                    id="email" 
                    label="Email or phone" 
                    variant="outlined" 
                    size="small"
                    error={this.state.emailError}
                    onChange={e => this.change(e)}
                    helperText={this.state.emailError ? "Enter email or phone" : ''} 
                    />
                    {/* <div>  <br/>   </div>] */}
                <Link to= {'/forgotemail'} className="blue_text1" underline="none">Forgot email?</Link>
                <TextField 
                    className="pass1" 
                    name="password"
                    id="pass" 
                    label="Password" 
                    variant="outlined" 
                    size="small"
                    error={this.state.passError}
                    onChange={e => this.change(e)}
                    helperText={this.state.passError ? "Enter a password" : ''} 
                    />
                <div className="blue_text1">Forgot password?</div>
                <div className="para_guest">Not your computer? Use Guest mode to sign in privately.</div>
                <div className="para_private">Not your computer? Use a private browsing window to sign in.</div>
                <div className="blue_text1">Learn more</div>
            </div>
            <div className="options1">
                <Link to= {'/SignUp'} className="text1" underline="none">Create account</Link>
                <Button className="next1" variant = "contained" onClick={this.next}>Next</Button>
            </div>
        </div>
        )
    }
}

export default SignIn
