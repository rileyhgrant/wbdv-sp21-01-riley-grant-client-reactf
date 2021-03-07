import React, { useState } from 'react'
import { Link } from 'react-router-dom'


/* a function to render a single course row */
const CourseRow = ({ course, updateCourse, deleteCourse }) => {

    /* react hooks to be used in this component */
    const [ editing, setEditing ] = useState( false );
    const [ newTitle, setNewTitle ] = useState( course.title );

    /* a function to edit this selected course */
    const editCourse = () => {
        setEditing( true );
        setNewTitle( course.title );
    }

    /* a function to save this course that is being edited, using values stored in hooks */
    const saveCourse = () => {
        setEditing( false );
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

    /* an object used to namespace the editing functions specific to this component */
    const rowFunctions = {
        editCourse: editCourse,
        updateCourse: saveCourse,
        deleteCourse: removeCourse
    }

    /* the return statement to tell react what to render */
    return (<tr>
        <td>
            { !editing && <Link to={`/courses/edit/${course._id}`}><i className="fas fa-file m-1"></i>{course.title}</Link> }
            { editing &&
                <input
                    className="form-control"
                    onChange={(e) => setNewTitle( e.target.value )} 
                    value={newTitle} />
            }
        </td>
        <td className="d-none d-md-table-cell">{course.owner}</td>
        <td className="d-none d-lg-table-cell">{course.lastModified}</td>
        <td>
            { !editing && <i onClick={ () => rowFunctions.editCourse() }   className="m-1 fas fa-edit"></i>}
            { editing  && <i onClick={ () => rowFunctions.updateCourse() } className="m-1 fas fa-check" ></i>}
            { editing  && <i onClick={ () => rowFunctions.deleteCourse() } className="m-1 fas fa-trash"></i>}
        </td>
    </tr>
    )
}

export default CourseRow;