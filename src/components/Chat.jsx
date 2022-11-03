import React from 'react';
import UsersList from './Users/List';

const Chat = () => {
  return (
    <div className='flex flex-row h-2/3 w-2/3 border-1 rounded-md border-slate-300 bg-slate-100'>
      <UsersList />

      <div className='flex flex-col border-2 w-3/4 border-cyan-300'>
        <div className='flex h-5/6 border-2 border-red-500'>Mensagens</div>
        <div className='flex h-1/6 border-2 border-red-500'>Input para enviar mensagem</div>
      </div>

    </div>
  );
}

export default Chat;