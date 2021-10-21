import React, { Component } from 'react';
import '../Icons/Icons.css';
import ColorPalette from './ColorPalette';
import UserServices from '../../services/UserServices';
import AddAlertOutlined from '@mui/icons-material/AddAlertOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
// import ColorLensOutlined from '@mui/icons-material/ColorLensOutlined';
import ImageOutlined from '@mui/icons-material/ImageOutlined';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';

const obj = new UserServices();

export class Icons extends Component {
    
    onSetColor = (color) => {
        if (this.props.colorval === "update") {
            let colorData = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(colorData).then((response) => {
                console.log(response);
                window.location.reload();
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
        }).catch(error => {
            console.log(error);
        })
        console.log(archive);
    }


    render() {
        return (
            <>
                <AddAlertOutlined
                    style={{ fontSize: "large" }}
                >
                </AddAlertOutlined>
                <PersonAddOutlined
                    style={{ fontSize: "large" }}
                >
                </PersonAddOutlined>
                <ColorPalette
                    putColor={(Data) => {
                    this.onSetColor(Data);
                }} />
                <ImageOutlined
                    style={{ fontSize: "large" }}
                >
                </ImageOutlined>
                <ArchiveOutlined
                    style={{ fontSize: "large" }} onClick={() => {
                        if (this.props.colorval === "update") {
                            this.onArchive()
                        }
                        else {
                            this.props.archiveCreate()
                        }
                    }}
                >
                </ArchiveOutlined>
                <MoreVertOutlined
                    style={{ fontSize: "large" }}
                >
                </MoreVertOutlined>
            </>
        )
    }
}

export default Icons