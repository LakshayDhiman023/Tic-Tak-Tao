import React, { useState } from "react";
import Square from "../square/Square";
import './board.css'
function Board({ xIsNext, squares, onPlay }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount ] = useState(0);

  const [squareColor, setSquareColor] = useState(Array(9).fill("black"));
  const handleClick = (i) => {
    setCount(count+1);
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
      setSquareColor("aqua");
      console.log(squareColor);
    } else {
      nextSquares[i] = "O";
      setSquareColor("red");
      console.log(squareColor);
    }

    onPlay(nextSquares);
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else if(count>=9){
    status = "Draw";
  } 
  else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="">
        <div className="status">{status}</div>
        <div className="board">
          <Square
            value={squares[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
            squareColor={squareColor}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
            squareColor={squareColor}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
            squareColor={squareColor}
          />
        </div>
        <div className="board">
          <Square
            value={squares[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
            squareColor={squareColor}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
            squareColor={squareColor}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
            squareColor={squareColor}
          />
        </div>
        <div className="board">
          <Square
            value={squares[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
            squareColor={squareColor}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
            squareColor={squareColor}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
            squareColor={squareColor}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
