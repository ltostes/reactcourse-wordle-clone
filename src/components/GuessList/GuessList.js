import React from "react";

function GuessList({guessList}) {

  return <div className={"guess-results"}>
      {
        guessList.map((g) => 
        <p 
          className={"guess"}
          key={g.id}
        >{g.word}</p>)
      }
    </div>;
}

export default GuessList;
