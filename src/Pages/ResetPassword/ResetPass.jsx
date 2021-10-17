import React, { Component } from 'react'
import './ResetPass.css';
import UserServices from '../../services/UserServices';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Snackbar, IconButton } from '@mui/material';

const obj = new UserServices();

export class ResetPass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            password: "",
            confirmPassword: "",
            passError: false,
            confirmPassError: false,
            snackbaropen: false, 
            snackbarmsg: ""
        }
    }
    
    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

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
        
            let resetObj = {
                "newPassword": this.state.password,
                "confirmPassword": this.state.confirmPassword
            }
            console.log(resetObj);
            obj.reset(resetObj).then((response)=>{
                console.log(response);
                this.setState({snackbaropen:true, snackbarmsg: "Password is reset!"})
                var timer  = setTimeout(function(){
                    window.location = '/'
                }, 2000);
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Enter valid password!"})
            })
        } else {
            this.setState({snackbaropen:true, snackbarmsg: "Please enter data!"})
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
                <Snackbar
                anchorOrigin= {{vertical:'bottom', horizontal:'right'}}
                open = {this.state.snackbaropen}
                autoHideDuration = {6000}
                onClose = {this.snackbarClose}

                message = {<span id= "message_id">{this.state.snackbarmsg}</span>}
                action ={[
                <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                    X
                </IconButton>
                ]}
                />
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
                </div>
                <div className="pass_confirm5">
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
