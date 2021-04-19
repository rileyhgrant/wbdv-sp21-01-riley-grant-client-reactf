import React from "react";

const TrueFalseQuestion = ({ q, setGuess, submittedGuess }) => {
  return (
    <>
      <div className="list-group">
        {/* Holy heqq this spaghetti is just for true */}
        {/* I should have just made an array of [true/false] and used iteration */}
        <label
          className={`list-group-item 
          ${
            q.correct === "true" && submittedGuess === "true"
              ? "list-group-item-success"
              : ""
          } 
          ${
            q.correct === "true" && submittedGuess === "false"
              ? "list-group-item-success"
              : ""
          }
          ${
            q.correct === "false" && submittedGuess === "true"
              ? "list-group-item-danger"
              : ""
          }
          `}
        >
          <input
            type="radio"
            name={q._id}
            onClick={() => {
              q.answer = "true";
              setGuess("true");
            }}
            // {submittedGuess === true && style={{ color: "red" }}
          />
          &nbsp; True
          {q.correct === "true" && submittedGuess === "true" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "true" && submittedGuess === "false" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "false" && submittedGuess === "true" && (
            <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
          )}
        </label>

        {/* false starts here */}
        <label
          className={`list-group-item ${
            q.correct === "false" && submittedGuess === "false"
              ? "list-group-item-success"
              : ""
          } 
          ${
            q.correct === "false" && submittedGuess === "true"
              ? "list-group-item-success"
              : ""
          }
          ${
            q.correct === "true" && submittedGuess === "false"
              ? "list-group-item-danger"
              : ""
          }`}
        >
          <input
            type="radio"
            name={q._id}
            onClick={() => {
              q.answer = "false";
              setGuess("false");
            }}
          />
          &nbsp; False
          {q.correct === "false" && submittedGuess === "false" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "false" && submittedGuess === "true" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "true" && submittedGuess === "false" && (
            <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
          )}
        </label>
      </div>
    </>
  );
};

export default TrueFalseQuestion;
