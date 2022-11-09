import React, {
  useEffect,
  useState,
} from 'react';
import {
  listUsers
} from '../../api/chat.api';
import UserItem from './Item';

const Users = () => {
  const [users, setUsers] = useState([]);

  const listUsersApi = async () => {
    const { data } = await listUsers();
    setUsers(data);
  }

  useEffect(() => {
    listUsersApi();
  }, []);

  return (
    <div className='flex w-1/4 p-2 overflow-auto'>
      <ul className='flex flex-col w-full h-full'>
        {users.map((el) => {
          return (
            <UserItem
              key={el._id}
              avatar={el.avatar}
              name={el.name}
            />
          )
        })}
      </ul>
    </div>
  ); 

}

export default Users;