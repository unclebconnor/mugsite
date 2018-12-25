import React, { Component } from 'react';
import '../style/App.scss';


class NewsPost extends Component {
  constructor(props) {
    super(props);
    // this.state = { 
    //   posts:[]
    // };
  }


  render() {
    console.log(this.props)
    return (
      <div className="post-wrapper">
        <h2>Title: {this.props.post.title}</h2>
        <p>Date: {this.props.post.date}</p>
        {this.props.post.content}
      </div>
    );
  }
}

export default NewsPost;
