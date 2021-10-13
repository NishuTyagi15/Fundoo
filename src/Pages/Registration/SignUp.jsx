import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React, { Component } from 'react'
import '../Registration/SignUp.css'
import account from '../Registration/account.svg'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fName: "",
            lName: "",
            email: "",
            password: "",
            confirmPassword: "",
            fNameError: false,
            lNameError: false,
            emailError: false,
            passError: false,
            confirmPasswordError: false,
        };
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.fNameError = this.state.fName !=='' ? false : true;
        errors.lNameError = this.state.lName !=='' ? false : true;
        errors.emailError = this.state.email !== '' ? false : true; 
        errors.passError = this.state.password !== '' ? false : true; 
        errors.confirmPasswordError = this.state.confirmPassword !== '' ? false : true; 

        this.setState({
            ...errors
        })
        return isError = errors.fNameError || errors.lNameError || errors.emailError || errors.passError || errors.confirmPasswordError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div className='signup_main'>
            <div className='left_div'>
                <div className='Fundoo_signup'>
                    <p className='first'>F</p>
                    <p className='second'>u</p>
                    <p className='third'>n</p>
                    <p className='first'>d</p>
                    <p className='fifth'>o</p>
                    <p className='second'>o</p>
                </div>
                <div className='title'>Create your Fundoo Account</div>
                <div className='name_textbox'>
                    <TextField 
                        className="name"
                        autoFocus={true} 
                        name="fName" 
                        type="text" 
                        id="first_name" 
                        label="First name" 
                        variant="outlined" 
                        size='small'
                        error={this.state.fNameError}
                        onChange={e => this.change(e)}
                        helperText={this.state.fNameError ? "Enter first name" : ''} 
                        />
                    <TextField 
                        className="name" 
                        name="lName" 
                        type="text" 
                        id="last_name" 
                        label="Last name" 
                        variant="outlined" 
                        size='small'
                        error={this.state.lNameError}
                        onChange={e => this.change(e)}
                        helperText={this.state.lNameError ? "Enter last name" : ''}
                        />
                </div>
                <div className='user_name'>
                    <OutlinedInput 
                        className="user2"
                        type="text" 
                        id="user" 
                        name="email"
                        label= "Username"
                        placeholder="Username"
                        endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                        error={this.state.emailError}
                        onChange={e => this.change(e)}
                        FormHelperText={this.state.emailError ? "Sorry, your username must be between 6 and 30 characters long" : ''} 
                        />
                    <div className='helper_text'>You can use letters, numbers & periods</div>
                </div>
                <div>
                    <button className='button1'>Use my current email address instead</button>
                </div>
                <div className='password_text'>
                    <TextField 
                        id="password" 
                        name="password"
                        label="Password" 
                        variant="outlined" 
                        size='small'
                        inputProps={{
                            minLength: 8,
                        }}                    
                        error={this.state.passError}
                        onChange={e => this.change(e)}
                        helperText={this.state.passError ? "Enter min 8 characters" : ''} 
                        />
                    <TextField 
                        id="confirm"
                        name="confirmPassword" 
                        label="Confirm" 
                        variant="outlined" 
                        size='small' 
                        error={this.state.confirmPasswordError}
                        onChange={e => this.change(e)}
                        helperText={this.state.confirmPasswordError ? "Password didn't match" : ''} 
                        />
                </div>
                <div className='para2'>
                    Use 8 or more characters with a mix of letters, numbers & symbols
                </div>
                <div className='checkbox'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Show password" />
                </FormGroup>
                </div>
                <div className="options2">
                    <Link to={'/'} className="text2" underline="none">Sign in instead</Link>
                    <Button className="next2" variant="contained" onClick={this.next}>Next</Button>
                </div>
            </div>
            <div className="right_div">            
                <img src={account} className='Account_logo' alt="acc_logo" />
                <div className='img_text'>One account. All of Fundoo working for you.</div>
            </div>
        </div>
        );
    }
}

export default SignUp;
