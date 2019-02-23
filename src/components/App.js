import React from 'react'

import CelebCard from './CelebCard'
import CelebDetails from './CelebDetails'
import CelebList from './CelebDetails'

import celebrities from '../api/celebrities'

class App extends React.Component {
  
  fetchCelebsInfo = async () => {
    const celebs = await celebrities.get('/celebrities')
  }

  componentDidMount () {

  }

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
