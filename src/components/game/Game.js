import React, { useState } from "react";
import Board from "../board/Board";
import Heading from "../heading/Heading";
import "./game.css";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquare = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  function jumpTo(nextMove) {
    // TODO
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className="moves btn btn-primary" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });
  return (
    <>
      <Heading />

      <div className="game-container">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquare}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol style={{color:'white'}}>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default Game;
