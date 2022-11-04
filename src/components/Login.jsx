const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center w-1/3 border-1 rounded-lg border-slate-300 bg-slate-100'>
      
      <h1 className="font-sans text-3xl mt-10 antialiased text-stone-600">Login</h1>

      <form className="flex flex-col w-2/3">
          <input
            className="outline-none p-2 rounded-sm mt-10 mb-2"
            type="email"
            placeholder="E-mail"
          />

          <input
            className="outline-none p-2 rounded-sm mt-2 mb-2"
            type="password"
            placeholder="Senha"
          />

          <button
            className="bg-blue-500 text-white p-2 rounded-sm mt-5 mb-20"
          >
            Enviar
          </button>
      </form>
      
    </div>
  )
}

export default Login;