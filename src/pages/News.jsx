import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.css';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts:[]
    };
  }

  // Wordpress API Endpoint
  // https://public-api.wordpress.com/rest/v1.1/sites/mugfolk.wordpress.com/posts
  componentDidMount() {
    // eventually need to change to production server
    let url = 'http://localhost:4000/posts';
    let posts = [];
    axios.get(url)
    .then(res => {
      posts = res.data;
      this.setState({
        posts:posts
      })
    })
    .catch(err => {
      console.log('Error: ', err)
    })
  }
  // Work on loading/lazy loading
  // work on making accessible

  render() {
    console.log(this.state);
    return (
      <div className="page">
        <h2>News - Stuff to add</h2>
        <p>Feed from Wordpress</p>
        <p>Title</p>
        <p>Content</p>
        <p>Links</p>
      </div>
    );
  }
}

export default News;
