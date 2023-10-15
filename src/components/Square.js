import React, { useState } from 'react'

function Square({value, onSquareClick, squareColor}) {
  

  
  return (
    <>

      <button className="square" onClick={onSquareClick} style={{backgroundColor:squareColor}} >
        <b className='symbol' >{value}</b>
      </button>
    </>
  );
}

export default Square