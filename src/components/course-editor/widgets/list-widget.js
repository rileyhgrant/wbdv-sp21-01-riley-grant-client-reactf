import React, { useState } from 'react'
import widgetList from './widget-list';

const ListWidget = ({
  widget,
  editing = false,
  editingWidget,
  setEditingWidget,
}) => {

  const [itemCache, setItemCache] = useState(widget);

  return (
    <>
      {
        editing &&
        <div style={{ "width": "90%" }}>

          {/* Select Widget Type */}
          <input
            type="checkbox"
            checked={editingWidget.ordered}
            onChange={(e) => setEditingWidget({ ...editingWidget, ordered: !editingWidget.ordered })}
            className="ml-2"
          />
          <span className="m-2">Ordered</span>

          {/* TextArea */}
          <h6 className="m-2">List Items:</h6>
          <textarea
            className="m-2 form-control"
            onChange={(e) => setEditingWidget({ ...editingWidget, text: e.target.value })}
            value={editingWidget.text}
            rows="8">
          </textarea>

        </div>
      }
      
      {
        !editing &&
        <div>
          {/* <h4>LIST:_{widget.text}</h4> */}
          {widget.ordered &&
            <ol>
              {
                widget.text.split("\n").map((item) => {
                  return (
                    <li>{item}</li>
                  )
                })
              }
            </ol>
          }
          {!widget.ordered &&
            <ul>
              {
                widget.text.split("\n").map((item) => {
                  return (
                    <li>{item}</li>
                  )
                })
              }
            </ul>
          }
        </div>
      }
    </>
  );
};

export default ListWidget