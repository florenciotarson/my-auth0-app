import React from 'react';
import logo from './logo.svg';
import './App.css';

// 1) Import the Auth0 hook
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  // 2) Destructure Auth0 states and methods
  const {
    isAuthenticated,
    isLoading,
    user,
    loginWithRedirect,
    logout
  } = useAuth0();

  // 3) Show a loading indicator while Auth0 checks auth
  if (isLoading) {
    return <div>Loading Auth0 session...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* Default CRA logo/heading */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a small React project with Auth0!
        </p>

        {/* 4) If not logged in, show Login button */}
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}

        {/* 5) If authenticated, show Logout button and user info */}
        {isAuthenticated && (
          <>
            <button
              onClick={() =>
                logout({ returnTo: window.location.origin })
              }
            >
              Log Out
            </button>
            <div style={{ marginTop: '1rem' }}>
              <h2>User Profile</h2>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
