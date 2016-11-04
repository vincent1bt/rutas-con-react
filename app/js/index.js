import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'
import Home from 'home'
import About from 'about'
import Posts from 'posts'
import Post from 'post'

class App extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/" >Home </Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/posts" >Posts</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

render((
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="posts" component={Posts}>
        <Route path="/post/:id" component={Post}/>
      </Route>
    </Route>
  </Router>
), document.querySelector("#main"))
