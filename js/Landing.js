import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string
  },
  render () {
    return (
      <div className='landing'>
        <h1>Video Store</h1>
        <input value={this.props.searchTerm} type='text' placeholder='Search' />
        <Link to='/search'>Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
