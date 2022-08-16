import './App.css';
import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage.js';


function App() {
  // useState variable will hold components to be rendered on page
  const [display, setDisplay] = useState('');
  const [username, setUsername] = useState('');
  const [sword, setSword] = useState(false);
  
  // useEffect will re-render the page once display(state) is updated
  useEffect(() => {

  }, [display]);

  const handleUsernameInput = (e) => {
    setUsername(e.target.value || 'Player 1');
  }

  const userStats = [];
  
  return (
    <div className="App wrapper">
      {/* Inialize content thats returned. Display is initially falsy and therefore LandingPage will render on first page load */}
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
      {/* {
        display ||
        <LandingPage
            setDisplay={setDisplay}
            username={username}
            sword={sword}
            setSword={setSword}
            riddle={riddle}
            handleRiddleInput={handleRiddleInput}
            handleUsernameInput={handleUsernameInput}
            addUser={addUser}
          />
      } */}
    </div>
  );
}

export default App;
