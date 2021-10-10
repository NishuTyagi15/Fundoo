import React from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {
    return (
        <div className='signup_main'>
            <div className='title'>Create your Fundoo Account</div>
            <div className='name_textbox'>
                <TextField id="first_name" label="First name" variant="outlined" size='small' />
                <TextField id="last_name" label="Last name" variant="outlined" size='small'/>
            </div>
            <div className='user_name'>
                <TextField style={{ width: '25vw'}} id="username" label="Username" variant="outlined" size='small' value='@gmail.com' />
                <div className='helper_text'>You can use letters, numbers & periods</div>
            </div>
            <div>
                <button className='button1'>Use my current email address instead</button>
            </div>
            <div className='password_text'>
                <TextField id="password" label="Password" variant="outlined" size='small' />
                <TextField id="confirm" label="Confirm" variant="outlined" size='small' />
            </div>
            <div className='para'>
                Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <div className='checkbox'>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
            </FormGroup>
            </div>

            <div className="options">
                <button className="text">Sign in instead</button>
                <button className="next">Next</button>
            </div>
            <div className='img_text'>
                One account. All of Fundoo working for you.
            </div>
        </div>
    )
}

export default SignUp
