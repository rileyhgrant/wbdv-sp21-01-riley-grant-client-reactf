import React from 'react'
import { Link } from 'react-router-dom'


const CourseEditor = ({history}) =>
    <h1>
        {/* <Link to="/manager/table">
            <i className = "fas fa-arrow-left"></i>
        </Link> */}
        <span onClick={() => history.goBack()}>
            <i className = "fas fa-arrow-left"></i>
        </span>
        __Course Editor Yah
    </h1>
// comment so vs-code doesn't auto indent

// this one is more wordy! you can the line 3 syntax if its a 1 line return statement
// const CourseEditor = () => {
//     return (
//         <h1>Course Editor!</h1>
//     );
// }

export default CourseEditor;