import React, {
  useState,
  useEffect,
} from 'react';
import UsersList from './Users/List';
import BoardMessages from './BoardMessages/BoardMessages';
import {
  listUsers
} from '../api/chat.api';

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [recipient, setRecipient] = useState('');

  const listUsersApi = async () => {
    const { data } = await listUsers();
    setUsers(data);
  }

  const onChangeRecipient = (id) => {
    setRecipient(id);
  }

  useEffect(() => {
    listUsersApi();
  }, []);

  return (
    <div className='flex flex-row h-2/3 w-2/3 border-1 rounded-lg border-slate-300 bg-slate-100 overflow-hidden'>
      <UsersList
        users={users}
        setRecipient={onChangeRecipient}
      />
      <BoardMessages
        recipient={recipient}
      />
    </div>
  );
}

export default Chat;