import React, { useEffect } from "react";
import "./DisplayNotes.css"
import Notes from "./Notes";


const DisplayNotes = (props) => { 
  const notesList = props.notesarr.map((index) => <Notes index={index} />);
  
  return <div className="displayNotes_main">{notesList}</div>;
};

export default DisplayNotes