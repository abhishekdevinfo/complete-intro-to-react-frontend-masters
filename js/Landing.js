import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Video Store</h1>
        <input type='text' placeholder='Search' />
        <a>Browse All</a>
      </div>
    )
  }
})

export default Landing
