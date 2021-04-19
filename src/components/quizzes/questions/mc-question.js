import React from "react";

const MultiChoiceQuestion = ({ q, setGuess, submittedGuess }) => {
  return (
    <>
      <>
        <div className="list-group">
          {q.choices.map((option) => (
            <label
              className={`list-group-item
              // handling of highlighting
              ${
                submittedGuess !== null && q.correct === option && submittedGuess === option
                  ? "list-group-item-success"
                  : ""
              }
              ${
                submittedGuess !== null && q.correct === option && submittedGuess !== option
                  ? "list-group-item-success"
                  : ""
              }
              ${
                submittedGuess !== null && q.correct !== option && submittedGuess === option
                  ? "list-group-item-danger"
                  : ""
              }
            `}
            >
              <input
                type="radio"
                name={q._id}
                onClick={() => {
                  q.answer = option;
                  setGuess(option)}
                }
              />
              &nbsp; {option}
              {/* Handling of red X or green check */}
              {submittedGuess !== null && q.correct === option && submittedGuess === option && (
                <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
              )}
              {submittedGuess !== null && q.correct === option && submittedGuess !== option && (
                <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
              )}
              {submittedGuess !== null && q.correct !== option && submittedGuess === option && (
                <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
              )}
            </label>
          ))}
        </div>
      </>
    </>
  );
};

export default MultiChoiceQuestion;
