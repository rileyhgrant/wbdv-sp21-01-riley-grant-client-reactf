const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/modules';
const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/lessons';

const findLessonsForModule = (moduleId) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`)
    .then(reponse => reponse.json());

const createLesson = (moduleId, lesson) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`, {
    method: "POST",
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => response.json());

const findLesson = (lessonId) => {
  fetch(`${LESSONS_URL}/${lessonId}`)
    .then(response => response.json());
}

const updateLesson = (lessonId, lesson) =>
  fetch(`${LESSONS_URL}/${lessonId}`, {
    method: "PUT",
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(response => response.json());

const deleteLesson = (lessonId) =>
  fetch(`${LESSONS_URL}/${lessonId}`, {
    method: "DELETE",
  })
    .then(response => response.json());


const lessonAPI = {
  findLessonsForModule,
  findLesson,
  createLesson,
  deleteLesson,
  updateLesson,
}

/* export the default object as an api that includes all of the functions */
export default lessonAPI;