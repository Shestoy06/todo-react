
import './App.css';
import Login from './components/Login/Login';
import { useState } from 'react';
import Home from './components/Home/Home'
import { render } from '@testing-library/react';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [users, setUsers] = useState([])
  return (
    <div>
      {users.map( user => `${user}, `)}
      <Tasks/>
    </div>
    

  );
}

export default App;
