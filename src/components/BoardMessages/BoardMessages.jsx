import React from 'react';
import InputMessage from './InputMessage';

const BoardMessages = () => {
  return (
    <div className='flex flex-col border-2 w-3/4'>
      
      <div className='flex h-5/6 border-2 border-red-500'>
        <ul>
          <li>Olá, tudo bem</li>
        </ul>
      </div>
      
      <InputMessage />
    </div>
  );
}

export default BoardMessages;