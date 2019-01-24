import React, { Component } from 'react';
import '../style/App.scss';

class Contact extends Component {
  render() {
    return (
      <div className="page">
      	<div className="is-size-6 pad-me">For Booking & Recipe Exchange:&nbsp;<a href="mailto:mugfolk@gmail.com?subject=Booking or Maybe Recipe Exchange?">mugfolk@gmail.com</a></div>
      	<div className="column is-size-6">Follow Obsessively</div>
      	<div className="columns pad-me">
      		<div className="column">
      			<a href="https://www.facebook.com/ghostmoonsong/" target="_blank">
      				<span class="icon is-large"><i class="fab fa-2x fa-facebook got-style-fb"></i></span>
      			</a>
      			<a href="https://www.instagram.com/ghostmoonsong/" target="_blank">
      				<span class="icon is-large"><i class="fab fa-2x fa-instagram got-style-ig"></i></span>
      			</a>
      			<a href="https://ghostmoon.bandcamp.com/" target="_blank">
      				<span class="icon is-large"><i class="fab fa-2x fa-bandcamp got-style-bc"></i></span>
      			</a>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Contact;