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

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    onSetColor = (color) => {
        if (this.props.colorval === "update") {
            let Data = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(Data).then((data) => {
                console.log('Color Note', data);
            }).catch(error => {
                console.log('Color error', error);
            });
            console.log("Color", Data);
        } else {
            this.props.getColor(color.code);
        }
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
                    style={{ fontSize: "large" }}
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
