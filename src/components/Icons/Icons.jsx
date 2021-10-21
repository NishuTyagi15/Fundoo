import React, { Component } from 'react';
import '../Icons/Icons.css';
import ColorPalette from './ColorPalette';
import UserServices from '../../services/UserServices';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddAlertOutlined from '@mui/icons-material/AddAlertOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
// import ColorLensOutlined from '@mui/icons-material/ColorLensOutlined';
import ImageOutlined from '@mui/icons-material/ImageOutlined';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';

const obj = new UserServices();

export class Icons extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            anchorEl: null,
            openStatus: false,
        }
    }
    
    
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
        }).catch(error => {
            console.log(error);
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
        }).catch(error => {
            console.log(error);
        })
        console.log(deleteNote);
    }

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


    render() {
        return (
            <>
                <AddAlertOutlined
                    style={{ fontSize: "large" }}
                />
                <PersonAddOutlined
                    style={{ fontSize: "large" }}
                />
                <ColorPalette
                    putColor={(Data) => {
                    this.onSetColor(Data);
                }} />
                <ImageOutlined
                    style={{ fontSize: "large" }}
                />
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
                <MoreVertOutlined
                    style={{ fontSize: "large" }}
                    onClick={this.menuClick}
                />
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
            </>
        )
    }
}

export default Icons