import React from 'react'
import { Link } from 'react-router-dom'

export default () =>
    <div>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/manager/table" className="list-group-item">
                Course Manager (Table Form)
            </Link>
            <Link to="/manager/grid" className="list-group-item">
                Course Manager (Grid Form)
            </Link>
            <Link to="/editor" className="list-group-item">
                Course Editor
            </Link>

        </div>

    </div>