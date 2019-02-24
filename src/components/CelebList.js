import React from 'react'
import { connect } from 'react-redux'

import CelebCard from './CelebCard'
import { fetchCelebs } from '../actions'

class CelebList extends React.Component {
  renderCelebsList () {
    return this.props.celebsList.map(celeb => {
      return (
        <div className='ui relaxed list' key={celeb.id}>
          <CelebCard celebrity={celeb} />
        </div>
      )
    })
  }

  componentDidMount () {
    this.props.fetchCelebs()
  }

  render () {
    return this.renderCelebsList()
  }
}

const mapStateToProps = (state) => {
  return {
    celebsList: state.celebs
  }
}

export default connect(mapStateToProps, { fetchCelebs })(CelebList)
