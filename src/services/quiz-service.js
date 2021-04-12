// const QUIZZES_URL = "http://localhost:3000/api/quizzes";
const QUIZZES_URL = "https://wbdv-sp21-01-node-rgrant.herokuapp.com/api/quizzes";

const findAllQuizzes = () => 
    fetch( QUIZZES_URL )
      .then( response => response.json() );
// break vs-code auto indentation

const findQuizById = (quizID) =>
  fetch( `${QUIZZES_URL}/${quizID}`)
    .then( response => response.json() );

const api = {
  findAllQuizzes: findAllQuizzes,
  findQuizById: findQuizById,
}

export default api;