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
        <script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
      </body>
    );
  }
}
