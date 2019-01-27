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
      <div className="post-wrapper box">
        <div className="news-post-title is-size-4">
          <span dangerouslySetInnerHTML={{__html: this.props.post.title}}></span>
        </div>
        <div className="news-post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}} />
        <div className="news-post-date is-size-5">
          <span>Posted: </span>
          <Moment format="YYYY/MM/DD">{this.props.post.date}</Moment>
        </div>
      </div>
    );
  }
}

export default NewsPost;
