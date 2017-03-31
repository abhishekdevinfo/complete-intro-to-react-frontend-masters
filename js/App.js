import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
