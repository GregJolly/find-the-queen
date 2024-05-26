import React from 'react'


export default function Header(props) {
    
    const { winner,setWinner,gameOver } = props 

  return (
    
    <div className='header flex justify-center p-5'>
        <i className="fa-solid text-3xl text-white px-5 fa-chess-queen"></i>
        { !winner  ? (!gameOver ? (<h1 className='text-center text-4xl md:text-6xl lg-9xl 
        \ text-white flex-1 '> Find The <span className='font-bold'>Queen!</span>  </h1> ):(<h1 className='text-center text-4xl md:text-6xl lg-9xl 
        \ text-white flex-1 '> You lost her </h1> ) ): 
        (<h1 className='text-center text-4xl md:text-6xl lg-9xl 
        \ text-white flex-1 '> You found her! </h1> )}
        <i className="fa-solid text-3xl text-white px-5 fa-chess-queen"></i>
    </div>
  )
}
