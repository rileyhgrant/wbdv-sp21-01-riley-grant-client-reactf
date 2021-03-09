import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './editable-item.style.client.css'


const EditableItem = (
  {
    item = { title: "Default-Title", _id: "ABC" },
    updateItem,
    deleteItem,
    to = "/default-to/",
    active,
  }) => {

  const [editing, setEditing] = useState(false);
  const [itemCache, setItemCache] = useState(item)


  /* Functions into an item to both namespace and help with readability */
  const eiEditCourse = () => {
    setEditing(true);
    setItemCache(item);
  }

  const eiUpdateCourse = () => {
    setEditing(false);
    updateItem(itemCache);
  }

  const eiDeleteCourse = () => {
    setEditing(false);
    deleteItem(item);
  }

  const itemFunctions = {
    editCourse: eiEditCourse,
    updateCourse: eiUpdateCourse,
    deleteCourse: eiDeleteCourse,
  }

  const actClass = active ? 'active eiActive' : 'text-primary';

  return (
    <>
      { !editing && <>
        <Link
          className={`d-inline nav-link ${actClass}`}
          to={to}>
          {item.title} {/* {JSON.stringify(active)} */}
        </Link>
        <i onClick={() => itemFunctions.editCourse()}
          className={`m-1 float-right fas fa-edit ${actClass}`}></i>
      </>}
      { editing && <>
        <input
          onChange={(e) => setItemCache({ ...itemCache, title: e.target.value })}
          value={itemCache.title} />
        <i onClick={() => itemFunctions.updateCourse()}
          className={`m-1 float-right fas fa-check ${actClass}`}></i>
        <i onClick={() => itemFunctions.deleteCourse()}
          className={`m-1 float-right fas fa-trash ${actClass}`}></i>
      </>}
    </>
  )
}

export default EditableItem
