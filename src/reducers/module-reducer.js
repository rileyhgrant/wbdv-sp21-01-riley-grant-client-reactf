const initialState = {
  modules: [
    {title: 'CS5610', _id: '123'},
    {title: 'CS3200', _id: '234'},
    {title: 'CS5200', _id: '345'},
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch( action.type ) {

    case "CREATE_MODULE":
      break;
    case "FIND_MODULES_FOR_COURSE":
      break;
    case "FIND_MODULE":
      break;
    case "UPDATE_MODULE":
      break;
    case "DELETE_MODULE":
      break;
    default:
      return state;

  }
}

export default moduleReducer