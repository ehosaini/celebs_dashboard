import React from 'react'

import CelebDetails from './CelebDetails'
import CelebList from './CelebList'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <CelebDetails />
        <CelebList />
      </div>
    )
  }
}

export default App
