import React from 'react';
import  Notes  from "./Notes";
import "./Content.css"
//grouping of notes 
const Content = ({notes,setnotes}) => {

    
  return ( <div className="notes">
            {notes.map(note => (
                <Notes
                    key={note._id}
                    title={note.title}
                    content={note.content}
                    id={note._id}
                    setnotes={setnotes}
                />
            ))}
        </div>
  );
};

export default Content;