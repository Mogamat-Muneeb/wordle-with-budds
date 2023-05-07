import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div
      className={`w-1/3 flex justify-center  m-2  h-full border-[1px] border-gray-200 items-center text-[20px] 
     gap-2 ${
       currAttempt.attempt > attemptVal && correct
         ? "bg-[#528d4e]"
         : almost
         ? "bg-[#b49f39]"
         : "bg-[#3a393c]"
     }`}
    >
      {letter}
    </div>
  );
}

export default Letter;
