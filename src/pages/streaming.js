import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Streaming extends Component {
  render() {
    return (
      <div className="section">
        <div className="row">

          <div className="col s12 l6">
            <div className="card medium grey darken-3">
              <div className="card-image">
                <img src="livestreaming.png" alt="livestreaming"/>
              </div>
              <div className="card-content">
                <b>Livestreaming</b>
                <p>Vi erbjuder livestreaming av stora och små evenemang, allt från föreläsningar och presentationer till banracing och konserter.</p>
              </div>
              <div className="card-action">
                {/*  Enable when about page is created
                <NavLink to='/streaming' className="blue-text text-lighten-3">Läs mer</NavLink>
                */}
                <NavLink to='/kontakt' className="blue-text text-lighten-3">Kontakta oss</NavLink>
              </div>
            </div>
          </div>

          <div className="col s12 l6">
            <div className="card medium grey darken-3">
              <div className="card-image">
                <img src="video-production.png" alt="videoproduktion"/>
              </div>
              <div className="card-content">
                <b>Videoproduktion</b>
                <p>Vi hjälper dig med enklare videoproduktioner som t.ex informationsvideos, ditt företags interna presentationer eller utbildningsmaterial.</p>
              </div>
              <div className="card-action">
                {/*  Enable when about page is created
                <NavLink to='/streaming' className="blue-text text-lighten-3">Läs mer</NavLink>
                */}
                <NavLink to='/kontakt' className="blue-text text-lighten-3">Kontakta oss</NavLink>
              </div>
            </div>
          </div>

        </div>
      </div>



//      <div>
//      <div className="row">
//        <div className="col">
//          <h1 className="text-center">Livestreaming och videoproduktion</h1>
//        </div>
//      </div>
//      <br></br>
//      <br></br>
//      <div className="row">
//        <div className="col">
//          <div className="media" style={ leftAlign }>
//            <img className="d-flex mr-3" src="livestreaming.png" alt="Livestreaming" style={ imgStyle }></img>
//            <div className="media-body">
//              <h5 className="mt-0">Livestreaming</h5>
//              <p>Vi erbjuder livestreaming av stora och små evenemang, allt från föreläsningar och presentationer till banracing och konserter.<br />
//              Vi försöker ge så mycket värde som möjligt genom att erbjuda alternativa tekniska lösningar och kan bygga integrationer där det behövs.</p>
//              <p>Kontakta oss för mer information och offert!</p>
//            </div>
//          </div>
//        </div>
//      </div>
//      <br></br>
//      <br></br>
//      <div className="row">
//        <div className="col">
//          <div className="media" style={ leftAlign }>
//            <img className="d-flex mr-3" src="video-production.png" alt="Videoproduktion" style={ imgStyle }></img>
//            <div className="media-body">
//              <h5 className="mt-0">Videoproduktion</h5>
//              <p>Vi hjälper dig med enklare videoproduktioner som t.ex informationsvideos, ditt företags interna presentationer eller utbildningsmaterial.</p>
//              <p>Kontakta oss för mer information och offert!</p>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>

    )
  }
}

export default Streaming;
