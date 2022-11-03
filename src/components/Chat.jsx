import React from 'react';
import UsersList from './Users/List';
import BoardMessages from './BoardMessages/BoardMessages';

const Chat = () => {
  return (
    <div className='flex flex-row h-2/3 w-2/3 border-1 rounded-md border-slate-300 bg-slate-100'>
      <UsersList />
      <BoardMessages />
    </div>
  );
}

export default Chat;