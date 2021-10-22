import React, { Component } from 'react'
import '../TakeNotes/TakeNotes.css';
import UserServices from '../../services/UserServices';
import Icons from '../Icons/Icons';
import { Snackbar, IconButton, Button} from '@mui/material';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlined from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlined from '@mui/icons-material/InsertPhotoOutlined'
// import PushPinOutlined from '@mui/icons-material/PushPinOutlined';
// import UndoOutlined from '@mui/icons-material/UndoOutlined';
// import RedoOutlined from '@mui/icons-material/RedoOutlined';

const obj = new UserServices();

export class TakeNotes extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            hide: true,
            title: "",
            description: "",
            color:"#ffffff",
            isArchived: false,
            isDeleted : false,
            snackbaropen: false, 
            snackbarmsg: "",
        }

    }

    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    };

    handleColor=(data)=>{
        this.setState({
            color:data
        });
    }

    handleClose = () => {
        this.setState({
            isArchived: true
        })
    }

    expand = () => {
        this.setState({
            show: true,
            hide: false,
        });
    };

    normal = () => {
        this.setState({
            show: false,
            hide: true,           
        });

        if(this.state.description != "" && this.state.title != "") {

        let notesObj = {
            "title": this.state.title,
            "description": this.state.description,
            "color": this.state.color,
            "isArchived": this.state.isArchived,
            "isDeleted" : this.state.isDeleted,
        }
        console.log(notesObj);
        obj.notes(notesObj).then((response)=>{
            console.log(response);
            localStorage.setItem("token", response.data.id);
            this.props.displayNote();
            this.setState({snackbaropen:true, color:"#FFFFFF", title: "", description:"", snackbarmsg: "Data Added!"});
        }).catch((error)=>{
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Data not Added!"})
        })
    }
    };

    change = (e) => {
        // console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div className="notes_main" >
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
            {this.state.hide && (
                <form id="form1">         
                    <p>
                        <input className="forminput2" aria-label="empty textarea" placeholder="Take a note..."  onClick={this.expand} />
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
            {this.state.show && (
                <form id="form2"style={{
                    backgroundColor: this.state.color
                }}>
                    <p>
                        <input
                            className="forminput1"
                            type="text"
                            placeholder="Title"
                            name="title"
                            id="title"
                            onChange={e => this.change(e)}
                            style={{
                                backgroundColor: this.state.color
                            }}
                        />
                        <input 
                            className="forminput2" 
                            name="description" 
                            id="description" 
                            aria-label="empty textarea" 
                            placeholder="Take a Note..." 
                            onChange={e => this.change(e)}
                            style={{
                                backgroundColor: this.state.color,
                            }}
                        />
                    </p>
                    <div id="icons">
                        <Icons colorval="create"
                        val={this.state}  
                        getColor={this.handleColor}
                        archiveCreate={this.handleClose}
                        // displayNote = {this.props.display}
                        />
                        {/* <UndoOutlined style={{ fontSize: "large" }}></UndoOutlined>
                        <RedoOutlined style={{ fontSize: "large" }}></RedoOutlined> */}
                        <Button className="button1" onClick ={this.normal}>Close</Button>
                    </div>
                </form>
            )}
        </div>
        )
    }
}

export default TakeNotes