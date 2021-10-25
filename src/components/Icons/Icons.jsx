import React, { Component } from 'react';
import '../Icons/Icons.css';
import ColorPalette from './ColorPalette';
import UserServices from '../../services/UserServices';
import Collaborators from '../Collaborators/Collaborator'
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Snackbar, IconButton} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import AddAlertOutlined from '@mui/icons-material/AddAlertOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
import ImageOutlined from '@mui/icons-material/ImageOutlined';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';

const obj = new UserServices();

export class Icons extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            anchorEl: null,
            open: false,
            openStatus: false,
            snackbaropen: false, 
            snackbarmsg: "",
        }
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    };
      
    onSetColor = (color) => {
        if (this.props.colorval === "update") {
            let colorData = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(colorData).then((response) => {
                console.log(response);
                this.props.displayNote();
            }).catch(error => {
                console.log(error);
            });
            console.log(color);
        } else {
            this.props.getColor(color.code);
        }
    }

    onArchive = () => {
        let archive = {
            noteIdList: [this.props.val.id],
            isArchived: true,
        };
        
        obj.archiveNotes(archive).then((response) => {
            console.log(response);
            this.props.displayNote();
            this.props.handleClose()
            this.setState({snackbaropen:true, snackbarmsg: "Note is Archived!"})
        }).catch(error => {
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Note is not Archived!"})
            this.props.handleClose()
        })
        console.log(archive);
    }

    onDelete = () => {
        let deleteNote = {
            noteIdList: [this.props.val.id],
            isDeleted: true,
        };
        
        obj.deleteNotes(deleteNote).then((response) => {
            console.log(response);
            this.props.displayNote();
            this.props.handleClose()
            this.setState({snackbaropen:true, open: false, snackbarmsg: "Note Deleted!"})
        }).catch(error => {
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Note is Not Deleted!"})
            this.props.handleClose()
        })
        console.log(deleteNote);
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

    menuClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    dialogopen = () => {
        this.setState({
            openStatus: true
        });
    }

    onSetStatus = (val) => {
        this.setState({
            openStatus: val
        });
    }

    render() {
        return (
            <>
                <Tooltip title="Reminder">
                <AddAlertOutlined
                    style={{ fontSize: "large" }}
                />
                </Tooltip>
                <Tooltip title="Collaborator">

                <PersonAddOutlined
                    onClick={this.dialogopen}
                    style={{ fontSize: "large" }}
                />
                </Tooltip>
                <Tooltip title="Color">
                <ColorPalette
                    className="colorpalette"
                    putColor={(Data) => {
                    this.onSetColor(Data);
                }} />
                </Tooltip>
                <Tooltip title="Image">
                <ImageOutlined
                    style={{ fontSize: "large" }}
                />
                </Tooltip>
                <Tooltip title="Archive">
                <ArchiveOutlined
                    style={{ fontSize: "large" }} onClick={() => {
                        if (this.props.colorval === "update") {
                            this.onArchive()
                        }
                        else {
                            this.props.archiveCreate()
                        }
                    }}
                />
                </Tooltip>
                <Tooltip title="Menu">
                <MoreVertOutlined
                    style={{ fontSize: "large" }}
                    onClick={this.menuClick}
                />
                </Tooltip>

                <Menu
                    id="simple-menu"
                    keepMounted
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    open={Boolean(this.state.anchorEl)}
                >
                    <MenuItem className="popover" onClick={() => {
                        if (this.props.colorval === "update") {
                            this.onDelete()
                            this.handleClose()
                            // this.setState({
                            //     open1: false
                            // })
                        }
                        else{
                            this.props.deleteCreate()
                        }
                    }
                    }>Delete Note</MenuItem>
                    <MenuItem >Add Label</MenuItem>
                    <MenuItem >Add Drawing</MenuItem>
                    <MenuItem >Make a Copy</MenuItem>
                    <MenuItem >Show Checkboxes</MenuItem>
                    <MenuItem >Copy to Google Docs</MenuItem>
                </Menu>
                <Snackbar
                    anchorOrigin= {{vertical:'bottom', horizontal:'right'}}
                    open = {this.state.snackbaropen}
                    autoHideDuration = {3000}
                    onClose = {this.snackbarClose}
                    message = {<span id= "message_id">{this.state.snackbarmsg}</span>}
                    action ={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                        X
                    </IconButton>
                    ]}
                />
                <Collaborators
                    open={this.state.openStatus}
                    getCloseStatus={(Data) => {
                        this.onSetStatus(Data);
                    }}
                />
            </>
        )
    }
}

export default Icons