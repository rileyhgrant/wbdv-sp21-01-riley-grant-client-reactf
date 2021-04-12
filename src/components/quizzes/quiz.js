import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import questionsService from "../../services/questions-service";
import Question from "./questions/question";

const Quiz = () => {
  const { courseId, quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    questionsService
      .findQuestionsByQuizId(quizId)
      .then( theQuestions => setQuestions( theQuestions ));
  }, []);
  return (
    <>
      <h1 className="m-2">
          <Link to={`/courses/${courseId}/quizzes`}>
            <i className="mr-3 fas fa-times"></i>
          </Link>
        Quiz {quizId} 
      </h1>
      <ul className="list-group">
      {
        questions.map( q =>
          <li 
            className={"list-group-item"}>
            {/* // to={`quizzes/${q._id}`}> */}
            <Question q={q} />
          </li>)
      }
      </ul>
    </>
  );
};

export default Quiz;
