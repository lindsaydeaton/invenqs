import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { PickFacility } from "./components/PickFacility.js"


function App() {
  const [moreRooms, setMoreRooms] = useState(false);
  const [start, setStart] = useState(false)
  
  const addRooms = () => {
    setMoreRooms(true);
    setStart(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!start ?
          <p>
          <h1>Welcome!</h1>
          Start the Questionaire by selecting the button below.
        </p>
        : <p> Now that you've started the Questionaire, answer all input options to the best of your ability.</p>

      }
      </header>
      {moreRooms ?
        <div>
          <PickFacility />
        </div>
        :
        <button className="moreButtons" onClick={addRooms}>Add Visit</button>
      }
    </div>
  );
}

export default App;
