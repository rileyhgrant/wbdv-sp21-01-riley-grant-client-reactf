import React, { useState } from "react";
import MultiChoiceQuestion from "./mc-question";
import TrueFalseQuestion from "./tf-question";

const Question = ({ q }) => {
  const [guess, setGuess] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [submittedGuess, setSubmittedGuess] = useState(null);

  const runGrade = () => {
    setSubmittedGuess(guess);
    if (guess === q.correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <>
      <h4>
        {q.question}
        {isCorrect === true && (
          <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
        )}
        {isCorrect === false && (
          <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
        )}
      </h4>
      {/* <h3>Guess: {String(guess)}</h3> */}
      {/* <h3>Correct: {JSON.stringify(q.correct)}</h3> */}
      {/* <h4>isCorrect: {String(isCorrect)}</h4> */}

      {q.type === "MULTIPLE_CHOICE" && (
        <MultiChoiceQuestion q={q} setGuess={setGuess} submittedGuess={submittedGuess} />
      )}
      {q.type === "TRUE_FALSE" && (
        <TrueFalseQuestion q={q} setGuess={setGuess} submittedGuess={submittedGuess}/>
      )}
      <button className={`btn btn-success mt-2`} onClick={() => runGrade()}>
        Grade
      </button>
    </>
  );
};

export default Question;
