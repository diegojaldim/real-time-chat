import React, {
  useState,
} from 'react';
import {
  post
} from '../infra/http-client';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();

    post('/auth/login', {
      email: login,
      password
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    });

    // console.log(login, password);
  }

  return (
    <div className='flex flex-col items-center justify-center w-1/3 border-1 rounded-lg border-slate-300 bg-slate-100'>
      <h1 className="font-sans text-3xl mt-10 antialiased text-stone-600">Login</h1>

      <form
        onSubmit={submit}
        className="flex flex-col w-2/3"
      >
        <input
          className="outline-none p-2 rounded-sm mt-10 mb-2"
          type="email"
          placeholder="E-mail"
          onChange={onChangeLogin}
          value={login}
        />

        <input
          className="outline-none p-2 rounded-sm mt-2 mb-2"
          type="password"
          onChange={onChangePassword}
          value={password}
          placeholder="Senha"
        />

        <button
          className="bg-blue-500 text-white p-2 rounded-sm mt-5 mb-20"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Login;