const initialState = {
  modules: [
    // { title: 'CS5610', _id: '123' },
    // { title: 'CS3200', _id: '234' },
    // { title: 'CS5200', _id: '345' },
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FIND_MODULES_FOR_COURSE":
      return {
        // ...state,
        modules: action.modules,
      }

    case "CREATE_MODULE":
      const newStateCreate = {
        // ...state,
        modules: [
          ...state.modules,
          action.module
        ]
      }
      return newStateCreate;

    case "DELETE_MODULE":
      const newStateDelete = {
        modules: state.modules.filter( module => {
          if (module._id !== action.moduleToDelete._id) {
            return true;
          } else {
            return false;
          }
        })
      }
      return newStateDelete;


    case "FIND_MODULE":
      break;

    case "UPDATE_MODULE":
      return {
        // ...state,
        modules: state.modules.map(module => {
          if (module._id === action.updatedModule._id) {
            return action.updatedModule;
          } else {
            return module;
          }
        })
      }

    default:
      return state;

  }
}

export default moduleReducer