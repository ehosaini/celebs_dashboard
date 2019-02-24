import React from 'react'
import { connect } from 'react-redux'


import { fetchCeleb } from '../actions'

class CelebCard extends React.Component {

  onCelebSelect = (celeb) => {
    this.props.fetchCeleb(celeb.id)
  }

  makeFullName(){
    return this.capitalize(this.props.celebrity.name) + ' ' + this.capitalize(this.props.celebrity.lastName)
  }

  capitalize(str) {
    return str && str.charAt(0).toUpperCase() + str.slice(1)
  }

  render () {
    return (
      <div className="item" onClick={() => this.onCelebSelect(this.props.celebrity)}>
          <img className="ui avatar image" src={this.props.celebrity.pictureUrl}></img>
          <div className="content">
            <a className="header">{this.makeFullName()}</a>
            <div className="description">{this.capitalize(this.props.celebrity.occupation)}</div>
          </div>
      </div>
    )
  }
}



export default connect(null, { fetchCeleb })(CelebCard)
