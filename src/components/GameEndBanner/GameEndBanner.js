import React from "react";

function GameEndBanner({ state, reset }) {
  return <div className={`${state.won ? 'happy' : 'sad'} banner`}>
            {
              state.won?
                <p>
                  <strong>Congratulations!</strong> You got it in
                    <strong> {state.numGuesses} guesses</strong>!
                </p>
                :
                <p>Sorry, the correct answer is <strong>{state.answer}</strong>.</p>
            }
            <button onClick={reset}><i>Click here to reset the game!</i></button>
        </div>;
}

export default GameEndBanner;
