import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const colors = [
      'black', 'blue', 'red', 'green', 'yellow'
    ];

    let randomColors = randomColorsObj();
    const [gameStatus, setGameStatus] = useState('playing')

    function getRandomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function randomColorsObj() {
      const upperWord = getRandomColor(colors);
      const lowerWord = getRandomColor(colors);
      const lowerWordInk = Math.random() < 0.4 ? upperWord : getRandomColor(colors);
      return {
        upperWord,
        lowerWord,
        lowerWordInk
      }
    }

    function handleClick( yesBtnClicked ) {
        if ( (( randomColors.upperWord === randomColors.lowerWordInk ) ^ yesBtnClicked) === 0 ) {
          setGameStatus('correct')
          
        }
        else {
          setGameStatus('wrong')
          
        }
    }
    
    useEffect(() => {
      
      if (gameStatus !== "playing") {
      resetGame();
      } 
    }, [gameStatus]);

    function resetGame() {
      setTimeout( () => {
        randomColors = randomColorsObj();
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
          <div className="meaning">{ randomColors.upperWord.toUpperCase() }</div>
          <div className="ink" style={{ color: randomColors.lowerWordInk }}>{ randomColors.lowerWord.toUpperCase() }</div>
          <div className="buttons">
            <button onClick={() => handleClick(true)}>YES</button>
            <button onClick={() => handleClick(false)}>NO</button>
          </div>
        </div>
      </div>
  );
}

export default App;
