// const ATTEMPTS_URL = "http://localhost:3000/api/attempts";
// const QUIZZES_URL = "http://localhost:3000/api/quizzes";
const ATTEMPTS_URL = "https://wbdv-sp21-01-node-rgrant.herokuapp.com/api/attempts";
const QUIZZES_URL = "https://wbdv-sp21-01-node-rgrant.herokuapp.com/api/quizzes";

const findAllAttempts = () => {
  fetch(`${ATTEMPTS_URL}`).then((response) => response.json());
};

const findAttemptsForQuiz = (quizId) => 
  fetch(`${QUIZZES_URL}/${quizId}/attempts`).then((response) =>
    response.json()
  );

const submitAttempt = (quizId, questions) => 
  fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
    method: "POST",
    body: JSON.stringify(questions),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())


const api = {
  findAllAttempts: findAllAttempts,
  findAttemptsForQuiz: findAttemptsForQuiz,
  submitAttempt: submitAttempt,
};

export default api;
