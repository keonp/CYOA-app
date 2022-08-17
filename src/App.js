import './App.css';
import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage.js';


function App() {
  // useState variable will hold components to be rendered on page
  const [display, setDisplay] = useState('');
  const [username, setUsername] = useState('Player 1');
  const [sword, setSword] = useState(false);
  
  // useEffect will re-render the page once display(state) is updated
  useEffect(() => {

  }, [display]);

  // Will record the user's input and in the event they they don't enter a name or click the box and don't enter a name, will receive the username 'Player 1'
  const handleUsernameInput = (e) => {
    setUsername(e.target.value || 'Player 1');
  }

  const userStats = [];
  
  return (
    <div>
      <div className="App wrapper">
        {/* Inialize content that's returned. Display is initially falsy and therefore LandingPage will render on first page load */}

        {
          display ||
          <LandingPage
              setDisplay={setDisplay}
              username={username}
              sword={sword}
              setSword={setSword}
              handleUsernameInput={handleUsernameInput}
              userStats={userStats}
            />
        }
      </div>
      <footer>
          <p className='footerText wrapper'>Made at <a href='https://junocollege.com/' target="_blank" rel="noreferrer">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
