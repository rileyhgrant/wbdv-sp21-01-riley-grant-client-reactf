import React, { useState } from 'react'

const ImageWidget = ({
  widget,
  editing = false,
  editingWidget,
  setEditingWidget,
}) => {

  const [itemCache, setItemCache] = useState(widget);

  // const onChangeForText = (e) => {
  //   setItemCache({...itemCache})
  // }

  return (
    <>
      {
        editing &&
        <div style={{ "width": "90%" }}>
          {/* <h5 className="m-2">Widget Type:</h5> */}
          {/* <select
            className="m-2 form-control"
            onChange={(e) => setEditingWidget({ ...editingWidget, type: e.target.value })}
            value={editingWidget.type}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"LIST"}>List</option>
            <option value={"IMAGE"}>Image</option>
          </select> */}
          {/* <input
            className="m-2 form-control"
            // onChange={(e) => setItemCache({ ...itemCache, text: e.target.value })}
            onChange={(e) => setEditingWidget({ ...editingWidget, text: e.target.value })}
            value={editingWidget.text}>
          </input> */}

          {/* <br/> */}

          {/* URL */}
          <h6 className="m-2">Image URL:</h6>
          <input
            className="m-2 form-control"
            onChange={(e) => setEditingWidget({ ...editingWidget, urlRef: e.target.value })}
            value={editingWidget.urlRef}>
          </input>

          {/* WIDTH */}
          <h6 className="m-2">Image Width:</h6>
          <input
            className="m-2 form-control"
            onChange={(e) => setEditingWidget({ ...editingWidget, width: e.target.value })}
            value={editingWidget.width}>
          </input>

          {/* HEIGHT */}
          <h6 className="m-2">Image Height:</h6>
          <input
            className="m-2 form-control"
            onChange={(e) => setEditingWidget({ ...editingWidget, height: e.target.value })}
            value={editingWidget.height}>
          </input>

        </div>
      }
      {
        !editing &&
        <>
          {/* <h4>IMAGE:_{widget.text}</h4> */}
          <img src={widget.urlRef} alt="img" 
          width={widget.width}
          height={widget.height}
          />
        </>
      }
    </>
  )
}

export default ImageWidget