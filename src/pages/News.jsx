import React, { Component } from 'react';
import axios from 'axios';
import NewsPost from './NewsPost.jsx';
import '../style/App.css';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts:[{id:1}]
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
      console.log('posts:', posts)
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
    
    let posts = this.state.posts;
    console.log(this.state.posts);

    return (
      <div className="page">
        <h2>News - Stuff to add:</h2>
        {this.state.posts.map((post,index) => (
          <p key={index}><NewsPost post={post}/></p>
        ))}
      </div>
    );
  }
}

export default News;
