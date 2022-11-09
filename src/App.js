import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {
  useEffect,
  useState,
} from 'react';

const App = () => {

  const [user, setUser] = useState('');

  const verifyIfUserIsLogged = () => {
    if (user) {
      return (
        <Chat />
      )
    }

    return <Login />
  }

  useEffect(() => {
    const storage = localStorage.getItem('user');
    if (storage) {
      setUser(JSON.parse(storage));
    }
  }, []);

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-green-200 to-blue-200'>
      {verifyIfUserIsLogged()}

      <ToastContainer />
    </div>
  );
}

export default App;
