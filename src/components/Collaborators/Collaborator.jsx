import React, { Component } from 'react';
import UserServices from '../../services/UserServices';
import '../Collaborators/Collaborators.scss';
import pic from '../../pages/Home/pic.jpg';
import { Paper, Stack} from '@mui/material';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CloseIcon from '@material-ui/icons/Close';

const obj = new UserServices();

class Collaborator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            collabData: [],
            cancel: false,
            collabarr: [
                {
                    firstName: localStorage.getItem('firstname'),
                    lastName: localStorage.getItem('lastname'),
                    email: localStorage.getItem('email'),
                    id: localStorage.getItem('token')
                }
            ],
        }
    }

    handleInput = (e) => {
        let colabData = {
            searchWord: e.target.value
        }
        this.setState({
            cancel: true
        });
        if (e.target.value != "") {
            obj.searchCollab(colabData).then((response) => {
                this.setState({
                    collabData: response.data.data.details,
                });
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        } else if(e.target.value === "") {
            this.onCancel()
        }
    }

    closeDialog = () => {
        this.props.getCloseStatus(false);
    }

    onCancel = () => {
        this.setState({
            collabData: [],
            cancel: false
        });
    }

    getDetails = (e) => {
        var newArray = this.state.collabarr.slice();    
        newArray.push(e);   
        this.setState({collabarr:newArray})
        this.setState({
            collabData: []
        });
        console.log(this.state.collabData);
    }

    saveCollab = () => {
        let get = this.state.collabarr.slice(1)
        this.props.getNotes(get)
        this.setState({
            collabData: []
        });
        this.props.getCloseStatus(false);
    }

    render() {
        const { classes } = this.props;
        const userData = this.state.collabData.map((val, index) => {
            return (
                <MenuItem key={index} onClick={(e) => this.getDetails(val)}>
                    {val.email}
                </MenuItem>
            )
        });

        const userList = this.state.collabarr.map((val, index) => {
            const chars = val.firstName.split('');
            return (
                <div className="owner">
                    <div className="avatar_img">
                    <Avatar alt={chars[0]} src={chars[0]} />
                    </div>
                    <div className="owner_title">
                        <div className="name_txt">{val.firstName} {val.lastName}</div>
                        <div className="email_txt">{val.email}</div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Dialog
                    open={this.props.open} onClose={this.closeDialog}>
                    <div className="dialog_body">
                        <div className="collab">
                            Collaborators
                        </div>
                        <div className="collab_details">
                            {userList}
                            {/* <div className="owner">
                                <div className="avatar_img">
                                    <Avatar alt="" src={pic} />
                                </div>
                                <div className="owner_title">
                                    <div className="name_txt">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}  (Owner)</div>
                                    <div className="email_txt">{localStorage.getItem('email')}</div>
                                </div>
                            </div> */}
                            <div className="search1">
                                <div className="plus_person">
                                    <PersonAddIcon /></div>
                                <TextField
                                    className="search_text"
                                    name="collaborators"
                                    multiline
                                    InputProps={{ disableUnderline: true }}
                                    placeholder="Person or email to share with"
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="on_close" style={{ display: this.state.cancel ? 'block' : 'none' }}>
                                    <CloseIcon onClick={this.onCancel} />
                            </div>
                            <Stack direction="row" spacing={2}>
                                <Paper className="main_list">
                                    <MenuList
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        className="email_list"
                                        List={this.state.collabData}
                                    >
                                    {userData}        
                                    </MenuList> 
                                </Paper>
                            </Stack>
                        </div>
                        <div className='collab_btn'>
                            <Button onClick={this.saveCollab}>Save</Button>
                            <Button onClick={this.closeDialog}>Cancel</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Collaborator;