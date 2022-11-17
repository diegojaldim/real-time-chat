import React, {
  useState,
} from 'react';
import {
  login
} from '../../api/login.api';
import {
  error,
} from '../../helpers/toast.helper';
import SubmitButton from './SubmitButton';

const Login = (props) => {
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

    if (loading) {
      return;
    }

    if (email === '') {
      error('Preencha o e-mail');
      return;
    }

    if (password === '') {
      error('Preencha a senha');
      return;
    }

    onChangeLoading(true);

    try {
      const { data } = await login({
        email,
        password
      });

      props.setUserData(data);

      onChangeLoading(false);
    } catch (err) {
      error('E-mail ou senha inválidos!');
      onChangeLoading(false);
    }
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

        <SubmitButton
          loading={loading}
        />
      </form>
    </div>
  )
}

export default Login;