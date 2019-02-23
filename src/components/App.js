import React from 'react'

import CelebCard from './CelebCard'
import CelebDetails from './CelebDetails'
import CelebList from './CelebDetails'

class App extends React.Component {
  render () {
    return (
      <div>
        <CelebCard />
        <CelebDetails />
        <CelebList />
      </div>
    )
  }
}

export default App
