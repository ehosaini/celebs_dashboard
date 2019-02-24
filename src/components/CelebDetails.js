import React from 'react'
import { connect } from 'react-redux'

import { fetchCeleb } from '../actions'

class CelebDetails extends React.Component {
  componentDidMount () {
    if (this.props.celebId) {
      this.props.fetchCeleb(this.props.celebId)
    }
  }

  render () {
    return (
      <div>
        <h3> { this.props.celeb.name } </h3>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { celeb: state.celeb }
}

export default connect(mapStateToProps, { fetchCeleb })(CelebDetails)
