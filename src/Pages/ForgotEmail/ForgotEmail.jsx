import React, { Component } from 'react'
import '../ForgotEmail/ForgotEmail.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class ForgotEmail extends Component {
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
                <TextField className="email4" id="email" label="Phone number or email" variant="outlined" />
            </div>
            <Button className="next4" variant = "contained">Next</Button>
        </div>
        )
    }
}

export default ForgotEmail
