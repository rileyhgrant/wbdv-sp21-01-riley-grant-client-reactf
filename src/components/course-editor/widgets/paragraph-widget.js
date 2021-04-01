import React from 'react'

const ParagraphWidget = ({
  widget,
  editing = false,
  editingWidget,
  setEditingWidget,
}) => {

  // <p>{widget.text}{editing.toString()}</p>


  return (
    <>
      {
        editing &&
        <div style={{"width":"90%"}}>
          {/* Select Widget Type */}
          {/* <select
            className="m-2 form-control"
            onChange={(e) => setEditingWidget({ ...editingWidget, type: e.target.value })}
            value={editingWidget.type}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"LIST"}>List</option>
            <option value={"IMAGE"}>Image</option>
          </select> */}

          {/* TextArea */}
          <h6 className="m-2">Paragraph Text:</h6>

          <textarea
            className="m-2 form-control"
            // onChange={(e) => setItemCache({ ...itemCache, text: e.target.value })}
            onChange={(e) => setEditingWidget({ ...editingWidget, text: e.target.value })}
            value={editingWidget.text}
            rows="8">
          </textarea>
        </div>
      }
      {
        !editing &&
        <>
          <p>{widget.text}</p>
        </>
      }
    </>
  )
}

export default ParagraphWidget