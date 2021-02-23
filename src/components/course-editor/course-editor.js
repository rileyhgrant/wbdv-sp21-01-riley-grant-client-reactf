import React from 'react'
import { Link } from 'react-router-dom'

import './course-editor.style.client.css'


const CourseEditor = ({ history }) =>

    <div className="container" style={{ "margin-top": "20px" }}>
        <div className="row header-text ce-header" style={{ "padding-top": "20px" }}>
            <div className="col-1">
                <a onClick={() => history.goBack()} ><i className="fa fa-times fa-2x course-editor-fa-color" /></a>
            </div>
            <div className="col-3 course-title">
                <h2>csNNNN: Course</h2>
            </div>
            {/* Nav Topics Section */}
            <div className="col-7">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="">
                            Lesson 1
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="">
                            Lesson 2 <i className="pull-right fa fa-trash" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="">
                            Lesson 3
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" tabIndex={-1} aria-disabled="true" href="">
                            Lesson 4
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <a href="" className="top-links-plus"><i className="fa fa-plus fa-2x" /></a>
            </div>
        </div>
        <div className="row">
            {/* Mods Section */}
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item active">
                        Mod1 - jQuery <i className="pull-right fa fa-trash" />
                    </li>
                    <li className="list-group-item">
                        Mod2 - React <i className="pull-right fa fa-trash" />
                    </li>
                    <li className="list-group-item">
                        Mod3 - jQuery <i className="pull-right fa fa-trash" />
                    </li>
                    <li className="list-group-item">
                        Mod4 - Native <i className="pull-right fa fa-trash" />
                    </li>
                    <li className="list-group-item">
                        Mod5 - Angular <i className="pull-right fa fa-trash" />
                    </li>
                    <li className="list-group-item">
                        Mod6 - Node <i className="pull-right fa fa-trash" />
                    </li>
                    <li className="list-group-item">
                        Mod7 - Mongo <i className="pull-right fa fa-trash" />
                    </li>
                </ul>
            </div>
            {/* Pills Section */}
            <div className="col-8">
                <div className="pills-section">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="">Topic 3</a>
                        </li>
                        <li>
                            <a className="nav-link disabled" href="" tabIndex={-1} aria-disabled="true">Topic 4</a>
                        </li>
                        <li>
                            <a className="nav-link" href="" tabIndex={-1} aria-disabled="true"><i className="fa fa-plus" /></a>
                        </li>
                    </ul>
                </div>
                <div className="widget-placeholder">
                    Widget Placeholder
                </div>
            </div>
            <br />
        </div>
    </div>


export default CourseEditor;