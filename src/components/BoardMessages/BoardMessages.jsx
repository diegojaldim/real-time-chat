import React from 'react';
import InputMessage from './InputMessage';
import MessagesList from './MessagesList';

const BoardMessages = () => {
  return (
    <div className='flex flex-col w-3/4 border'>
      <MessagesList />
      <InputMessage />
    </div>
  );
}

export default BoardMessages;