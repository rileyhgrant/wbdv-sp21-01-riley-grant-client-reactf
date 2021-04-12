// const QUESTIONS_URL = "http://localhost:3000/api/questions";
// const QUIZZES_URL = "http://localhost:3000/api/quizzes";
const QUESTIONS_URL = "https://wbdv-sp21-01-node-rgrant.herokuapp.com/api/quizzes";
const QUIZZES_URL = "https://wbdv-sp21-01-node-rgrant.herokuapp.com/api/quizzes";

const findAllQuestions = () =>
  fetch(`${QUESTIONS_URL}`).then((response) => response.json());

const findQuestionById = (questionId) => {
  fetch(`${QUESTIONS_URL}/${questionId}`).then((response) => response.json());
};

const findQuestionsByQuizId = (quizId) => 
  fetch(`${QUIZZES_URL}/${quizId}/questions`)
    .then( response => response.json())

const api = {
  findAllQuestions: findAllQuestions,
  findQuestionById: findQuestionById,
  findQuestionsByQuizId: findQuestionsByQuizId,
};

export default api;
