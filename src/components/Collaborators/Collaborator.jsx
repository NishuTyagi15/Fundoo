import React, { Component } from 'react';
import UserServices from '../../services/UserServices';
import '../Collaborators/Collaborators.scss';
import pic from '../../pages/Home/pic.jpg';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Paper, Menu, Stack} from '@mui/material';

const obj = new UserServices();

class Collaborator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            collaborators: '',
            collabData: [],
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
        const userData = this.state.collabData.map((val, index) => {
            return (
                <MenuItem key={index}>
                    {val.email}
                </MenuItem>
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
                            <div className="owner">
                                <div className="avatar_img">
                                    <Avatar alt="" src={pic} />
                                </div>
                                <div className="owner_title">
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
                            </div>
                            <Stack direction="row" spacing={2}>
                                <Paper>
                                    <MenuList
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        className="email_list"
                                    >
                                    {userData}        
                                    </MenuList> 
                                </Paper>
                            </Stack>
                        </div>
                        <div className='collab_btn'>
                            <Button>Save</Button>
                            <Button onClick={this.closeDialog}>Cancel</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Collaborator;