import React from 'react';
import InputMessage from './InputMessage';

const BoardMessages = () => {
  return (
    <div className='flex flex-col w-3/4 border'>
      
      <div className='flex h-5/6 bg-slate-50 p-6'>
        <ul>
          <li>Olá, tudo bem</li>
        </ul>
      </div>
      
      <InputMessage />
    </div>
  );
}

export default BoardMessages;