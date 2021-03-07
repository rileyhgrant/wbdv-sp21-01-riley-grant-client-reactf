import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const EditableItem = (
  {
    item = { title: "Some Title", _id: "ABC" },
    updateItem,
    deleteItem,
    to = "/somewhere/to/go"
  }) => {

  const [editing, setEditing] = useState(false);
  const [itemCache, setItemCache] = useState(item)

  return (
    <>
      { !editing && <>
        <Link to={to}>{item.title}</Link>
        <i className="fas fa-edit" onClick={() => {
          setItemCache(item)
          setEditing(true)
        }}></i>
      </>}
      { editing && <>
        <input
          value={itemCache.title}
          onChange={(e) => setItemCache({ ...itemCache, title: e.target.value })}
        />
        <i className="fas fa-check" onClick={() => {
          setEditing(false)
          updateItem(itemCache)
        }}></i>
        <i className="fas fa-times" onClick={() => {
          setEditing(false)
          // setItemCache("")
          deleteItem(item)
        }}></i>
      </>}
    </>
  )
}
// break vs-code auto indent

export default EditableItem
