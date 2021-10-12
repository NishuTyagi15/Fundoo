import React, { Component } from 'react'
import '../Registration/SignUp.css'
import account from '../Registration/account.svg'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const emailValidator = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
const passValidator= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

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
        errors.emailError = this.state.email !== (emailValidator.test(errors)) ? true : false; 
        errors.passError = this.state.password !== (passValidator.test(errors)) ? true : false; 

        this.setState({
            ...errors
        })
        return isError = errors.fNameError || errors.lNameError || errors.emailError || errors.passError
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
                        endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                        error={this.state.emailError}
                        onChange={e => this.change(e)}
                        helperText={this.state.emailError ? "Sorry, your username must be between 6 and 30 characters long" : ''} 
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
                        error={this.state.passError}
                        onChange={e => this.change(e)}
                        helperText={this.state.passError ? "Enter a password" : ''} 
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
                    <Link className="text2" href="#" underline="none">Sign in instead</Link>
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
