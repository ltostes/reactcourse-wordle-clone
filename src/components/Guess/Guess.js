import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ children, answer }) {
  // console.log("I WILL RENDER THIS: ",children)
  // const toRender = children === undefined ? Array(5).fill({letter:""}) : children.word.split('').map(d => ({letter: d}));
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
