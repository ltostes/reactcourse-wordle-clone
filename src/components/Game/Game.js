import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
// import GuessList from '../GuessList/GuessList';
import Guess from '../Guess/Guess';
import GameEndBanner from '../GameEndBanner/GameEndBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import LetterStatusKeyboard from '../LetterStatusKeyboard/LetterStatusKeyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guessList, setGuessList] = React.useState([])
  const [gameState, setGameState] = React.useState({ended: false})

  console.info({ answer });

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameState({ended:false});
  }
  
  function runGuess(in_guess) {

    const nextGuessList = [...guessList, 
                            {
                              word: in_guess, 
                              id: crypto.randomUUID()
                            }];
    setGuessList(nextGuessList);

    // Checking if game ended
    if (in_guess === answer) {
      setGameState({
        ended: true,
        won: true,
        numGuesses: nextGuessList.length,
        answer
      });
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED){
      setGameState({
        ended: true,
        won: false,
        numGuesses: nextGuessList.length,
        answer
      });
    } else {
      setGameState({
        ended: false
      });
    }
  };
  
  return <>
            <div className='guess-results'>
            {
              range(0,NUM_OF_GUESSES_ALLOWED,1).map((i) => 
                <Guess key={i} answer={answer}>{guessList.length > i ? guessList[i] : undefined}</Guess>
              )
            }
            </div>
            <GuessForm runGuess={runGuess} enabled={!gameState.ended}/>
            <LetterStatusKeyboard guessList={guessList} answer={answer}/>
            { gameState.ended  && <GameEndBanner state={gameState} reset={resetGame}/>}
          </>;
}

export default Game;
