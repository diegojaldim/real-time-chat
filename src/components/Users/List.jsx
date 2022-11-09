import React, {
  useEffect,
  useState,
} from 'react';
import {
  listUsers
} from '../../api/chat.api';

const Users = (props) => {

  const data = [
    {
      id: 1,
      avatar: 'https://i.imgur.com/n0bP3CB.jpeg',
      name: 'Usuário 1',
    },
    {
      id: 2,
      avatar: 'https://i.imgur.com/n0bP3CB.jpeg',
      name: 'Usuário 2 aa',
    },
    {
      id: 3,
      avatar: 'https://i.imgur.com/n0bP3CB.jpeg',
      name: 'Usuário 3',
    }
  ];

  const [users, setUsers] = useState(data);

  const avatarBackgroundStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const listUsersApi = async () => {
    const data = await listUsers();
    console.log('oi', data);
  }

  useEffect(() => {
    listUsersApi();
    console.log('get users');
  }, [users]);

  return (
    <div className='flex w-1/4 p-2 overflow-auto'>
      <ul className='flex flex-col w-full h-full'>
        {users.map((el) => {
          return (
            <li className='flex flex-row items-center border-b cursor-pointer hover:bg-slate-200' key={el.id}>
              <div className='flex flex-col items-center w-1/4 border-1 pl-2 pr-2 pt-2 pb-2'>
                <div
                  data={el.avatar}
                  className='border rounded-full h-12 w-12 border-gray-300'
                  style={
                    {
                      ...avatarBackgroundStyle,
                      backgroundImage: `url("${el.avatar}")` ,
                    }
                  }
                >
                </div>
              </div>
              <span className='w-3/4 text-slate-500 text-sm'>{el.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  ); 

}

export default Users;