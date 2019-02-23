import React from 'react'

import CelebDetails from './CelebDetails'
import CelebList from './CelebList'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <CelebList />
        <CelebDetails />
      </div>
    )
  }
}

export default App
