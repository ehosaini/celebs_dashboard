import React from 'react'
import { connect } from 'react-redux'


import { fetchCeleb } from '../actions'

class CelebCard extends React.Component {

  onCelebSelect = (celeb) => {
    this.props.fetchCeleb(celeb.id)
  }

  render () {
    return (
      <div onClick={() => this.onCelebSelect(this.props.celebrity)}>
        {this.props.celebrity.name}
      </div>
    )
  }
}



export default connect(null, { fetchCeleb })(CelebCard)
