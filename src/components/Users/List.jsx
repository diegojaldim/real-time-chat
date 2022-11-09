import React from 'react';
import UserItem from './Item';

const Users = (props) => {
  return (
    <div className='flex w-1/4 p-2 overflow-auto'>
      <ul className='flex flex-col w-full h-full'>
        {props.users.map((el) => {
          return (
            <UserItem
              key={el._id}
              id={el._id}
              avatar={el.avatar}
              name={el.name}
              onClick={(id) => props.setRecipient(id)}
            />
          )
        })}
      </ul>
    </div>
  ); 

}

export default Users;