import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ children, answer }) {
  
  const toRender = children === undefined ? Array(5).fill({letter:""}) : checkGuess(children.word, answer);

  return <p className={'guess'}>
          {
            toRender.map((w, i) => 
              <span 
                className={`cell ${w.status}`}
                key={i}
              >{w.letter}</span>
            )
          }
        </p>
  ;
}

export default Guess;
