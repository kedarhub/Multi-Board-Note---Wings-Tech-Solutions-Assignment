import React, { useState, useContext } from 'react';
import { UserContext } from './App';

function SignUp() {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Simulate registration by storing user data in local storage
    const newUser = { username, password };

    // Check if user with the same username already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.username === newUser.username);

    if (userExists) {
      alert('User with the same username already exists. Please choose another username.');
    } else {
      // Save the new user to local storage
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

      // Simulate login after successful registration
      handleLogin(username, password);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <h1> Here is the SignUp page</h1>
      <label> Username :</label>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
