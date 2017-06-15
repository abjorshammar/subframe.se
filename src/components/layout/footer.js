import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
        <footer className="page-footer grey darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="grey-text text-lighten-1">Subframe AB</h5>
                <p className="grey-text">Subframe grundades med huvudsyftet att sälja IT-konsulttjänster med fokus på infrastruktur, devops samt enklare webutveckling.
                  Vi jobbar också med video i form av streaming eller mindre videoproduktioner, samt olika former av 3D CAD och 3D printing.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h6 className="grey-text text-lighten-1">Stack</h6>
                <ul>
                  <li><a className="grey-text" href="https://facebook.github.io/react/">React</a></li>
                  <li><a className="grey-text" href="http://materializecss.com">Materialize CSS</a></li>
                  <li><a className="grey-text" href="https://www.docker.com/">Docker</a></li>
                  <li><a className="grey-text" href="https://aws.amazon.com">AWS S3 & CF</a></li>
                  <li><a className="grey-text" href="https://github.com/abjorshammar/subframe.se">Github</a></li>
                  <li><a className="grey-text" href="https://codeship.com/">Codeship</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey-text text-darken">
            <div className="container center-align">
            © Subframe AB
            </div>
          </div>
        </footer>
    );
  }
}
