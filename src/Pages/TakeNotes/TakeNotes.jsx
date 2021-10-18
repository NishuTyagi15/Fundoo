import React from 'react'
import { useState } from "react";
import '../TakeNotes/TakeNotes.css';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlined from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlined from '@mui/icons-material/InsertPhotoOutlined'
// import PushPinOutlined from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlined from '@mui/icons-material/AddAlertOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
import ColorLensOutlined from '@mui/icons-material/ColorLensOutlined';
import ImageOutlined from '@mui/icons-material/ImageOutlined';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import UndoOutlined from '@mui/icons-material/UndoOutlined';
import RedoOutlined from '@mui/icons-material/RedoOutlined';

const TakeNotes = () => {

    const [show, setShow] = useState(false);
    const [hide, sethide] = useState(true); 

    const expand = () => {
        setShow(true);
        sethide(false);
    };

    const normal = () => {
        setShow(false);
        sethide(true);
    };


    return (
        <div className="notes_main" >
            {hide && (
                <form id="form1">         
                    <p>
                        <input className="forminput2" aria-label="empty textarea" placeholder="Take a note..."  onClick={expand} />
                        <IconButton size="large" >
                            <CheckBoxOutlined className="check"/>
                        </IconButton>
                        <IconButton size="large" >
                            <BrushOutlined className="brush"/>
                        </IconButton>
                        <IconButton size="large" >
                            <InsertPhotoOutlined className="image"/>
                        </IconButton>
                    </p>
                </form>
            )}
            {show && (
                <form id="form2">
                    <p>
                        <input
                            className="forminput1"
                            type="text"
                            placeholder="Title"
                            name="title"
                        />
                        <input className="forminput2" aria-label="empty textarea" placeholder="Take a Note..." />
                    </p>
                    <div id="icons">
                        <AddAlertOutlined
                            style={{ fontSize: "large" }}
                        >
                        </AddAlertOutlined>
                        <PersonAddOutlined
                            style={{ fontSize: "large" }}
                        >
                        </PersonAddOutlined>
                        <ColorLensOutlined
                            style={{ fontSize: "large" }}
                        >   
                        </ColorLensOutlined>
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
                        <UndoOutlined style={{ fontSize: "large" }}></UndoOutlined>
                        <RedoOutlined style={{ fontSize: "large" }}></RedoOutlined>
                        <Button className="button" onClick = {normal}>Close</Button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default TakeNotes
