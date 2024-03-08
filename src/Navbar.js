import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';

function Navbar() {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/boards">Boards</Link>
        </li>
        {user ? (
          <>
            <li>Welcome, {user.username}!</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
