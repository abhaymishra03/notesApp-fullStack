import React from 'react';
import './Note.css'
import  Content  from "./Content.jsx";
import { useNavigate } from "react-router";

const Note = ({notes,setnotes}) => {


    let navigate = useNavigate();

  const handleclick = (e)=>{
    e.preventDefault;
    navigate("/create-note");
  }
  return (
    <>
    <div className='nav'>


    <h2>Notes </h2>

    <button onClick={handleclick}>Create Note</button>

    

    </div>

    <Content notes={notes} setnotes={setnotes}/>
    
    
    </>
  );
};

export default Note;