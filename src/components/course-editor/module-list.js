import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import moduleService from '../../services/module-service';

import EditableItem from '../editable-item'

const ModuleList = (
  {
    modules = [],
    findModulesForCourse,
    createModule,
    updateModule,
    deleteModule,
  }) => {

  const { courseId, moduleId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId);
  }, []);

  return (
    <div>
      <h2>!!ModuleList</h2>
      <ul className="list-group">
        {
          modules.map(module =>
            <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
              <EditableItem
                to={`/courses/edit/${courseId}/modules/${module._id}`}
                item={module}
                updateItem={updateModule}
                deleteItem={deleteModule} 
                />
            </li>
          )
        }
        <li className="list-group-item">
          <i className="fas fa-plus fa-2x" onClick={() => createModule(courseId)}></i>
        </li>
      </ul>
    </div>
  )
}


const stpm = (state) => ({
  modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({

  findModulesForCourse: (courseId) => {
    // alert(courseId);
    moduleService.findModulesForCourse(courseId)
      .then(theModules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: theModules,
      }))
  },

  createModule: (courseId) => {
    moduleService.createModule(courseId, { title: "New Module" })
      .then(theActualModule => dispatch({
        type: "CREATE_MODULE",
        module: theActualModule,
      }))
  },

  updateModule: (updatedModule) =>
    moduleService.updateModule(updatedModule._id, updatedModule)
      .then(status => dispatch({
        type: "UPDATE_MODULE",
        updatedModule: updatedModule,
      })),


  deleteModule: (moduleToDelete) =>
    moduleService.deleteModule(moduleToDelete._id)
      .then(status => dispatch({
        type: "DELETE_MODULE",
        moduleToDelete: moduleToDelete,
      })),


})

export default connect(stpm, dtpm)(ModuleList)
