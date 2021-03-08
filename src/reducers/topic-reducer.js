const initialState = {
  topics: [
    // {title: 'Topic 1', _id: '123'},
    // {title: 'Topic 2', _id: '234'},
    // {title: 'Topic 3', _id: '345'},
  ]
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FIND_TOPICS_FOR_LESSON":
      return {
        topics: action.topics,
      }

    case "FIND_TOPIC":
      return state;

    case "CREATE_TOPIC":
      const newStateCreated = {
        ...state,
        topics: [
          ...state.topics,
          action.topic,
        ]
      }
      return newStateCreated;

    case "UPDATE_TOPIC":
      return {
        topics: state.topics.map(topic => {
          if (topic._id === action.updatedTopic._id) {
            return action.updatedTopic;
          } else {
            return topic;
          }
        })
      }

    case "DELETE_TOPIC":
      const newStateDeleted = {
        topics: state.topics.filter(topic => {
          if (topic._id !== action.topicToDelete._id) {
            return true;
          } else {
            return false;
          }
        })
      }
      return newStateDeleted;

    case "CLEAN_TOPICS":
      return {
        ...state,
        topics: [],
      }

    default:
      return state;
  }
}

export default topicReducer