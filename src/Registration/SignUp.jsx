import React from 'react'
import TextField from '@mui/material/TextField';


const SignUp = () => {
    return (
        <div className='signup_main'>
            <div className='title'>Create your Fundoo Account</div>
            <div className='name_textbox'>
                <TextField id="first_name" label="First name" variant="outlined" size='small' />
                <TextField id="last_name" label="Last name" variant="outlined" size='small'/>
            </div>
            <div className='user_name'>
                <TextField id="username" label="Username" variant="outlined" size='small'/>
            </div>
        </div>
    )
}

export default SignUp
