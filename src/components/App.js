import React from 'react'

import CelebDetails from './CelebDetails'
import CelebList from './CelebList'

import celebrities from '../api/celebrities'

class App extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {
          celebs:[]
        }
  } 

  fetchCelebsInfo = async () => {
    const celebs = await celebrities.get('/celebrities')
    this.setState({celebs: celebs.data})
  }

  componentDidMount () {
    this.fetchCelebsInfo()
  }

  render () {
    return (
      <div>
        <CelebDetails />
        <CelebList celebsList={this.state.celebs}/>
      </div>
    )
  }
}

export default App
