const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/courses';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/modules';

const findModulesForCourse = (courseId) =>
  fetch(`${COURSES_URL}/${courseId}/modules`)
    .then(response => response.json());

const createModule = (courseId, module) =>
  fetch(`${COURSES_URL}/${courseId}/modules`, {
    method: "POST",
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => response.json());


const findModule = (moduleId) => {
  fetch(`${MODULES_URL}/${moduleId}`)
    .then(response => response.json());
}

const updateModule = (moduleId, module) =>
  fetch(`${MODULES_URL}/${moduleId}`, {
    method: "PUT",
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(response => response.json());

const deleteModule = (moduleId) =>
  fetch(`${MODULES_URL}/${moduleId}`, {
    method: "DELETE",
  })
    .then(response => response.json());


const moduleAPI = {
  findModulesForCourse,
  findModule,
  createModule,
  deleteModule,
  updateModule,
}
/* export the default object as an api that includes all of the functions*/
export default moduleAPI;