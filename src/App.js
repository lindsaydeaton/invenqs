import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { PickFacility } from "./components/PickFacility.js"


function App() {
  const [moreRooms, setMoreRooms] = useState(false);
  
  const addRooms = () => {
    setMoreRooms(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome!
          <br />
          Fill out the following Questionaire to the best of your ability.
        </p>
      </header>
      {moreRooms ?
        <div>
          <PickFacility />
        </div>
        :
        <button className="allButtons" onClick={addRooms}>Add Visit</button>
      }
    </div>
  );
}

export default App;
