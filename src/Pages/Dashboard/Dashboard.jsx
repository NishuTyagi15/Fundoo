import React, { Component } from 'react'
import TakeNotes from '../../components/TakeNotes/TakeNotes';
import DisplayNotes from '../../components/DisplayNotes/DisplayNotes'
import UserServices from '../../services/UserServices';

const obj = new UserServices();

export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notesarr: []
        }
    }

    displayNote = () => {
        obj.displayNotes()
        .then((response) => {
            var newarr=[]
            response.data.data.data.filter((index) => {
                if(index.isArchived != true && index.isDeleted !=true) {
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
        this.displayNote();
    }


    render() {
        console.log(this.state.notesarr);
        return (
            <div>
                <TakeNotes displayNote={this.displayNote}/>
                <DisplayNotes notesarr = {this.state.notesarr} displayNote={this.displayNote}/>
            </div>
        )
    }
}

export default Dashboard