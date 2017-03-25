import React from 'react'
import { render } from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>Video Store</h1>
          <input type='text' placeholder='Search' />
          <a>Browse All</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
