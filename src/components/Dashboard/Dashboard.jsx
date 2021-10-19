import React, { Component } from 'react'
import TakeNotes from '../TakeNotes/TakeNotes';
import DisplayNotes from '../DisplayNotes/DisplayNotes';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <TakeNotes/>
                <DisplayNotes/>
            </div>
        )
    }
}

export default Dashboard