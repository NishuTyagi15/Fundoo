import React, { Component } from 'react'
import Icons from "../Icons/Icons";
import UserServices from '../../services/UserServices';

const obj = new UserServices();

export class Notes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newNote: false,
        }
    }

    newNotes1 = () => {
        this.setState({newNote: true});
    };
    
    render() {
        const {classes} = this.props;
        return (
            <div className="notes" onMouseEnter={this.newNotes1}>
            <div className="note1_content" style={{
                backgroundColor: this.props.index.color,
            }}>
                <h4>{this.props.index.title}</h4>
                <div className="content1">{this.props.index.description}</div>
                <Icons colorval="update"
                val = {this.props.index}
                id= {this.props.index.id}
                />
            </div>
        </div>
        )
    }
}

export default Notes;
