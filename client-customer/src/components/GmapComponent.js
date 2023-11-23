import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.664416750521!2d106.741584274604!3d10.836972858074922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c99f61da03%3A0x15d38a031e6f706a!2zQ29mZmVlIEfhu41pIE7huq9uZw!5e0!3m2!1svi!2s!4v1700102918081!5m2!1svi!2s" width="800" height="600" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;