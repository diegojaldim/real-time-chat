const InputMessage = () => {
  return (
    <div className='flex flex-row items-center h-1/6 border-2 pl-6 pr-6'>
      <div className='flex h-11 w-5/6 '>
        <input
          placeholder="Mensagem"
          className='pl-4 pr-4 w-full outline-none rounded-l-md border'
        />
      </div>

      <div className='flex w-1/6 h-11'>
        <button
          type="button"
          className='
            w-full
            bg-gradient-to-r
            rounded-r-md
            font-semibold
          from-green-400
          to-blue-500
          hover:from-pink-500
          hover:to-yellow-500
          text-white'
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default InputMessage;