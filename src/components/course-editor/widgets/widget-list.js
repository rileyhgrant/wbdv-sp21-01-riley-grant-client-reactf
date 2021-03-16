import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import widgetService from '../../../services/widget-service';
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';


const WidgetList = (
  {
    widgets = [],
    findWidgetsForTopic,
  }) => {

  const { topicId } = useParams();

  useEffect( () => {
   findWidgetsForTopic("ABC234");
  }, []);

  return (
    <div>
      <h2>Widget List</h2>
      <ul className="list-group">
        {console.log( widgets )}
      {
        widgets.map( w =>
          <li key={w.id} className="list-group-item">
            { w.type === "HEADING" &&
              <HeadingWidget widget={w}/> }
            { w.type === "PARAGRAPH" &&
              <ParagraphWidget widget={w}/>}
          </li>  
        )
      }
      </ul>
    </div>
  )
}



const stpm = (state) => ({
  widgets: state.widgetReducer.widgets,
})

const dtpm = (dispatch) => ({


  // findWidgetsForTopic: (topicId) => {

  //   // const widgets: [
  //   //   {title: 'Topic 1', _id: '123'},
  //   //   {title: 'Topic 2', _id: '234'},
  //   //   {title: 'Topic 3', _id: '345'},
  //   // ]

  //   return (
  //     dispatch({
  //       type: "FIND_WIDGETS_FOR_TOPIC",
  //       widgets: [],
  //     })
  //   )


  // }

  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
      .then(theWidgets => dispatch({
        type: "FIND_WIDGETS_FOR_TOPIC",
        widgets: theWidgets,
      }))
  }
})

export default connect(stpm, dtpm)(WidgetList);