import React from 'react'
import { connect } from 'react-redux'

class CelebDetails extends React.Component {
  render () {
    return (
      <div>
        <h3> { this.props.celeb.name } </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { celeb: state.celeb }
}

export default connect(mapStateToProps)(CelebDetails)
