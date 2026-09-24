import React, { useEffect, useState } from 'react';
import  Note  from "./components/Note.jsx";
import  CreatePage  from "./components/CreatePage";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from 'axios';

const App = () => {
  useEffect(() => {

    const fetchNotes = async () => {
        try {
            const res = await axios.get("/api/notes");

            setnotes(res.data.notes);

        } catch (err) {
            console.log(err);
        }
    };

    fetchNotes();

}, []);
  const [notes,setnotes]=useState([]);
  

  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Note notes={notes} setnotes={setnotes}/>} />
      <Route path='/create-note' element ={<CreatePage setnotes={setnotes}/>}/>
    </Routes>
  </BrowserRouter>
  );
};

export default App;