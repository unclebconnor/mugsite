import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Music from './pages/Music';
import Contact from './pages/Contact';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="allOfTheThings">
          <header>
            <h2>The Top</h2>
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
      </Router>
    );
  }
}

export default App;
