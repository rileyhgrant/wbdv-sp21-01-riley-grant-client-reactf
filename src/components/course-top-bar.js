import React, { useState } from 'react'

/* a function to render the bar at the top of the course manager and to offer the functionality of creating new courses */
const CourseTopBar = ({ createCourse }) => {

    /* use hooks to save state in the top input bar */
    const [createTitle, setCreateTitle] = useState("");

    /* a function to pull data from the title bar and create a course based on it */
    const createFromTitle = () => {

        setCreateTitle("");

        const newCourse = {
            title: createTitle,
            owner: "me",
            lastModified: "02/19/2020"
        }
        createCourse(newCourse);
    }


    /* return the component itself to be rendered*/
    return (
        <div className="row" style={{ "background-color": "red" }}>
            <div className="col-1"><i className="fas fa fa-bars fa-2x"></i></div>
            <div className="col-3"><h2>Course Manager</h2></div>
            <div className="col-7">
                <input
                    className="form-control"
                    onChange={(e) => setCreateTitle(e.target.value)}
                    value={createTitle}>
                </input>
            </div>
            <div className="col-1">
                <i className="fas fa fa-plus fa-2x" onClick={() => createFromTitle()}></i>
            </div>
        </div>
    )
}


export default CourseTopBar;