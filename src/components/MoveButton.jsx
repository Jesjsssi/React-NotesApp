import React from 'react';
 
function MoveButton({ id, onAchieve }) {
  return <button className='note-item__archive-button' onClick={() => onAchieve(id)}>Pindahkan</button>
}
 
export default MoveButton;