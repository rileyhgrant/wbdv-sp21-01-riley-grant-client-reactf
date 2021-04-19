import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import questionsService from "../../services/questions-service";
import Question from "./questions/question";
import quizAttemptsService from "../../services/quiz-attempts-service";

const Quiz = () => {
  const { courseId, quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [attempts, setAttempts] = useState([]);


  useEffect(() => {
    questionsService
      .findQuestionsByQuizId(quizId)
      .then((theQuestions) => setQuestions(theQuestions));
    quizAttemptsService
      .findAttemptsForQuiz(quizId)
      .then((theAttempts) => setAttempts(theAttempts));
  }, []);

  const setAttemptsFromServer = () => {
    quizAttemptsService.findAttemptsForQuiz(quizId).then(attempts => setAttempts(attempts))
  }

  const submitAttempt = () => {
    quizAttemptsService.submitAttempt(quizId, questions).then( attempt => setAttemptsFromServer())
  };

  return (
    <>
      <h1 className="m-2">
        <Link to={`/courses/${courseId}/quizzes`}>
          <i className="mr-3 fas fa-times"></i>
        </Link>
        Quiz {quizId}
      </h1>
      
      <ul className="list-group">
        {questions.map((q) => {
          return (
            <li className={"list-group-item"}>
              <Question q={q} />
            </li>
          );
        })}
      </ul>
      <i
        className={`btn btn-success mt-2`}
        onClick={() => submitAttempt()}
      >
        Submit
      </i>
      <h2 className="mt-5">Quiz Attempts</h2>
      <ul className="list-group mb-3">
        {attempts.map( (a, i) => {
          return (
            <li className={"list-group-item"}>
              Attempt {i + 1}. &nbsp;&nbsp; Score: {a.score.toFixed(2)}
            </li>
          )
        })}

      </ul>
    </>
  );
};

export default Quiz;
