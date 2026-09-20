import { useState } from "react";
import "./App.css"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'


export default function App() {
  const [dices, setDices] = useState(() => generateDiceObjects())

  // conditons: all dices should be held
  // every dice should have matching value


  const gameWon = dices.every(dice => dice.isHeld) &&
    dices.every(die => die.value === dices[0].value);
  console.log("GAME WON")


  function generateDiceObjects() {
    return Array.from({ length: 10 }, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!gameWon) {
      setDices(prev => prev.map(dice => !dice.isHeld ? { ...dice, value: Math.floor(Math.random() * 6) + 1 } : dice));
    }
    else {
      setDices(generateDiceObjects())
    }

  }


  function Hold(id) {
    setDices((prev) =>
      prev.map((dice) =>
        dice.id === id
          ? { ...dice, isHeld: !dice.isHeld }
          : dice
      )
    );
  }


  const diceArray = dices.map((dice) => (
    <Die key={dice.id}
      number={dice.value}
      hold={() => Hold(dice.id)}
      isHeld={dice.isHeld} />
  ));

  return (

    <main>
      {gameWon && <Confetti width={500} height={500} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {diceArray}
      </div>
      <button className="roll-btn" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}