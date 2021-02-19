import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import placeholder from '../assets/card-placeholder.jpg'


const CourseCard = ({ course, updateCourse, deleteCourse }) => {

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(course.title)

    const editCourse = () => {
        setEditing( true );
        setNewTitle( course.title );
    }

    const saveCourse = () => {
        setEditing(false);
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse( newCourse );
    }

    const removeCourse = () => {
        setEditing( false );
        deleteCourse( course );
    }

    const cardFunctions = {
        editCourse: editCourse,
        updateCourse: saveCourse,
        deleteCourse: removeCourse
    }

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
                <Link class="btn btn-primary" to="/editor">{course.title}</Link>
                <div>
                    {!editing && <i onClick={ () => cardFunctions.editCourse() } className="fas fa-edit pull-right"></i>}
                    {editing  && <i onClick={ () => cardFunctions.updateCourse() }className="fas fa-check" ></i>}
                    {editing  && <i onClick={ () => cardFunctions.removeCourse() } className="fas fa-trash"></i>}
                </div>

            </div>
        </div>
    );
}
// break vs-code auto indent

export default CourseCard