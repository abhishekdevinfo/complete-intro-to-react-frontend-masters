import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <provider store={store}>
          <div className='app'>
            <Route exact path='/' component={Landing} />
            <Route
              path='/search'
              component={(props) => <Search shows={preload.shows} {...props} />}
            />
            <Route
              path='/details/:id'
              component={(props) => {
                const shows = preload.shows.filter((show) => props.match.params.id === show.imdbID)
                return <Details show={shows[0]} {...props} />
              }}
            />
          </div>
        </provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
