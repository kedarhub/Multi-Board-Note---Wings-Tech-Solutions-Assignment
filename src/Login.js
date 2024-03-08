import React, { useState, useContext } from 'react';
import { UserContext } from './App';

function Login() {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = () => {
  
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      // Successful login
      handleLogin(username, password);
    } else {
      // Failed login
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUserLogin}>Login</button>
    </div>
  );
}

export default Login;
