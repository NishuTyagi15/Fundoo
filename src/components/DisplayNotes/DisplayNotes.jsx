import React, { useEffect } from "react";
import "./DisplayNotes.css"
import UserServices from "../../services/UserServices";
import Notes from "./Notes";

const obj = new UserServices();

const DisplayNotes = () => {
    const [notesArray, setArray] = React.useState([]);

    useEffect(() => {
      obj.displayNotes()
        .then((response) => {
          setArray(response.data.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    
    const notesList = notesArray.map((index) => <Notes index={index} />);
  
    return <div className="displayNotes_main">{notesList}</div>;
};

export default DisplayNotes