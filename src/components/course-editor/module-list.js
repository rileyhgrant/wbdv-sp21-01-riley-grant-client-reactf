import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import moduleService from '../../services/module-service';

import EditableItem from '../editable-item'

const ModuleList = (
  {
    modules = [],
    createModule,
    updateModule,
    deleteModule,
    findModulesForCourse,
  }) => {

  const { courseId } = useParams();
  const lessonIdDummy = "lessonId";
  const topicIdDummy = "topicId";

  useEffect(() => {
    findModulesForCourse(courseId)
  }, []);

  return (
    <div>
      <h2>!!ModuleList</h2>
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
  createModule: (courseId) => {
    moduleService.createModuleForCourse( courseId, {title: "New Module"})
    .then(theActualModule => dispatch({
      type: "CREATE_MODULE",
      module: theActualModule,
    }))
  },
  updateModule: (updatedModule) => 
    moduleService.updateModule(updatedModule._id, updatedModule)
    .then( status => dispatch({
      type: "UPDATE_MODULE",
      updatedModule
    })),

  
  deleteModule: (moduleToDelete) => 
    moduleService.deleteModule( moduleToDelete._id )
    .then( status => dispatch({
      type: "DELETE_MODULE",
      moduleToDelete: moduleToDelete,
    })),

  findModulesForCourse: (courseId) => {
    // alert(courseId);
    moduleService.findModulesForCourse(courseId)
      .then(theModules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: theModules,
      }))
  }
})

export default connect(stpm, dtpm)(ModuleList)
