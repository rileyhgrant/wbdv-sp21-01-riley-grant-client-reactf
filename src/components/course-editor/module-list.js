import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditableItem from '../editable-item'

const ModuleList = ({ modules = [], createModule, updateModule, deleteModule }) => {

  const {courseId} = useParams();
  const lessonIdDummy = "lessonId";
  const topicIdDummy = "topicId";

  return (
    <div>
      <h2>ModuleList</h2>
      <ul className="list-group">
        {
          modules.map(module =>
            <li className="list-group-item">
              <EditableItem
                to={`/courses/edit/${courseId}/modules/${module._id}`}
                item={module}
                updateItem={updateModule}
                deleteItem={deleteModule} />
            </li>
          )
        }
        <li className="list-group-item">
          <i className="fas fa-plus fa-2x" onClick={createModule}></i>
        </li>
      </ul>
    </div>
  )
}


const stpm = (state) => ({
  modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
  createModule: () => {
    dispatch({ type: "CREATE_MODULE" })
  },
  updateModule: (updatedItem) => {
    dispatch({
      updatedModule: updatedItem,
      type: "UPDATE_MODULE"
    })
  },
  deleteModule: (itemToDelete) => {
    dispatch({
      moduleToDelete: itemToDelete,
      type: "DELETE_MODULE"
    })
  }
})

export default connect(stpm, dtpm)(ModuleList)
