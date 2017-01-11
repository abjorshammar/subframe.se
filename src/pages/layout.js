import React from "react";

import Footer from "../components/layout/footer";
import Nav from "../components/layout/nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>

        <Nav location={location} />

        <div className="inner cover">
          <div className="row">
            <div className="col-lg-12">

              {this.props.children}

            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}
