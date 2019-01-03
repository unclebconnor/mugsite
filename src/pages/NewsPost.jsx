import React, { Component } from 'react';
import '../style/App.scss';


class NewsPost extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { 
  //   //   posts:[]
  //   // };
  // }


  render() {
    console.log('posts:', this.props)
    return (
      <div className="post-wrapper">
        <h2>Title: {this.props.post.title}</h2>
        <div>Date: {this.props.post.date}</div>
        <div>{this.props.post.content}</div>
      </div>
    );
  }
}

export default NewsPost;
