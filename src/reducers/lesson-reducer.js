const initialState = {
  lessons: [
    // {title: 'Lesson 1', _id: '123'},
    // {title: 'Lesson 2', _id: '234'},
    // {title: 'Lesson 3', _id: '345'},
  ]
}

const lessonReducer = (state = initialState, action) => {
  switch( action.type ) {

    case "FIND_LESSON_FOR_MODULE":
      return {
        lesson: action.lessons,
      }

    case "FIND_LESSON":
        break;

    case "CREATE_LESSON":
      const newStateCreated = {
        lessons: [
          ...state.lessons,
          action.lesson,
        ]
      }
      return newStateCreated;

    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map( lesson => {
          if (lesson._id === action.updatedLesson._id) {
            return action.updatedLesson;
          } else {
            return lesson;
          }
        })
      }

    case "DELETE_LESSON":
      const newStateDeleted = {
        lessons: state.lessons.filter( lesson => {
          if ( lesson._id !== action.lessonToDelete._id ) {
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