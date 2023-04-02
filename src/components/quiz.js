import "../App.css"
import { Questions } from "../helpers/Questions"
import { useContext, useState } from "react"
import { GameStateContext } from "../helpers/Contexts";
function Quiz(){
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState('')
    const {score,setScore,gameState,setGameState} = useContext(GameStateContext)
    const chooseOption = (option) =>{
        setOptionChosen(option);
    }
    const nextQuestion = () =>{
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score+1)
        }
        setCurrentQuestion(currentQuestion+1)
    }
    const finishQuiz = () =>{
        setGameState('finished')
    }
    return(
        <div className="Quiz">
            <h1>{Questions[currentQuestion].question}</h1>
            <div className="questions">
                <button 
                    onClick={()=>{
                        chooseOption('A');
                    }}
                >{Questions[currentQuestion].A}</button>
                <button 
                    onClick={()=>{
                        chooseOption('B');
                    }}
                >{Questions[currentQuestion].B}</button>
                <button 
                    onClick={()=>{
                        chooseOption('C');
                    }}
                >{Questions[currentQuestion].C}</button>
                <button 
                    onClick={()=>{
                        chooseOption('D');
                    }}
                >{Questions[currentQuestion].D}</button>
            </div>
            {currentQuestion === Questions.length-1 ?(
                <button className="nextQues" onClick={(finishQuiz)}>Submit</button>
            ):(
                <button className="nextQues" onClick={(nextQuestion)}>next Question</button>
            )}
        </div>
    )
}
export default Quiz