import React, { useState } from "react";
import Icons from "../Icons/Icons";

const Notes = (props) => {
  
    const [newNote, setNewNote] = useState(false);

    const newNotes1 = () => {
        setNewNote(!newNote);
    };

    const {classes} = props;

    return (
        <div className="notes" onMouseEnter={newNotes1}>
            <div className="note1_content" style={{
                backgroundColor: props.index.color,
            }}>
                <h4>{props.index.title}</h4>
                <div className="content1">{props.index.description}</div>
                <Icons colorval="update"
                val = {props.index}
                id= {props.index.id}
                />
            </div>
        </div>
    );
};

export default Notes;