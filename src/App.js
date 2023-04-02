import './App.css';
import { useState } from 'react';
import './components/menu'
import { Questions } from './helpers/Questions';
import Menu from './components/menu';
import Quiz from './components/quiz';
import {GameStateContext} from './helpers/Contexts'
import EndScreen from './components/endScreen';
function App() {
  const [gameState,setGameState] = useState("menu")
  const [userName,setUserName] = useState("")
  const [score,setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState,setGameState,userName,setUserName,score,setScore}}>
        {gameState === "menu" && <Menu/>}
        {gameState === "playing" && <Quiz/>}
        {gameState === "finished" && <EndScreen/>}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
