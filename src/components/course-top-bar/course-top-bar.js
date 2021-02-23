import React, { useState } from 'react'

import './course-top-bar.style.client.css'


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
        <div>
            <i className="fa fa-plus fa-2x add-btn sticky-add-btn" onClick={() => createFromTitle()} />
            <div className="row align-items-center m-2">
                <div className="col-1"><i className="fas fa fa-bars fa-2x"></i></div>
                <div className="col-lg-4 d-none d-lg-block"><h2>Course Manager</h2></div>
                <div className="col-10 col-lg-6">
                    <input
                        className="form-control"
                        onChange={(e) => setCreateTitle(e.target.value)}
                        value={createTitle}>
                    </input>
                </div>
                <div className="col-1">
                    <i className="fas fa fa-plus fa-2x add-btn" onClick={() => createFromTitle()}></i>
                </div>
            </div>
        </div>
    )
}


export default CourseTopBar;