import React from 'react'
import { connect } from 'react-redux'


import { fetchCeleb } from '../actions'

class CelebCard extends React.Component {

  onCelebSelect = (id) => {
    this.props.fetchCeleb(id)
  }

  render () {
    return (
      <div onClick={this.onCelebSelect(this.props.celebrity.id)}>
        {this.props.celebrity.name}
      </div>
    )
  }
}



export default connect(null, { fetchCeleb })(CelebCard)
