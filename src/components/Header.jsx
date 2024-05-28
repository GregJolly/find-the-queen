import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


  export default function Header(props) {
      
      const { winner,setWinner,gameOver } = props 
      const [ highScore, setHighScore ] = useState(0)

    useEffect(()=>{
      if ( gameOver && winner !== null)
      {
        if (winner)
        {
          setHighScore((prevScore)=>(prevScore + 100))
        }
      }

      
    },[winner]);

  return (
    
    <div className='header flex justify-center p-5'>
        <i className="fa-solid text-3xl text-white px-5 fa-chess-queen"></i>
        { !winner  ? (!gameOver ? (<h1 className='text-center text-4xl md:text-6xl lg-9xl    
        \ text-white flex-1 '> Find The <span className='font-bold'>Queen!</span>  </h1> ):(<h1 className='text-center text-4xl md:text-6xl lg-9xl 
        \ text-white flex-1 '> You lost her </h1> ) ): 
        (<h1 className='text-center text-4xl md:text-6xl lg-9xl 
        \ text-white flex-1 '> You found her! </h1> )}
        <label className='rounded-full flex font-serif text-2xl md:text-5xl lg:text-6xl items-center justify-center text-red-600 font-bold bg-white px-20 py-2 '>
          {highScore}
          {console.log(highScore)}
        </label>
    </div>
  )
}
