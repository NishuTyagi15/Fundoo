import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'
import '../Login/SignIn.css';
import signin from '../../services/AxiosSignin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Snackbar, IconButton } from '@mui/material';

export class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passError: false,
            snackbaropen: false, 
            snackbarmsg: ""
        }
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };
    
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
            this.setState({snackbaropen:true, snackbarmsg: "This is a Success Message!"})
        } else {
            this.setState({snackbaropen:true, snackbarmsg: "This is a Failure Message!"})
        }

        let signinObj = {
            "email": this.state.email,
            "password": this.state.password,
        }
        console.log(signinObj);
        signin(signinObj).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        })
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
        <div className="signin_main">
            <Snackbar
            anchorOrigin= {{vertical:'bottom', horizontal:'right'}}
            open = {this.state.snackbaropen}
            autoHideDuration = {6000}
            onClose = {this.snackbarClose}

            message = {<span id= "message_id">{this.state.snackbarmsg}</span>}
            action ={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                X
            </IconButton>
            ]}
            />
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
            </div>
            {/* <div>  <br/>   </div>] */}
            <Link to= {'/forgotemail'} className="blue_text1" underline="none">Forgot email?</Link>
            <div className="pass_main">
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
                </div>
                <div className="blue_text2">Forgot password?</div>
                <div className="para_guest">Not your computer? Use Guest mode to sign in privately.</div>
                <div className="blue_text3">Learn more</div>
            <div className="options1">
                <Link to= {'/SignUp'} className="text1" underline="none">Create account</Link>
                <Button className="next1" variant = "contained" onClick={this.next}>Next</Button>
            </div>
        </div>
        )
    }
}

export default SignIn
