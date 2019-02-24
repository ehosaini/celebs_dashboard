import React from 'react'
import { connect } from 'react-redux'

import { fetchCeleb } from '../actions'

class CelebDetails extends React.Component {
  componentDidMount () {
    if (this.props.celebId) {
      this.props.fetchCeleb(this.props.celebId)
    }
  }

  capitalize(str) {
    return str && str.charAt(0).toUpperCase() + str.slice(1)
  }

  render () {
    return (
      <div className="ui card">
        <div className="image">
            <img src={this.props.celeb.pictureUrl}></img>
        </div>
        <div className="content">
            <a className="header">{this.capitalize(this.props.celeb.name)}</a>
            <div className="meta">
            <span className="date">{this.capitalize(this.props.celeb.occupation)}</span>
            </div>
            <div className="description">
            <p>{this.props.celeb.dateOfBirth} (age {this.props.celeb.age})</p>
            <p>Born in {this.capitalize(this.props.celeb.placeOfBirth)}</p>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { celeb: state.celeb }
}

export default connect(mapStateToProps, { fetchCeleb })(CelebDetails)
