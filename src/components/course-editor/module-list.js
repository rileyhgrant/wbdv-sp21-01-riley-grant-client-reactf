import React from 'react'
import { connect } from 'react-redux';

const ModuleList = ({ modules }) =>
  <div>
    <h2>ModuleList</h2>
    <ul className="list-group">
      {
        modules.map(module =>
          <li className="list-group-item">{module.title}</li>
        )
      }
    </ul>
  </div>
// break vs-code auto indent


const stpm = (state) => ({
  modules: state.modules
})

const dtpm = (dispatch) => { }

export default connect(stpm, dtpm)( ModuleList )
