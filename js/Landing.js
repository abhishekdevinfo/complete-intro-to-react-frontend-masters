import React from 'react'
import { Link } from 'react-router-dom'
const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Video Store</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>Browse All</Link>
      </div>
    )
  }
})

export default Landing
