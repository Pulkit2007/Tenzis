import { useState } from "react";
import "./App.css"
import Die from "./components/Die"


export default function App() {

  const [dices, setDices]= useState(generateDiceNumbers())

  function generateDiceNumbers() {
    return Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 6) + 1
    );
  }

  const numbers = generateDiceNumbers();
  console.log(numbers);

  const diceArray = dices.map((dice) => <Die key={dice} number={dice} />);

  return (
    <main>
      <div className="die-container">
        {diceArray}
      </div>

    </main>
  )
}