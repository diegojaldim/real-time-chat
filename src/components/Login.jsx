import React, {
  useState,
} from 'react';
import {
  login
} from '../api/login.api';
import {
  error,
} from '../helpers/toast.helper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeLoading = (value) => {
    setLoading(value);
  }

  const submit = async (e) => {
    e.preventDefault();
    onChangeLoading(true);

    try {
      const { data } = await login({
        email,
        password
      });

      localStorage.setItem('user', JSON.stringify(data));
      onChangeLoading(false);
    } catch (err) {
      error('E-mail ou senha inválidos!');
      onChangeLoading(false);
    }
  }

  const handleSubmitButton = () => {
    if (loading) {
      return (
        <div className="flex items-center flex-col mt-5 mb-20">
          <div className="animate-spin bg-blue-500 text-white w-10 h-10 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <button
        className="bg-blue-500 text-white p-2 rounded-sm mt-5 mb-20"
        type="submit"
      >
        Enviar
      </button>
    );
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
          onChange={onChangeEmail}
          value={email}
        />

        <input
          className="outline-none p-2 rounded-sm mt-2 mb-2"
          type="password"
          onChange={onChangePassword}
          value={password}
          placeholder="Senha"
        />

        {handleSubmitButton()}
      </form>
    </div>
  )
}

export default Login;