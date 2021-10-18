import React from 'react'
import '../DisplayNotes/DisplayNotes.css'

const DisplayNotes = () => {
    return (
        <div className="notes">
            <div className="note1_content">
                <h4>Details</h4>
                <div className="content1">email: tyaginis7@gmail.com</div>
                <div className="content2">pass: n@123</div>
            </div>
            <div className="note2_content">
                <h4>Discuss</h4>
                <div className="content3">1. Quantity</div>
                <div className="content4">2. Quality</div>
            </div>
      </div> 
    )
}

export default DisplayNotes