import React, { Component } from 'react'
import DisplayNotes from '../../components/DisplayNotes/DisplayNotes';
import Home from '../../components/Home/Home';
import UserServices from "../../services/UserServices";
import '../Archive/Archive.css';

const obj = new UserServices();

export class Archive extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notesarr: []
        }
    }

    archiveNote = () => {
        obj.getArchiveNotes()
        .then((response) => {
            var newarr=[]
            response.data.data.data.filter((index) => {
                if(index.isArchived === true && index.isDeleted !=true) {
                    newarr.push(index)
                }
            })
            this.setState({
                notesarr: newarr
            })
        })
        .catch((error) => {
          console.log(error);
        });
    }
    componentDidMount() {
        this.archiveNote();
    }


    render() {
        console.log(this.state.notesarr);
        return (
            <div>
                {/* <Home/> */}
                <div className="arcdisplay">
                    <DisplayNotes notesarr = {this.state.notesarr} displayNote={this.archiveNote}/>
                </div>
            </div>
        )
    }
}

export default Archive