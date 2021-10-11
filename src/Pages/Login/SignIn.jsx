import React from 'react'
import '../Login/SignIn.css';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


const SignIn = () => {
    return (
        <div className="signin_main">
            <div className='Fundoo_logo'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading">Sign in</div>
            <div className="sub_heading">Use your Fundoo Account</div>
            <div className="email_phone">
                <TextField className="email" id="email" label="Email or phone" variant="outlined" size="small"/>
                <div className="blue_text">Forgot email?</div>
                <TextField className="pass" id="pass" label="Password" variant="outlined" size="small"/>
                <div className="blue_text">Forgot password?</div>
                <div className="para_guest">Not your computer? Use Guest mode to sign in privately.</div>
                <div className="para_private">Not your computer? Use a private browsing window to sign in.</div>
                <div className="blue_text">Learn more</div>
            </div>
            <div className="options">
                <Link className="text" href="#" underline="none">Create account</Link>
                <Button className="next" variant = "contained">Next</Button>
            </div>
        </div>
    )
}

export default SignIn