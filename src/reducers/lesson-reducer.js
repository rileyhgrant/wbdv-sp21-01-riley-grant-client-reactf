const initialState = {
  lessons: [
    {title: 'Lesson 1', _id: '123'},
    {title: 'Lesson 2', _id: '234'},
    {title: 'Lesson 3', _id: '345'},
  ]
}

const lessonReducer = (state = initialState, action) => {
  switch( action.type ) {

    case "CREATE_LESSON":
      break;
    case "FIND_LESSON_FOR_MODULE":
      break;
    case "FIND_LESSON":
      break;
    case "UPDATE_LESSON":
      break;
    case "DELETE_LESSON":
      break;
    default:
      return state;

  }
}

export default lessonReducer