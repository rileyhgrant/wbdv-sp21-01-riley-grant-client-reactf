import React from 'react'
import { Link } from 'react-router-dom'

export default () =>
    <div>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/courses/table" className="list-group-item">
                Course Manager (Table Form)
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Course Manager (Grid Form)
            </Link>
            {/* <Link to="/courses/edit" className="list-group-item">
                Course Editor
            </Link> */}

        </div>

    </div>