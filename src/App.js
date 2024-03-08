// App.js
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Login from './Login';
import BoardList from './BoardList';
import './App.css'; // Import the CSS file

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    const loggedInUser = { username };
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/boards" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/boards" element={<BoardList />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
