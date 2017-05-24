import React, { Component } from 'react';

const imgStyle = {
  "height":"auto",
  "width":"auto",
  "maxWidth":"600px",
  "maxHeight":"300px"
}

class Home extends Component {
  render() {
    return (
      <div>
        <img style={ imgStyle } src="logo.png" alt="logo" />
      </div>
    );
  }
}

export default Home;
