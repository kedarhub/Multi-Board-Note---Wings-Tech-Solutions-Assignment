import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <p>Priority: {note.priority}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default NoteItem;
