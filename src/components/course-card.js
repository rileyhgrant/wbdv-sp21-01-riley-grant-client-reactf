import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import placeholder from '../assets/card-placeholder.jpg'


/* a function to render a single course card */
const CourseCard = ({ course, updateCourse, deleteCourse }) => {

    /* react hooks to be used in this component */
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(course.title)

    /* a function to edit this selected course */
    const editCourse = () => {
        setEditing( true );
        setNewTitle( course.title );
    }

    /* a function to save this course that is being edited, using values stored in hooks */
    const saveCourse = () => {
        setEditing(false);
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse( newCourse );
    }

    /* a function to remove the course that is being edited */
    const removeCourse = () => {
        setEditing( false );
        deleteCourse( course );
    }

    /* an object used to namespace th eediting functions specific to this component */
    const cardFunctions = {
        editCourse: editCourse,
        updateCourse: saveCourse,
        deleteCourse: removeCourse
    }

    /* the return statement to tell react what to render */
    return (
        <div class="card m-2" style={{ width: "18rem" }}>
            <img class="card-img-top" src={placeholder} alt="Card image cap" />
            <div class="card-body">
                { !editing && <h5 class="card-title">{course.title}</h5>}
                { editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setNewTitle( e.target.value )}
                        value={newTitle}/>
                }
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <div>
                    <Link class="btn btn-primary" to="/editor">{course.title}</Link>
                    {!editing && <i onClick={ () => cardFunctions.editCourse()   } className="fas fa-edit float-right m-1"></i>}
                    {editing  && <i onClick={ () => cardFunctions.deleteCourse() } className="fas fa-trash float-right m-1"></i>}
                    {editing  && <i onClick={ () => cardFunctions.updateCourse() } className="fas fa-check float-right m-1" ></i>}
                </div>

            </div>
        </div>
    );
}
// break vs-code auto indent

export default CourseCard