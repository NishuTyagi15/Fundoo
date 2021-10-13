import React, { Component } from 'react'
import '../ForgotEmail/ForgotEmail.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import forgot from '../../services/Axiosforgot';

export class ForgotEmail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            emailError: "",
        }
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !=='' ? false : true;
        this.setState({
            ...errors
        })
        return isError = errors.emailError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }
        let forgotObj = {
            "email": this.state.email,
            "service": "advance"
        }
        console.log(forgotObj);
        forgot(forgotObj).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        })
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
    render() {
        return (
        <div className="forgot_email">
            <div className='Fundoo_forgot'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading4">Find your email</div>
            <div className="sub_heading4">Enter your phone number or recovery email</div>
            <div className="email_confirm4">
                <TextField 
                    className="email4" 
                    name="email"
                    id="email" 
                    label="Phone number or email" 
                    variant="outlined" 
                    error={this.state.emailError}
                    onChange={e => this.change(e)}
                    helperText={this.state.emailError ? "Enter a email" : ''}
                    />
            </div>
            <Button className="next4" variant = "contained" onClick={this.next}>Next</Button>
        </div>
        )
    }
}

export default ForgotEmail
