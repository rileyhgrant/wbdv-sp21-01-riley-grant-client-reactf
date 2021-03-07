import React from 'react'
import { Link } from 'react-router-dom'

import CourseRow from './course-row'

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <table className="table">
                    {/* This solution pulled from the stack overflow thread here: https://stackoverflow.com/questions/928849/setting-table-column-width */}
                    <colgroup>
                        <col span="1" style={{ "width": "45%" }}></col>
                        <col span="1" style={{ "width": "25%" }}></col>
                        <col  span="1" style={{ "width": "15%" }}></col>
                        <col span="1" style={{ "width": "15%" }}></col>
                    </colgroup>

                    <tbody>
                        <tr className="">
                            <td className=""><h5>Title</h5></td>
                            <td className="d-none d-md-table-cell"><h5>Owned By</h5></td>
                            <td className="d-none d-lg-table-cell"><h5>Last Modified</h5></td>
                            <td className="">
                                <i className="m-1 fas fa-folder"></i>
                                <i className="m-1 fas fa-sort-alpha-up-alt"></i>
                                <Link to="/manager/grid"><i className="m-1 fas fa-th"></i></Link>
                            </td>
                        </tr>
                        {this.props.courses.map(course =>
                            <CourseRow course={course}
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}