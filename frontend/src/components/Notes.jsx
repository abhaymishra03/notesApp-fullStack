
import axios from "axios";
import "./Notes.css";
import { useState } from "react";

function Notes({ title, content, id, setnotes }) {

    const [isEditing, setIsEditing] = useState(false);

    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);


    const handleDelete = async () => {
        try {
            await axios.delete(`/api/delete-note/${id}`);

            setnotes(prev =>
                prev.filter(n => n._id !== id)
            );

        } catch (err) {
            console.log(err);
        }
    };


    const handleUpdate = async () => {

        try {

            const res = await axios.patch(
                `/api/update-note/${id}`,
                {
                    title: newTitle,
                    content: newContent
                }
            );


         
setnotes(prev =>
    prev.map(n =>
        n._id === id
            ? { ...n, title: newTitle, content: newContent }
            : n
    )
);
            setIsEditing(false);

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="note">

            {isEditing ? (
                <>
                    <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />

                    <textarea
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    />

                    <button onClick={handleUpdate}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h3 className="note-title">{title}</h3>

                    <p className="note-content">{content}</p>

                    <div className="note-actions">

                        <button
                            className="edit-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>
                </>
            )}

        </div>
    );
}

export default Notes;
