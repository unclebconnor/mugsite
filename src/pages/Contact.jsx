import React, { Component } from 'react';
import '../style/App.scss';

class Contact extends Component {
  render() {
    return (
      <div className="page">
        <h2>Contact</h2>
        <p>For Booking & Recipe Exchange: <a href="mailto:mugfolk@gmail.com?subject=Booking or Maybe Recipe Exchange?">mugfolk@gmail.com</a></p>
      </div>
    );
  }
}

export default Contact;