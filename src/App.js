import './App.css';
import firebase from './firebase.js';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import { useState, useEffect } from 'react';
import LandingPage from './LandingPage.js';


function App() {
  // useState variable will hold components to be rendered on page
  const [display, setDisplay] = useState('');
  const [username, setUsername] = useState('');
  const [sword, setSword] = useState(false);
  const [riddle, setRiddle] = useState('');
  
  // useEffect will re-render the page once display(state) is updated
  useEffect(() => {
    // console.log(username);
  }, [display]);

  const handleUsernameInput = (e) => {
    setUsername(e.target.value || 'Player 1');
  }


  const handleRiddleInput = (e) => {
    setRiddle(e.target.value);
    console.log(display);
  }

  const addUser = (useStats) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    // const firebaseObj = push(dbRef, {username: useStats})
    push(dbRef, {username: useStats});
  }

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
            riddle={riddle}
            handleRiddleInput={handleRiddleInput}
            handleUsernameInput={handleUsernameInput}
            addUser={addUser}
          />
      }
      {/* {console.log(display)} */}
    </div>
  );
}

export default App;
