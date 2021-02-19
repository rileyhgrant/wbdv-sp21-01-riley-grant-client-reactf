import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CourseRow = ({ course, updateCourse, deleteCourse }) => {

    /* react 'hooks', gives the option for functions to maintain some small state */
    const [ editing, setEditing ] = useState( false );
    const [ newTitle, setNewTitle ] = useState( course.title );


    

    const editCourse = () => {
        setEditing( true );
        setNewTitle( course.title );
    }

    const saveCourse = () => {
        setEditing( false );
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

    const rowFunctions = {
        editCourse: editCourse,
        updateCourse: saveCourse,
        deleteCourse: removeCourse
    }


    return (<tr>
        <td>
            { !editing && <Link to="/editor">{course.title}</Link> }
            { editing &&
                <input
                    className="form-control"
                    onChange={(e) => setNewTitle( e.target.value )} 
                    value={newTitle} />
            }
        </td>
        <td>{course.owner}</td>
        <td>{course.lastModified}</td>
        <td>
            {!editing && <i onClick={ () => rowFunctions.editCourse() } className="m-1 fas fa-edit"></i>}
            {editing  && <i onClick={ () => rowFunctions.updateCourse() }className="fas fa-check" ></i>}
            {editing  && <i onClick={ () => rowFunctions.removeCourse() } className="m-1 fas fa-trash"></i>}
        </td>
    </tr>
    )
}

export default CourseRow;