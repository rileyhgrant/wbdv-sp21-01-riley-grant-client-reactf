import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditableItem from '../editable-item'

const LessonTabs = ({ lessons = [] }) => {

  const {courseId, moduleId} = useParams();

  return (<div>
    <h2>!!LessonTabs</h2>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
          <li className="nav-item">
            <EditableItem
              to={`/courses/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
              item={lesson}
              updateItem={(newItem) => { alert(newItem) }} />
          </li>
        )
      }
    </ul>
  </div>
  )
}
// break vs-code auto indent


const stpm = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => { }

export default connect(stpm, dtpm)(LessonTabs)
