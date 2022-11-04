import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-green-200 to-blue-200'>
      {/* <Chat /> */}
      <Login />
    </div>
  );
}

export default App;
