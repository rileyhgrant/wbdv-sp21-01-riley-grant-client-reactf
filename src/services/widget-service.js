// // const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/lessons';
// const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001661897/topics';
// const WIDGETS_URL = 'https://localhost:8080/topics'
// const LOCAL_URL = 'http://localhost:8080/api';
const LOCAL_URL = 'https://wbdv-sp21-01-java-rgrant.herokuapp.com/api'
// const LOCAL_URL_WITH_TOPIC = 'http://localhost:8080/api/topics';


const findWidgetsForTopic = (topicId) =>
  fetch(`${LOCAL_URL}/topics/${topicId}/widgets`)
    .then(response => response.json());


// Both of these were optional according to the assignment document
//   so they were not implemented

// const findWidgetById = (widgetId) => {}
// const findAllWidgets = () => {}

const createWidget = ( topicId, widget ) =>
  fetch(`${LOCAL_URL}/topics/${topicId}/widgets`, {
    method: "POST",
    body: JSON.stringify( widget ),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => response.json());


const updateWidget = (widget) => 
  fetch(`${LOCAL_URL}/widgets/${widget.id}`, {
    method: "PUT",
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(response => response.json());


const deleteWidget = (widgetId) =>
  fetch(`${LOCAL_URL}/widgets/${widgetId}`, {
    method: "DELETE",
  })
    .then( response => response.json());

const widgetAPI = {
  findWidgetsForTopic,
  createWidget,
  deleteWidget,
  updateWidget,
}

/* export the default object as an api that includes all of the functions */
export default widgetAPI
