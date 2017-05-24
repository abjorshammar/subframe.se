import React from "react";

import Footer from "../components/layout/footer";
import Nav from "../components/layout/nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <body>
        <Nav location={location} />

        <main>
          <div className="container">
            <div className="section">
              {this.props.children}
            </div>
          </div>
        </main>

        <footer>
          <Footer/>
        </footer>

        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
      </body>
    );
  }
}
