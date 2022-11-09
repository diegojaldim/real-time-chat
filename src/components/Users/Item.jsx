import defaultAvatar from '../../img/avatar.png';

const UserItem = (props) => {
  const avatarBackgroundStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const handleAvatar = (avatar) => {
    if (avatar) {
      return {
        backgroundImage: `url("${props.avatar}")`,
      };
    }

    return {
      backgroundImage: `url("${defaultAvatar}")`,
    }
  }

  return (
    <li
      className='flex flex-row items-center border-b cursor-pointer hover:bg-slate-200'
    >
      <div className='flex flex-col items-center w-1/4 border-1 pl-2 pr-2 pt-2 pb-2'>
        <div
          data={props.avatar}
          className='border rounded-full h-12 w-12 border-gray-300'
          style={
            {
              ...avatarBackgroundStyle,
              ...handleAvatar(props.avatar),
            }
          }
        >
        </div>
      </div>
      <span className='w-3/4 text-slate-500 text-sm'>
        {props.name}
      </span>
    </li>
  );
}

export default UserItem;