import React, { Component } from 'react';
import axios from 'axios';
import NewsPost from './NewsPost.jsx';
import '../style/App.scss';


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
    console.log(this.state.posts)
    // let posts = this.state.posts;
    return (
      <div className="page">
        <div>Add Some space</div>
        <div>Content on Blog: LINK (coming) </div>
        {this.state.posts.map((post,index) => (
          <div key={index}><NewsPost post={post}/></div>
        ))}
      </div>
    );
  }
}

export default News;
