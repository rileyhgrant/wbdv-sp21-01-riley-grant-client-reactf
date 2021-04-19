// const QUIZZES_URL = "http://localhost:3000/api/quizzes";
const QUIZZES_URL = "https://wbdv-sp21-01-node-rgrant.herokuapp.com/api/quizzes";

const findAllQuizzes = () =>
  fetch(QUIZZES_URL).then((response) => response.json());
// break vs-code auto indentation

const findQuizById = (quizID) =>
  fetch(`${QUIZZES_URL}/${quizID}`).then((response) => response.json());

// ** MOVED THIS TO 'quiz-attempts-service.js'
//   AS THAT SEEMED MORE FITTING
// =============================================
// const submitQuiz = (quizId, questions) => {
//   fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
//     method: "POST",
//     body: JSON.stringify(questions),
//     headers: {
//       "content-type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };


const api = {
  findAllQuizzes: findAllQuizzes,
  findQuizById: findQuizById,
  // submitQuiz: submitQuiz,
};

export default api;
