import React, { Component } from 'react';
import Moment from 'react-moment';
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
        <div className="newsPostTitle">
          <span>Title: </span>
          <span dangerouslySetInnerHTML={{__html: this.props.post.title}}></span>
        </div>
        <div className="newsPostDate">
          <span>Date: </span>
          <Moment format="YYYY/MM/DD">{this.props.post.date}</Moment>
        </div>
        <div className="newsPostContent" dangerouslySetInnerHTML={{__html: this.props.post.content}} />
      </div>
    );
  }
}

export default NewsPost;
