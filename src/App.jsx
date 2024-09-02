
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react';
import getData from "./utils/getData"
import Card from "./utils/createCard"
import header from "./utils/header"

function App() {

  const [pokeData,setPokeData]  = useState([]);
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);
  const [clickedPokemon,setClickedPokemon] = useState([]);

  // useEffect to fetch data from api
  useEffect(()=> {
    const loadPokedata = async() => {
      try{
        const data = await getData();
        setPokeData(data);
      }catch (error){
        console.error("Fail", error);
      }
    };

    loadPokedata();
  },[]);

  // SHUFFLING CARDS ON EVERY CLICK
  const shuffleCard = () => {
    const result = pokeData.slice();
    for (let i = pokeData.length -1;i>0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    setPokeData(result);
  };

  // when is the game over? when one guy is clicked twice

  const gameOver = () => {
    setScore(0);
    setClickedPokemon([]);
    shuffleCard();
    val = highScore;
    window.location.reload();
    setHighScore(val);
    
  }

  const clickHandler = (pokemonName) => {
    const currentScore = score +1;
    if (clickedPokemon.includes(pokemonName)){
      gameOver();
      return;
    }
    setScore(currentScore);
    if (currentScore >= highScore){
      setHighScore(currentScore);
    }
    setClickedPokemon((prevState) => [...prevState,pokemonName]);
    shuffleCard();
    console.log(clickedPokemon);
  };

  return (
    <>
    <header className='header'>
      <div className="score">Score : {score} </div>
      <div className="highscore">High Score : {highScore}</div></header>
    <div className='card-cont'>
      {pokeData.map((data) =>(
        <Card key = {data.id} data = {data} clickHandler = {clickHandler} className = 'card'></Card>
      ))}

    </div>
    </>
  )
}

export default App
