import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CourseTopBar from './course-top-bar/course-top-bar';
import CourseTable from './course-table/course-table';
import CourseGrid from './course-grid/course-grid';
import CourseEditor from './course-editor/course-editor';

import courseService from '../services/course-service';

/* A class for the CourseManager component of this assignment */
export default class CourseManager extends React.Component {

    /* initialize blank state before make an API call to get data */
    state = {
        courses: [],
    }

    /* fetch courses after component mounts */
    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({ courses }));
            document.title = 'cs5610: A5; RGrant';
    }

    /* A method that updates the state to update add given course */
    createCourse = (newCourse) => {

        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse);
                this.setState(this.state);
            });
    }

    /* A method that updates the state to remove the given course */
    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            });
    }

    /* A method that updates the state to update the given course */
    updateCourse = (course) => {
        courseService.updateCourse(course, course._id)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    /* the render function to create the */
    render() {
        return (
            <div className="container-fluid">
                <Route path="/courses/table" exact={true}>
                    <CourseTopBar createCourse={this.createCourse} />
                    <CourseTable courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                    />
                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseTopBar createCourse={this.createCourse} />
                    <CourseGrid courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                    />
                </Route>

                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
                    exact={true}
                    render={(props) => <CourseEditor{...props} />}>
                </Route>

            </div>
        )
    }
}

// export default CourseManager;