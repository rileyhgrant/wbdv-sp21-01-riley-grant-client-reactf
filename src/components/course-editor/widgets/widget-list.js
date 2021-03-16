import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import widgetService from '../../../services/widget-service';
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';


const WidgetList = (
  {
    widgets = [],
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget,
  }) => {


  // const [editing, setEditing] = useState(false);
  // const [itemCache, setItemCache] = useState(widg)
  const [editingWidget, setEditingWidget] = useState({})

  const { topicId } = useParams();

  const wlEditWidget = () => {};

  const wlDeleteWidget = (widget) => { 

    // TODO: REMOVE THIS ALERT ONCE IT WORKS
    // alert("delete!");
    deleteWidget( widget );
    setEditingWidget( {} );  
  }; 

  const wlUpdateWidget = (widget) => {
    // TODO: REMOVE THIS ALERT ONCE IT WORKS
    // alert("update!");
    console.log( widget )
    updateWidget( widget );
    setEditingWidget( {} ); 
    findWidgetsForTopic( topicId );
  };



  useEffect( () => {
    findWidgetsForTopic( topicId );
  //  findWidgetsForTopic("ABC234");
  }, [topicId]);

  return (
    <div>
      <h2>Widgets<i className="ml-4 fas fa-plus text-primary" onClick={() => createWidget(topicId)}></i></h2>
      
      {/* TODO: remove both of these */}
      {/* {editingWidget.id} */}
      {/* { topicId } */}

      <ul className="list-group">
        {/* {console.log( widgets )} */}
      {
        widgets.map( w =>
          <li key={w.id} className="list-group-item">

            {/* LOGIC TO DISPLAY ICONS */}
            <div>
            {
              editingWidget.id === w.id &&
              <>
                <i onClick={() => wlUpdateWidget( editingWidget )} className="fas fa-2x fa-check float-right"></i>
                <i onClick={() => wlDeleteWidget( w )} className="d-inline fas fa-2x fa-trash float-right"></i>
              </>
            }
            {
              editingWidget.id !== w.id &&
              <>
                <i onClick={() => setEditingWidget( w )} className="fas fa-2x fa-cog float-right"></i>
              </>
            }
            </div>


            {/* LOGIC TO DISPLAY WIDGET */}
            <div>
            { w.type === "HEADING" &&
              <HeadingWidget 
                widget={w}
                editing={editingWidget.id === w.id}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget}/> }
            { w.type === "PARAGRAPH" &&
              <ParagraphWidget 
                widget={w}
                editing={editingWidget.id === w.id}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget}/> }
            </div>
          </li>  
        )
      }
      
      {/* <li className="list-group-item">
        <i>Testing</i>
      </li> */}
      </ul>
    </div>
  )
}



const stpm = (state) => ({
  widgets: state.widgetReducer.widgets,
})

const dtpm = (dispatch) => ({

  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
      .then(theWidgets => dispatch({
        type: "FIND_WIDGETS_FOR_TOPIC",
        widgets: theWidgets,
      }))
  },

  createWidget: (topicId) => {
    // alert("test")
    widgetService.createWidget( topicId, 
      { 
        text: "New Widget",
        type: "HEADING",
        size: 1,
      })
      .then(theActualWidget => dispatch({
        type: "CREATE_WIDGET",
        widget: theActualWidget,
      }))
  },

  deleteWidget: (widgetToDelete) => {
    widgetService.deleteWidget( widgetToDelete.id )
      .then(status => dispatch({
        type: "DELETE_WIDGET",
        widgetToDelete: widgetToDelete,
      }))
  },

  updateWidget: (widgetToUpdate) => {
    widgetService.updateWidget( widgetToUpdate )
      .then( status => dispatch({
        type: "UPDATE_WIDGET",
        widgetToUpdate: widgetToUpdate,
      }))
  }


})

export default connect(stpm, dtpm)(WidgetList);