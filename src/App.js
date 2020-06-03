import React, {useState} from 'react';
import './App.css';

function App() {
  
    return (
      <div className="game">
        <div className="help">
          Does the meaning of the top word match the ink
          color of the bottom word?
        </div>
        <div className="body">
          <div className="game-status status-playing" />
          <div className="meaning">*Meaning*</div>
          <div className="ink">*Ink*</div>
          <div className="buttons">
            <button>YES</button>
            <button>NO</button>
          </div>
        </div>
      </div>
  );
}

export default App;
