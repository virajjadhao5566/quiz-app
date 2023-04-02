import React from "react";
import '../App.css'
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import Menu from "./menu";
const EndScreen = () =>{
    const {score,setScore,gameState,setGameState,userName} = useContext(GameStateContext)
    const restartQuiz = () =>{
        setScore(0);
        setGameState('menu')
    }
    return (
        <div className="Quiz">
            <h1>Quiz finished</h1>
            <h2>{userName} done well.</h2>
            <h1>Your score is {score}/{Questions.length}</h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
export default EndScreen