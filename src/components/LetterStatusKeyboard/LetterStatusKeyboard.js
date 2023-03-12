import React from "react";
import { checkGuess } from "../../game-helpers";

function LetterStatusKeyboard({guessList, answer}) {

  // This is the logic to create a map of what status is what letter
  const all_letter_guesses = guessList.map(d => checkGuess(d.word, answer)).flat();

  const status_hierachy = ["", "incorrect", "misplaced", "correct"];

  // We will sort all guesses to get to make sure we get the 'highest' one when finding the letter
  const letter_status_map = all_letter_guesses
                                // First sorting by letter
                                .sort((a,b) => a.letter > b.letter ? -1 : 1) 
                                // Now sorting by status
                                .sort((a,b) => a.letter != b.letter ? 0 : // We send 0 if they are different letters
                                        status_hierachy.indexOf(a.status) > status_hierachy.indexOf(b.status) ? -1 : 1
                                        ) ;

  // Now the function that uses the map to check each letter
  function checkLetterStatus(letter) {

    if (!guessList) {return ""};

    const letterHighestGuess = letter_status_map.find(d => d.letter == letter);

    if (!letterHighestGuess) {return ""};

    return letterHighestGuess.status;
  }

  // This defines where each letter will be placed
  const letterRows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split("")
  ]

  return <div>
            {
              letterRows.map((row,row_i) => 
                <p key={row_i} className={'keyboard'}>
                  {
                    row.map((letter,i) => 
                      <span className={`keyboard-cell ${checkLetterStatus(letter)}`}>{letter}</span>
                    )
                  }
                </p>  
              )
            }
        </div>;
}

export default LetterStatusKeyboard;
