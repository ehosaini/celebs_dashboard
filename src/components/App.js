import React from 'react'
import { connect } from 'react-redux'

import CelebDetails from './CelebDetails'
import CelebList from './CelebList'

class App extends React.Component {
  componentDidMount () {

  }

  handleCelebListError () {
    if (this.props.celebListError) {
      return <div> Server failed to respond, please try again later.</div>
    }
    return <CelebList />
  }

  handleCelebDetailsError () {
    if (this.props.celebError) {
      return <div>
        You may have entered an incorrect ID, or the server couldn't provide details.
        Please navigate back to the main url.
      </div>
    }
    return <CelebDetails celebId={this.props.celebId} />
  }

  render () {
    return (
      <div className='ui container' style={{ margin: '5vh' }}>
        <div className='ui middle aligned two column centered grid'>
          <div className='five wide column'>
            {this.handleCelebListError()}
          </div>
          <div className='eight wide column center aligned'>
            {/* <CelebDetails celebId={this.props.celebId} /> */}
            {this.handleCelebDetailsError()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    celebListError: state.celebs.error,
    celebError: state.celeb.error,
    celebId: ownProps.match.params.id
  }
}

export default connect(mapStateToProps)(App)
