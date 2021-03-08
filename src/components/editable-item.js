import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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


  return (
    <>
      { !editing && <>
        <Link 
          // className={`nav-link ${active ? 'active' : ''}`} 
          to={to}>
          {item.title} {JSON.stringify(active)}
        </Link>
        <i onClick={() => itemFunctions.editCourse()} className="m-1 fas fa-edit" ></i>
      </>}
      { editing && <>
        <input
          onChange={(e) => setItemCache({ ...itemCache, title: e.target.value })}
          value={itemCache.title} />
        <i onClick={() => itemFunctions.updateCourse()} className="m-1 fas fa-check"></i>
        <i onClick={() => itemFunctions.deleteCourse()} className="m-1 fas fa-trash"></i>
      </>}
    </>
  )
}

export default EditableItem


// { !editing && <>
    //   <Link to={to}>{item.title}</Link>
    //   <i className="fas fa-edit" onClick={() => {
    //     //setItemCache(item)
    //     setEditing(true);
    //     setItemCache(item);
    //   }}></i>
    // </>}
    // { editing && <>
    //   <input
    //     onChange={(e) => setItemCache({ ...itemCache, title: e.target.value })}
    //     value={itemCache.title}
    //   />
    //   <i className="fas fa-check" onClick={() => {
    //     setEditing(false)
    //     updateItem(itemCache)
    //   }}></i>
    //   <i className="fas fa-times" onClick={() => {
    //     // setItemCache("")
    //     setEditing(false);
    //     deleteItem(item);
    //   }}></i>
    // </>}
