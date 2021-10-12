import React, { Component } from 'react'
import '../Login/SignIn.css';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export class SignIn extends Component {
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
                <TextField className="email1" id="email" label="Email or phone" variant="outlined" size="small"/>
                <div className="blue_text1">Forgot email?</div>
                <TextField className="pass1" id="pass" label="Password" variant="outlined" size="small"/>
                <div className="blue_text1">Forgot password?</div>
                <div className="para_guest">Not your computer? Use Guest mode to sign in privately.</div>
                <div className="para_private">Not your computer? Use a private browsing window to sign in.</div>
                <div className="blue_text1">Learn more</div>
            </div>
            <div className="options1">
                <Link to= '../src/pages/Registration/SignUp' className="text1" underline="none">Create account</Link>
                <Button className="next1" variant = "contained">Next</Button>
            </div>
        </div>
        )
    }
}

export default SignIn
