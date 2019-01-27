import React, { Component } from 'react';
import '../style/App.scss';

class Music extends Component {
  render() {
    return (
      <div className="page">
        <div>More on Bandcamp</div>
        <iframe 
        	className="pa-demos-iframe" 
        	src="https://bandcamp.com/EmbeddedPlayer/album=574130753/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" 
        	seamless
          title="bandcamp-pa-demos"
        >
        	<a href="http://mugfolk.bandcamp.com/album/pa-demos">
        		PA (Demos) by Mug
        	</a>
        </iframe>
      </div>
    );
  }
}

export default Music;