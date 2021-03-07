import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './course-card'

const CourseGrid = ({ courses, updateCourse, deleteCourse }) =>
    <div>

        <table className="table">

            {/* This solution pulled from the stack overflow thread here: https://stackoverflow.com/questions/928849/setting-table-column-width */}
            <colgroup>
                <col span="1" style={{ "width": "45%" }}></col>
                <col span="1" style={{ "width": "25%" }}></col>
                <col span="1" style={{ "width": "15%" }}></col>
                <col span="1" style={{ "width": "15%" }}></col>
            </colgroup>

            <tbody>
                <tr className="">
                    <td className="d-none d-md-table-cell"><h5>Recent Documents</h5></td>
                    <td className="d-none d-md-table-cell"><h5>Owned By</h5></td>
                    <td className=""></td>
                    <td className="">
                        <i className="m-1 fas fa-folder"></i>
                        <i className="m-1 fas fa-sort-alpha-up-alt"></i>
                        <Link to="/manager/table"><i className="m-1 fas fa-list"></i></Link>
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="d-flex flex-wrap">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} />
                )}
        </div>
    </div>

export default CourseGrid;