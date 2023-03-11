import React from "react";


function GuessForm({ runGuess, enabled }) {

  // const [guess, setGuess] = React.useState("");
  const [guess, setGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={
          (event) => {
            event.preventDefault();
            runGuess(guess);
            setGuess("");
          }
        }
      >
        <label htmlFor="guess-input">
          Enter guess:  
        </label>
        <input
          type="text"
          id="guess-input"
          value={guess}
          disabled={!enabled}
          onChange={
            (event) => {
              const characters = event.target.value.split("");
              // // I initially did this trick to replace the last letter with the user's input, but I think it doesn't make sense anymore
              // const nextCharacters = characters.length <= 5 ? characters : [...characters.slice(0,4), characters.slice(-1)];
              const nextCharacters = characters.slice(0,5)
              const nextGuess = nextCharacters.join("").toUpperCase()
              setGuess(nextGuess);
            }
          }
          required={true}
          pattern=".{5}"
        ></input>
      </form> 
    </>
  );
}

export default GuessForm;
