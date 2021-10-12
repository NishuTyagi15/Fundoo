import React from 'react'
import './ResetPass.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ForgotPass = () => {
    return (
        <div className="forgot_pass">
            <div className='Fundoo_logo'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading">Reset your Password</div>
            <div className="sub_heading">Enter your new password</div>
            <div className="pass_confirm">
                <TextField className="pass" id="pass" label="New password" variant="outlined" size="small"/>
                <div className="blue_text"></div>
                <TextField className="pass" id="confirm_pass" label="Confirm password" variant="outlined" size="small"/>
            </div>
            <Button className="next" variant = "contained">Next</Button>
        </div>
    )
}

export default ForgotPass
