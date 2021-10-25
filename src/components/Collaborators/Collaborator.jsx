import React, { Component } from 'react';
import UserServices from '../../services/UserServices';
import '../Collaborators/Collaborators.scss';
import pic from '../../pages/Home/pic.jpg';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Paper, Menu } from '@material-ui/core';

const obj = new UserServices();

class Collaborator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            collaborators: '',
            collabData: [],
            anchorEl: null,
        }
    }

    handleInput = (e) => {
        let colabData = {
            searchWord: e.target.value
        }
        this.setState({
            collaborators: e.target.value,
        });
        if (e.target.value !== "") {
            obj.searchCollab(colabData).then((response) => {
                this.setState({
                    collabData: response.data.data.details
                });
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        }
    }

    closeDialog = () => {
        this.props.getCloseStatus(false);
    }

    render() {
        const { classes } = this.props;
        const userData = this.state.collabData.map((values, index) => {
            return (
                <MenuItem key={index}>
                    {values.email}
                </MenuItem>
            )
        })
        return (
            <div>
                <Dialog
                    open={this.props.open} onClose={this.closeDialog}>
                    <div className="dialog_body">
                        <div className="collab">
                            Collaborators
                        </div>
                        <div className="collab_details">
                            <div className="owner">
                                <div className="avatar_img">
                                    <Avatar alt="" src={pic} />
                                </div>
                                <div className="owner-title">
                                    <div className="name_txt">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}  (Owner)</div>
                                    <div className="email_txt">{localStorage.getItem('email')}</div>
                                </div>
                            </div>
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
                                <div>
                                    <Paper elevation={24}>
                                        <MenuList className="email_list">{userData}</MenuList>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                        <div className='collab_btn'>
                            <span className="save">Save</span>
                            <span className="cancel_btn" onClick={this.closeDialog}>Cancel</span>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Collaborator;