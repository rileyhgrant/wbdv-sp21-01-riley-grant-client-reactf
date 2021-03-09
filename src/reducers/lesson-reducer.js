const initialState = {
  lessons: [
    // {title: 'Lesson 1', _id: '123'},
    // {title: 'Lesson 2', _id: '234'},
    // {title: 'Lesson 3', _id: '345'},
  ]
}

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FIND_LESSONS_FOR_MODULE":
      return {
        lessons: action.lessons,
      }

    case "FIND_LESSON":
      // I don't see how this can be implemented, the reducer expects a state back from
      //   every case. I have a find function in the service, but here I don't understand
      //   how to return a single module and not break everything.
      return state;

    case "CREATE_LESSON":
      const newStateCreated = {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson,
        ]
      }
      return newStateCreated;

    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(lesson => {
          if (lesson._id === action.updatedLesson._id) {
            return action.updatedLesson;
          } else {
            return lesson;
          }
        })
      }

    case "DELETE_LESSON":
      const newStateDeleted = {
        lessons: state.lessons.filter(lesson => {
          if (lesson._id !== action.lessonToDelete._id) {
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
}

export default lessonReducer