// // const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/lessons';
// const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/topics';
// const WIDGETS_URL = 'https://localhost:8080/topics'
const LOCAL_URL = 'http://localhost:8080/api';
const LOCAL_URL_WITH_TOPIC = 'http://localhost:8080/api/topics';


const findWidgetsForTopic = (topicId) =>
  // fetch(`http://localhost:8080/api/widgets`)
  //   .then( response => response.json() );
  fetch(`${LOCAL_URL_WITH_TOPIC}/${topicId}/widgets`)
    .then( response => response.json() );

//   // fetch(`${LESSONS_URL}/${lessonId}/topics`)
//   //   .then(response => response.json());

// // const findTopic = (topicId) =>
// //   fetch(`${TOPICS_URL}/${topicId}`)
// //     .then(response => response.json());

// // const createTopic = (lessonId, topic) =>
// //   fetch(`${LESSONS_URL}/${lessonId}/topics`, {
// //     method: "POST",
// //     body: JSON.stringify(topic),
// //     headers: {
// //       'content-type': 'application/json',
// //     },
// //   })
// //     .then(response => response.json());

// // const updateTopic = (topicId, topic) =>
// //   fetch(`${TOPICS_URL}/${topicId}`, {
// //     method: "PUT",
// //     body: JSON.stringify(topic),
// //     headers: {
// //       'content-type': 'application/json',
// //     }
// //   })
// //     .then(response => response.json());

// // const deleteTopic = (topicId) =>
// //   fetch(`${TOPICS_URL}/${topicId}`, {
// //     method: "DELETE",
// //   })
// //     .then(response => response.json());


const widgetAPI = {
  findWidgetsForTopic,
  // findTopic,
  // createTopic,
  // deleteTopic,
  // updateTopic,
}

/* export the default object as an api that includes all of the functions */
export default widgetAPI
