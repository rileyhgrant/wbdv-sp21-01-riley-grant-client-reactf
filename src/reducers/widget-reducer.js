const initialState = {
  widgets: [
    {title: 'Topic 1', _id: '123', type: "testType1", text: "testText1" },
    {title: 'Topic 2', _id: '234', type: "testType2", text: "testText2" },
    {title: 'Topic 3', _id: '345', type: "testType3", text: "testText3" },
  ]
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        widgets: action.widgets,
      }

    case "CREATE_WIDGET":
      const newStateCreated = {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget,
        ]
      }
      return newStateCreated;

    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map( w => {
          if (w.id === action.widgetToUpdate.id) {
            return action.widgetToUpdate;
          } else {
            return w;
          }
        })
      }

    case "DELETE_WIDGET":
      const newStateDeleted = {
        widgets: state.widgets.filter(w => {
          if (w.id !== action.widgetToDelete.id) {
            return true;
          } else {
            return false;
          }
        })
      }
      return newStateDeleted;


    default:
      return state;
    }

  //   case "FIND_TOPIC":
  //     // I don't see how this can be implemented, the reducer expects a state back from
  //     //   every case. I have a find function in the service, but here I don't understand
  //     //   how to return a single module and not break everything.
  //     return state;

  //   case "CREATE_TOPIC":
  //     const newStateCreated = {
  //       ...state,
  //       topics: [
  //         ...state.topics,
  //         action.topic,
  //       ]
  //     }
  //     return newStateCreated;

  //   case "UPDATE_TOPIC":
  //     return {
  //       topics: state.topics.map(topic => {
  //         if (topic._id === action.updatedTopic._id) {
  //           return action.updatedTopic;
  //         } else {
  //           return topic;
  //         }
  //       })
  //     }

  //   case "DELETE_TOPIC":
  //     const newStateDeleted = {
  //       topics: state.topics.filter(topic => {
  //         if (topic._id !== action.topicToDelete._id) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       })
  //     }
  //     return newStateDeleted;

  //   case "CLEAN_TOPICS":
  //     return {
  //       ...state,
  //       topics: [],
  //     }

  //   default:
  //     return state;
  // }
}

export default widgetReducer;