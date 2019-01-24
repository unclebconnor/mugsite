import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Music from './pages/Music';
import Contact from './pages/Contact';
import './style/Bulma.css';
import './style/App.scss';
import './style/Stars.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="allOfTheThings">
          <div id="stars-group-1"></div>
          <div id="stars-group-2"></div>
          <div id="stars-group-3"></div>
          <div id="stars-group-4"></div>
          <div id="stars-group-5"></div>
          <div id="stars-group-6"></div>
          <div className="columns is-centered">
            <div className="column is-half">
              <header>
                <h1 className="site-header">Ghost Moon</h1>
              </header>
              <nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/news">News</Link>
                <Link className="nav-link" to="/music">Music</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </nav>
              <div className="main">
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/news/" component={News} />
                <Route path="/music/" component={Music} />
                <Route path="/contact/" component={Contact} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;