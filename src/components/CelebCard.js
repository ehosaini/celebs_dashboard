import React from 'react'

class CelebCard extends React.Component {
  render () {
    return (
      <div>
        {this.props.celebrity.name}
      </div>
    )
  }
}

export default CelebCard
