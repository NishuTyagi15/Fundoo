import React, { Component } from 'react'
import '../ForgotEmail/ForgotEmail.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserServices from '../../services/UserServices';
import { Snackbar, IconButton } from '@mui/material';

const obj = new UserServices();

export class ForgotEmail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            emailError: "",
            snackbaropen: false, 
            snackbarmsg: ""
        };
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !=='' ? false : true;
        this.setState({
            ...errors
        })
        return isError = errors.emailError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        
            let forgotObj = {
                "email": this.state.email,
            }
            console.log(forgotObj);
            obj.forgot(forgotObj).then((response)=>{
                console.log(response);
                this.setState({snackbaropen:true, snackbarmsg: "Sent link to email!"});
                // var timer  = setTimeout(function(){
                //     window.location = '/resetpassword'
                // }, 2000);
                // this.props.history.push("/resetpassword");
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Enter valid email!"})
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
        <div className="forgot_email">
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

            <div className='Fundoo_forgot'>
                <p className='first'>F</p>
                <p className='second'>u</p>
                <p className='third'>n</p>
                <p className='first'>d</p>
                <p className='fifth'>o</p>
                <p className='second'>o</p>
            </div>
            <div className="heading4">Find your email</div>
            <div className="sub_heading4">Enter your phone number or recovery email</div>
            <div className="email_confirm4">
                <TextField 
                    className="email4" 
                    name="email"
                    id="email" 
                    label="Phone number or email" 
                    variant="outlined" 
                    error={this.state.emailError}
                    onChange={e => this.change(e)}
                    helperText={this.state.emailError ? "Enter a email" : ''}
                    />
            </div>
            <Button className="next4" variant = "contained" onClick={this.next}>Next</Button>
        </div>
        )
    }
}

export default ForgotEmail
