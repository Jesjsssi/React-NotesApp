import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
import MoveButton from './MoveButton';
 
function AchieveItem({ title, createdAt, body, id, onDelete, onAchieve}) {
 return (
   <div className="note-item">
     <NotesItemBody title={title} createdAt={createdAt} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
     <MoveButton id={id} onAchieve={onAchieve} />

   </div>
 );
}
 
export default AchieveItem;