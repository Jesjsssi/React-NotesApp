import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
import AchieveButton from './AchieveButton';
 
function NotesItem({ title, createdAt, body, id, onDelete, onAchieve}) {
 return (
   <div className="note-item">
     <NotesItemBody title={title} createdAt={createdAt} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
     <AchieveButton id={id} onAchieve={onAchieve} />
   </div>
 );
}
 
export default NotesItem;