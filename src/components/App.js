import React from 'react'
import { connect } from 'react-redux'

import CelebDetails from './CelebDetails'
import CelebList from './CelebList'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <CelebList />
        <CelebDetails celebId={this.props.celebId} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    celebId: ownProps.match.params.id
  }
}

export default connect(mapStateToProps)(App)
