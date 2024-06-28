import React from 'react';
import AchieveItem from './AchieveItem';
 
function AchieveList({ notes, onDelete, onAchieve }) {

  if (notes.filter((note) => note.achieved === true).length === 0){
        return (
          <div className='notes-list__empty-message'>
            <img src='/React-NotesApp/arsip.png' alt='No archived notes' />
          </div>
        );
      }

    
  return (
    <div className='notes-list'>
      {notes
        .filter((note) => note.achieved === true)
        .map((note) => (
          <AchieveItem
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
 
export default AchieveList;