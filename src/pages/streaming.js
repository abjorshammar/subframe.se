import React, { Component } from 'react';

const imgStyle = {
  "height":"auto",
  "width":"auto",
  "maxWidth":"300px",
  "maxHeight":"300px"
}

const leftAlign = {
  "text-align":"left"
}

class Streaming extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col">
          <h1 className="text-center">Livestreaming och videoproduktion</h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col">
          <div className="media" style={ leftAlign }>
            <img className="d-flex mr-3" src="livestreaming.png" alt="Livestreaming" style={ imgStyle }></img>
            <div className="media-body">
              <h5 className="mt-0">Livestreaming</h5>
              <p>Vi erbjuder livestreaming av stora och små evenemang, allt från föreläsningar och presentationer till banracing och konserter.<br />
              Vi försöker ge så mycket värde som möjligt genom att erbjuda alternativa tekniska lösningar och kan bygga integrationer där det behövs.</p>
              <p>Kontakta oss för mer information och offert!</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col">
          <div className="media" style={ leftAlign }>
            <img className="d-flex mr-3" src="video-production.png" alt="Videoproduktion" style={ imgStyle }></img>
            <div className="media-body">
              <h5 className="mt-0">Videoproduktion</h5>
              <p>Vi hjälper dig med enklare videoproduktioner som t.ex informationsvideos, ditt företags interna presentationer eller utbildningsmaterial.</p>
              <p>Kontakta oss för mer information och offert!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Streaming;
