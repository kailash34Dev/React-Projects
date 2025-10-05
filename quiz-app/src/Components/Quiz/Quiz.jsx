import React, { useState, useRef } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    const question = data[index];

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);
    let optionRefs = [option1, option2, option3, option4];

    const checkAnswer = (element, ans) => {
        if (lock === false) {
            if (ans === question.ans) {
                element.target.classList.add("correct");
                setLock(true);
                setScore(score + 1);
            } else {
                element.target.classList.add("wrong");
                setLock(true);
                optionRefs[question.ans - 1].current.classList.add("correct");
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
            } else {
                setIndex(index + 1);
                setLock(false);
                optionRefs.forEach((option) => {
                    option.current.classList.remove("correct", "wrong");
                });
            }
        } else {
            alert("Please select an option first");
        }
    }

    const reset = () => {
        setIndex(0);
        setLock(false);
        setScore(0);
        setResult(false);
    }

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ?
                <>
                    <h2 className='score'>Your score is {score} out of {data.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
                :
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={option1} onClick={(e) => { checkAnswer(e, 1) }} >{question.option1}</li>
                        <li ref={option2} onClick={(e) => { checkAnswer(e, 2) }} >{question.option2}</li>
                        <li ref={option3} onClick={(e) => { checkAnswer(e, 3) }} >{question.option3}</li>
                        <li ref={option4} onClick={(e) => { checkAnswer(e, 4) }} >{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">
                        {index + 1} of {data.length} questions
                    </div>
                </>
            }
        </div>
    )
}

export default Quiz