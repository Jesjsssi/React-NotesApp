import React from 'react';
import NotesItem from './NotesItem';
 
function NotesList({ notes, onDelete, onAchieve }) {

  if (notes.length === 0) {
    return (
      <div className='notes-list__empty-message'>
        <img src='/React-NotesApp/empty.png' alt='No notes' />
      </div>
    );
  }

  
  return (
    <div className='notes-list'>
      {notes
        .filter((note) => !note.achieved)
        .map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onAchieve={onAchieve}
            {...note}
          />
        ))}
    </div>
  );
}
 
export default NotesList;