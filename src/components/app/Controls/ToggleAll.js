import React, {useState} from 'react'
import { connect } from 'react-redux'

import { toggleAll } from './../../../actions/appToggles'

const ToggleAll = (props) => {
  const [allToggled, setToggled] = useState(true)

  function getToggleAllClass() {
    return allToggled ? 'fas fa-eye-slash' : 'fas fa-eye'
  }

  function toggleAll() {
    setToggled(!allToggled)
    props.toggleAll()
  }

  return (
    <aside id="toggle-all" className="navbar-col">
      <div className="ui-button larger">
        <i title="Toggle visibility"
           onClick={toggleAll}
           className={`white ${getToggleAllClass()}`}></i>
      </div>
    </aside>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  toggleAll
})(ToggleAll)