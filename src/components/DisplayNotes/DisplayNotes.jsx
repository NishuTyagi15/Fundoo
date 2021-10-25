import React from "react";
import "./DisplayNotes.css"
import Notes from '../DisplayNotes/Notes'


const DisplayNotes = (props) => { 
  const notesList = props.notesarr.map((index) => <Notes index={index} displayNote = {props.displayNote} handleClose={props.handleClose}/>);
  return <div className="displayNotes_main">{notesList}</div>;
};

export default DisplayNotes