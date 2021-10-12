import React, { Component } from 'react'
import './ResetPass.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class ResetPass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            password: "",
            confirmPassword: "",
            passError: false,
            confirmPassError: false,
        }
    }
    
    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.passError = this.state.password !=='' ? false : true;
        errors.confirmPassError = this.state.confirmPassword !=='' ? false : true;
        this.setState({
            ...errors
        })
        return isError = errors.passError || errors.confirmPassError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

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
                <TextField 
                    className="pass3" 
                    name="password"
                    id="pass" 
                    label="New password" 
                    variant="outlined" 
                    size="small"
                    error={this.state.passError}
                    onChange={e => this.change(e)}
                    helperText={this.state.passError ? "Enter new password" : ''}
                    />
                <div className="blue_text3"></div>
                <TextField 
                    className="pass3"
                    name="confirmPassword" 
                    id="confirm_pass" 
                    label="Confirm password" 
                    variant="outlined" 
                    size="small"
                    error={this.state.confirmPassError}
                    onChange={e => this.change(e)}
                    helperText={this.state.confirmPassError ? "Enter a confirm password" : ''}
                    />
            </div>
            <Button className="next3" variant = "contained" onClick={this.next}>Next</Button>
        </div>
        )
    }
}

export default ResetPass
