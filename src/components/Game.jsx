import React, { useState } from 'react';

export default function Game(props) {

  const { winner,setWinner,gameOver,setGameOver } = props 
  const [firstCardClicked, setFirstCardClicked] = useState(false);
  const [secondCardClicked, setSecondCardClicked] = useState(false);
  const [thirdCardClicked, setThirdCardClicked] = useState(false);
  

  const [cards, setCards] = useState( [
    {
      name: "Jack of Spades",
      index: "JS",
      src: "./assets/jack_of_spades.png"
    },
    {
      name: "Queen of Hearts",
      index: "Q",
      src: "./assets/queen_of_hearts.png"
    },
    {
      name: "Jack of Clubs",
      index: "JC",
      src: "./assets/jack_of_clubs.png"
    }

    
  ])
  
    const hidden = './assets/Card Design.jpg'

    function shuffleCards(arr) {

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
        return arr;
    }

    function checkCard(i)
    {  
        if (gameOver)
        {
            return
        }
        if (cards[i].index === 'Q')
        {
            setWinner(true);
            

        }
        else 
        {
            setWinner(false); 
            
        }
        
        setFirstCardClicked(true);
        setSecondCardClicked(true);
        setThirdCardClicked(true);
        setGameOver(true);
    }

  return (
    <div className='min-h-screen flex flex-col items-center'>
        <div className='flex p-20 gap-10 items-center justify-center'>
            <img
                src={!firstCardClicked ? hidden : cards[0].src}
                onClick={()=>{
                    checkCard(0)
                    setFirstCardClicked(true)}}
                className="cursor-pointer w-1/6 hover:scale-110 duration-100"
            />
            <img
                src={!secondCardClicked ? hidden : cards[1].src}
                onClick={()=>{
                    checkCard(1)
                    setSecondCardClicked(true)}}
                className="cursor-pointer w-1/6 hover:scale-110 duration-100"
            />
            <img
                src={!thirdCardClicked ? hidden : cards[2].src}
                onClick={()=>{
                    checkCard(2)
                    setThirdCardClicked(true)}}
                className="cursor-pointer w-1/6 hover:scale-110  duration-100"
            />        
            
        </div>
        {  gameOver ? (<button 
            onClick={()=> {
                setFirstCardClicked(false);
                setSecondCardClicked(false);
                setThirdCardClicked(false);
                setCards(shuffleCards(cards));
                setWinner(false);
                setGameOver(false);
                console.log(cards)
            }}
            className='px-44 position-fixed font-semibold flex-2 py-5
            bg-white text-red-500 cursur-pointer hover:scale-110 
            duration-100 rounded-full'>PLAY AGAIN
        </button>) : ""
        
        }
    </div> 
  );
}
