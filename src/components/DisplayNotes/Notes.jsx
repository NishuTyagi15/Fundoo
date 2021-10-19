import React from "react";
import { useState } from "react";
import DisplayNotes from "./DisplayNotes";

const Notes = (props) => {
  
    const [newNote, setNewNote] = useState(false);

    const newNote2 = () => {
        setNewNote(!newNote);
    };

 

    return (
        <div className="notes_content">
        <div className="notes" onMouseEnter={newNote2}>
            {newNote ? (
                <div className="note1_content">
                    {" "}
                    <h4>{props.index.title}</h4>
                    <div className="content1">{props.index.description}</div>
                </div>
            ) : (
                <div className="note1_content">
                {" "}
                <h4>{props.index.title}</h4>
                <div className="content1">{props.index.description}</div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Notes;
