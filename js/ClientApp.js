import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'first prop', color: 'indianred' }),
        MyTitleFactory({ title: '2222 prop', color: 'tomato' }),
        MyTitleFactory({ title: 'THird prop', color: 'mediumorchid' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
