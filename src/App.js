import './App.css';

function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-green-200 to-blue-200'>

      <div className='flex flex-row h-2/3 w-2/3 border-1 rounded-md border-slate-300 bg-slate-100'>

        <div className='flex w-1/4 border-2'>

          <ul>
            <li>usuário 1</li>
            <li>usuário 2</li>
            <li>usuário 3</li>
            <li>usuário 4</li>
          </ul>

        </div>

        <div className='flex flex-col border-2 w-3/4 border-cyan-300'>
          <div className='flex h-5/6 border-2 border-red-500'>Mensagens</div>
          <div className='flex h-1/6 border-2 border-red-500'>Input para enviar mensagem</div>
        </div>

      </div>

      
    </div>
  );
}

export default App;
