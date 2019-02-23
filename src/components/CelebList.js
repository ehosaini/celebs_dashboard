import React from 'react'

import CelebCard from './CelebCard'

class CelebList extends React.Component {
  renderCelebsList () {
    return this.props.celebsList.map(celeb => <CelebCard key={celeb.id} celebrity={celeb} />)
  }

  render () {
    return (
      <div>
        {this.renderCelebsList()}
      </div>
    )
  }
}

export default CelebList
