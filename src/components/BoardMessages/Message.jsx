import React from 'react';

const Message = (props) => {
  let alignMessage = '';
  let alignDateTime = '';

  if (props.align === 'left') {
    alignMessage = 'self-start';
    alignDateTime = 'self-start';
  }

  if (props.align === 'right') {
    alignMessage = 'self-end';
    alignDateTime = 'self-end';
  }

  return (
    <div className={`flex flex-col ${alignMessage}`}>
      <span className='
      bg-green-50
        border
      border-slate-300
        rounded-md
        pt-1
        pb-1
        pl-2
        pr-2
        text-sm
        mt-2
        mb-2
      '>
        {props.message}
      </span>
      <span className={`flex text-xs text-slate-400 ${alignDateTime}`}>12:00</span>
    </div>
  );
}

export default Message;