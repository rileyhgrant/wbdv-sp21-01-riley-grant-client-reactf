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

    case "FIND_MODULE":
      break;

    case "CREATE_MODULE":
      const newStateCreated = {
        // ...state,
        modules: [
          ...state.modules,
          action.module,
        ]
      }
      return newStateCreated;

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

    case "DELETE_MODULE":
      const newStateDeleted = {
        modules: state.modules.filter(module => {
          if (module._id !== action.moduleToDelete._id) {
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

export default moduleReducer