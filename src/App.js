import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const colors = [
      'black', 'blue', 'red', 'green', 'yellow'
    ];

    const [randomColors, setRandomColors] = useState([getRandomColor(colors), getRandomColor(colors), getRandomColor(colors) ]);
    const [gameStatus, setGameStatus] = useState('playing')

    function getRandomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function handleClick( yesBtnClicked ) {
        if ( (( randomColors[0] === randomColors[2] ) ^ yesBtnClicked) === 0 ) {
          setGameStatus('correct')
          
        }
        else {
          setGameStatus('wrong')
          
        }
    }
    
    useEffect(() => {
      console.log("j")
      if (gameStatus !== "playing") {
      resetGame();
      } 
    }, [gameStatus]);

    function resetGame() {
      setTimeout( () => {
        setRandomColors([getRandomColor(colors), getRandomColor(colors), getRandomColor(colors)]);
        setGameStatus('playing');
      }, 500);
    }

    return (
      <div className="game">
        <div className="help">
          Does the meaning of the top word match the ink
          color of the bottom word?
        </div>
        <div className="body">
          <div className={ `game-status status-${gameStatus}` }></div>
          <div className="meaning">{ randomColors[0].toUpperCase() }</div>
          <div className="ink" style={{ color: randomColors[2] }}>{ randomColors[1].toUpperCase() }</div>
          <div className="buttons">
            <button onClick={() => handleClick(true)}>YES</button>
            <button onClick={() => handleClick(false)}>NO</button>
          </div>
        </div>
      </div>
  );
}

export default App;
