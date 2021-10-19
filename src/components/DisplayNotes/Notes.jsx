import React from "react";
import { useState } from "react";
import DisplayNotes from "./DisplayNotes";

const Notes = (props) => {
  
    const [newNote, setNewNote] = useState(false);

    const newNotes = () => {
        setNewNote(!newNote);
    };

    return (
        <div className="notes" onMouseEnter={newNotes}>
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
    );
};

export default Notes;