import React, { useState, useRef } from 'react'
import './Tictactoe.css'
import circleIcon from '../../assets/circle.png'
import crossIcon from '../../assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];

export const Tictactoe = () => {

    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock) {
            return;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${crossIcon} class='icon' />`;
            data[num] = "X";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src=${circleIcon} class='icon' />`;
            data[num] = "O";
            setCount(count + 1);
        }
        checkWinner();
    }

    const checkWinner = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if (winner === "X") {
            titleRef.current.innerHTML = `Congratulations, <img src=${crossIcon} class='title-icon'> Won!`;
        } else {
            titleRef.current.innerHTML = `Congratulations, <img src=${circleIcon} class='title-icon'> Won!`;
        }
    }

    const reset = () => {
        setCount(0);
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = "Tic Tac Toe";
        const cells = document.getElementsByClassName('cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = "";
        }
    }

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
            <div className="board">
                <div className='row1'>
                    <div className="cell" onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="cell" onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="cell" onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className='row2'>
                    <div className="cell" onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="cell" onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="cell" onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className='row3'>
                    <div className="cell" onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="cell" onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="cell" onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className='reset' onClick={() => { reset() }}>Reset</button>
        </div>
    )
}
