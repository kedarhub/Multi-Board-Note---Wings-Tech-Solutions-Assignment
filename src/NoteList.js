import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import SearchBar from './SearchBar';
import NoteEditor from './NoteEditor';

function NoteList({ boardId }) {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    // Load user-specific notes from local storage on component mount
    const boardNotes = JSON.parse(localStorage.getItem(`notes-${boardId}`)) || [];
    setNotes(boardNotes);
  }, [boardId]);

  useEffect(() => {
    filterNotes();
  }, [notes, searchTerm]);

  const filterNotes = () => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSaveNote = (newNote) => {
    // Implement logic to add or edit a note
    if (selectedNote) {
      // Edit existing note
      const updatedNotes = notes.map((note) =>
        note.id === selectedNote.id ? { ...note, ...newNote } : note
      );
      setNotes(updatedNotes);
    } else {
      // Add new note
      const newNoteWithId = { ...newNote, id: Date.now() };
      setNotes([...notes, newNoteWithId]);
    }

    setSelectedNote(null);
    // Save updated notes to local storage
    localStorage.setItem(`notes-${boardId}`, JSON.stringify([...notes, newNote]));
  };

  const handleEditNote = (note) => {
    setSelectedNote(note);
  };

  const handleDeleteNote = (noteId) => {
    // Implement logic to delete a note
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    setSelectedNote(null);
    // Save updated notes to local storage
    localStorage.setItem(`notes-${boardId}`, JSON.stringify(updatedNotes));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h3>Notes:</h3>
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={() => handleEditNote(note)}
          onDelete={() => handleDeleteNote(note.id)}
        />
      ))}
      <NoteEditor onSave={handleSaveNote} onCancel={() => setSelectedNote(null)} initialNote={selectedNote} />
    </div>
  );
}

export default NoteList;
