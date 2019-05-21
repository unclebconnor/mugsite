import React, { Component } from 'react';
import '../style/App.scss';
import FuzzyTriangle from '../components/fuzzy_triangle';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <FuzzyTriangle/>
      </div>
    );
  }
}

export default Home;