import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import lessonService from '../../services/lesson-service'
import EditableItem from '../editable-item'

/* A functional react component for lesson tabs */
const LessonTabs = (
  {
    lessons = [],
    findLessonsForModule,
    createLesson,
    updateLesson,
    deleteLesson,
  }) => {

  const { courseId, moduleId } = useParams();

  useEffect(() => {
    findLessonsForModule(moduleId);
  })

  return (
    <div>
      <h2>!!LessonTabs</h2>
      <ul className="nav nav-tabs">
        {
          lessons.map(lesson =>
            <li className="nav-item">
              <EditableItem
                to={`/courses/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                item={lesson}
                updateItem={updateLesson}
                deleteItem={deleteLesson}/>
            </li>
          )
        }
        <li className="nav-item">
          <i className="fas fa-plus fa-2x" onClick={() => createLesson(moduleId)}></i>
        </li>
      </ul>
    </div>
  )
}
// break vs-code auto indent


const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({

  findLessonsForModule: (lessonId) => {
    lessonService.findLessonsForModule(lessonId)
    .then(theTopics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics: theTopics,
    }))
  },

  createLesson: (moduleId) => {
    lessonService.createLesson( moduleId, {title: "New Lesson"})
    .then(theActualLesson => dispatch({
      type: "CREATE_LESSON",
      lesson: theActualLesson,
    }))
  },

  updateLesson: (updatedLesson) => 
    lessonService.updateLesson( updatedLesson._id, updatedLesson )
    .then( status => dispatch({
      type: "UPDATE_LESSON",
      updatedLesson: updatedLesson,
    })),

  deleteLesson: (lessonToDelete) =>
    lessonService.deleteLesson( lessonToDelete._id )
    .then( status => dispatch({
      type: "DELETE_LESSON",
      lessonToDelete: lessonToDelete,
    })),

})

export default connect(stpm, dtpm)(LessonTabs)
