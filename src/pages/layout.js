import React from "react";

import Nav from "../components/layout/nav";
import Main from "../components/layout/main";
import Footer from "../components/layout/footer";

export default class Layout extends React.Component {
  render() {
    return (
      <body>
        <header>
          <Nav />
        </header>
        <main className="grey darken-2 white-text">
          <div className="container">
            <Main />
          </div>
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    );
  }
}
