import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="row hide-on-med-and-down">
          <div className="col s12 valign-wrapper">
            <div className="valign center-block">
              <br></br>
              <br></br>
              <img className="responsive-img" src="logo.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 valign-wrapper">
            <div className="valign center-block">
              <h5>Subframe konsult inom DevOps, Livestreaming och CAD.</h5>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
