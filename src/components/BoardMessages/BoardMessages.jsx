import React, {
  useEffect,
} from 'react';
import InputMessage from './InputMessage';
import MessagesList from './MessagesList';

const BoardMessages = props => {

  const listMessages = () => {
    if (props.recipient == '') {
      return;
    }
    console.log('list messages', props.recipient);
  }

  useEffect(() => {
    listMessages();
  }, [props.recipient]);

  return (
    <div className='flex flex-col w-3/4 border'>
      <MessagesList />
      <InputMessage />
    </div>
  );
}

export default BoardMessages;