import React from 'react';
import Message from './Message';

const MessagesList = () => {

  const messages = [
    {
      m: 'Olá, tudo bem?',
    },
    {
      m: 'Olá, tudo bem?',
    },
    {
      m: 'Olá, tudo bem?',
    },
    {
      m: 'Olá, tudo bem?',
    },
    {
      m: 'Olá, tudo bem?',
    },
  ];

  const listMessages = () => {
    return messages.map(el => {
      return (
        <Message
          align="left"
          message={el.m}
        />
      )
    });
  }

  return (
    <div className='flex flex-col h-5/6 bg-slate-50 pl-6 pt-4 pr-6 overflow-auto'>
      {listMessages()}
      
      {
        messages.map(el => {
          return (
            <Message
              align="right"
              message={el.m}
            />
          )
        })
      }
      
    </div>
  );

}

export default MessagesList;