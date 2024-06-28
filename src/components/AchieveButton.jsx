import React from 'react';
 
function AchieveButton({ id, onAchieve }) {
  return <button className='note-item__archive-button' onClick={() => onAchieve(id)}>Arsipkan</button>
}
 
export default AchieveButton;