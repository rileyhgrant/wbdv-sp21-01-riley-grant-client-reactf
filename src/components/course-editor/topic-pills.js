import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import topicService from '../../services/topic-service';
import EditableItem from '../editable-item';

const TopicPills = (
  {
    topics = [],
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic,
    cleanTopics,
  }) => {

  const { layout, courseId, moduleId, lessonId, topicId } = useParams();

  useEffect(() => {
    console.log("Load topics for lesson: " + lessonId);
    if (moduleId !== "undefined" && typeof moduleId !== "undefined" && lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId);
    } else {
      cleanTopics();
    }
  }, [lessonId, moduleId]);

  return (
    <div>
      <h2>!!TopicPills</h2>
      <ul className="nav nav-pills">
        {
          topics.map(topic =>
            <li className={`nav-item ${topic._id === topicId ? 'nav-link active' : ''}`}>
              <EditableItem
                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                item={topic}
                updateItem={updateTopic}
                deleteItem={deleteTopic}
              />
            </li>
          )
        }
        <li className="nav-item">
          <i className="fas fa-plus fa-2x" onClick={() => createTopic(lessonId)}></i>
        </li>
      </ul>
    </div>
  )
}

const stpm = (state) => ({
  topics: state.topicReducer.topics,
})

const dtpm = (dispatch) => ({

  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId)
      .then(theTopics => dispatch({
        type: "FIND_TOPICS_FOR_LESSON",
        topics: theTopics,
      }))
  },

  createTopic: (lessonId) => {
    topicService.createTopic(lessonId, { title: "New Topic" })
      .then(theActualTopic => dispatch({
        type: "CREATE_TOPIC",
        topic: theActualTopic,
      }))
  },

  updateTopic: (updatedTopic) => {
    topicService.updateTopic(updatedTopic._id, updatedTopic)
      .then(status => dispatch({
        type: "UPDATE_TOPIC",
        updatedTopic: updatedTopic,
      }))
  },

  deleteTopic: (topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
      .then(status => dispatch({
        type: "DELETE_TOPIC",
        topicToDelete: topicToDelete,
      }))
  },

  cleanTopics: () => {
    dispatch({
      type: "CLEAN_TOPICS",
    })
  },
})

export default connect(stpm, dtpm)(TopicPills)
