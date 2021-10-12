import React, { Component } from 'react'
import './ResetPass.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class ResetPass extends Component {
    render() {
        return (
            <div className="reset_pass">
            <div className='Fundoo_reset'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading3">Reset your Password</div>
            <div className="sub_heading3">Enter your new password</div>
            <div className="pass_confirm3">
                <TextField className="pass3" id="pass" label="New password" variant="outlined" size="small"/>
                <div className="blue_text3"></div>
                <TextField className="pass3" id="confirm_pass" label="Confirm password" variant="outlined" size="small"/>
            </div>
            <Button className="next3" variant = "contained">Next</Button>
        </div>
        )
    }
}

export default ResetPass