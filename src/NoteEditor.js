import React, { useState } from 'react';

function NoteEditor({ onSave, onCancel, initialNote }) {
  const [title, setTitle] = useState(initialNote ? initialNote.title : '');
  const [content, setContent] = useState(initialNote ? initialNote.content : '');
  const [priority, setPriority] = useState(initialNote ? initialNote.priority : 'Low');

  const handleSave = () => {
    onSave({ title, content, priority });
    setTitle('');
    setContent('');
    setPriority('Low');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default NoteEditor;
