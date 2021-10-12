import React from 'react'
import '../ForgotEmail/ForgotEmail.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ForgotEmail = () => {
    return (
        <div className="forgot_email">
            <div className='Fundoo_logo'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading">Find your email</div>
            <div className="sub_heading">Enter your phone number or recovery email</div>
            <div className="email_confirm">
                <TextField className="email" id="email" label="Phone number or email" variant="outlined" />
            </div>
            <Button className="next" variant = "contained">Next</Button>
        </div>
    )
}

export default ForgotEmail
