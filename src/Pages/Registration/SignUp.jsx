import React from 'react'
import '../Registration/SignUp.css'
import account from '../Registration/account.svg'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';


const SignUp = () => {
    return (
        <div className='signup_main'>
            <div className='left_div'>
                <div className='Fundoo_logo'>
                    <p className='first'>F</p>
                    <p className='second'>u</p>
                    <p className='third'>n</p>
                    <p className='first'>d</p>
                    <p className='fifth'>o</p>
                    <p className='second'>o</p>
                </div>
                <div className='title'>Create your Fundoo Account</div>
                <div className='name_textbox'>
                    <TextField className="name" id="first_name" label="First name" variant="outlined" size='small' />
                    <TextField className="name" id="last_name" label="Last name" variant="outlined" size='small'/>
                </div>
                <div className='user_name'>
                    <OutlinedInput className="user" id="user" label= "Username"
                        endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>} />
                    {/* <TextField style={{ width: '25vw'}} id="username" label="Username" variant="outlined" size='small'>
                    </TextField> */}
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
                    <FormControlLabel control={<Checkbox />} label="Show password" />
                </FormGroup>
                </div>
                <div className="options">
                    <button className="text">Sign in instead</button>
                    <button className="next">Next</button>
                </div>
            </div>
            <div className="right_div">            
                <img src={account} className='Account_logo' alt="acc_logo" />
                <div className='img_text'>One account. All of Fundoo working for you.</div>
            </div>
        </div>
    )
}

export default SignUp
