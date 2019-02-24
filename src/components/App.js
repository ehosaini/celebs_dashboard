import React from 'react'
import { connect } from 'react-redux'

import CelebDetails from './CelebDetails'
import CelebList from './CelebList'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="ui container" style={{margin:'5vh'}}>
        <div className="ui middle aligned two column centered grid">
            <div className="five wide column">
                <CelebList />
            </div>
            <div className="eight wide column center aligned">
                <CelebDetails celebId={this.props.celebId} />
            </div>
        </div>
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
