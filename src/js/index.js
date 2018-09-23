import "../css/index.scss";

/*
  Create a react app using the studio ghibli API - https://ghibliapi.herokuapp.com/
  List all films as links - link opens popup with more info
  List all characters
  List all locations
*/

import React from "react";
import ReactDOM from "react-dom";

// Service and helpers
import studioGhibliService from "./services/studio-ghibli-service";
import { createInfoPanelData } from "./helpers/studio-ghibli-helper";
// owned imports
import BlurbCard from "./components/blurb-card";
import FullInfoPanel from "./components/full-info-panel/panel-wrapper";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      people: [],
      locations: [],
      infoPanelData: {},
      popupActive: false,
      dataLoaded: false
    };

    this.composeBlurbCards = this.composeBlurbCards.bind(this);
    this.openMoreInfoPanel = this.openMoreInfoPanel.bind(this);
    this.closeMoreInfoPanel = this.closeMoreInfoPanel.bind(this);
  }

  // ------------------------------------------------
  // Life cycle events
  // ------------------------------------------------

  componentWillMount() {
    let service = new studioGhibliService();

    //console.dir(createInfoPanelData());
    service.loadFilms().then(data => {
      this.setState({ ...data, dataLoaded: true });
    });
    service.loadPeople().then(data => {
      this.setState({ ...data, dataLoaded: true });
    });
    service.loadLocations().then(data => {
      this.setState({ ...data, dataLoaded: true });
    });
  }

  // ------------------------------------------------
  // Component methods
  // ------------------------------------------------

  composeBlurbCards(data, type) {
    if (data) {
      const blurbCards = data.map(data => {
        return (
          <li className="blurb-card">
            <BlurbCard
              {...data}
              cardType={type}
              openPanel={this.openMoreInfoPanel}
            />
          </li>
        );
      });

      return <ul className="blurb-card-list">{blurbCards}</ul>;
    }
  }

  openMoreInfoPanel(id) {
    // compose info panel data object from ID
    // get film data from state
    let filmData = this.state.films.filter(film => {
      return film.id === id;
    });

    // build up new data model for info panel data
    if (filmData.length > 0) {
      let infoPanelData = createInfoPanelData(filmData, this.state.people);
      this.setState({
        infoPanelData: infoPanelData
      });
    }
  }

  closeMoreInfoPanel() {}

  // ------------------------------------------------
  // React Render
  // ------------------------------------------------

  render() {
    return (
      <div>
        <FullInfoPanel
          {...this.state.infoPanelData}
          composeBlurbCards={this.composeBlurbCards}
        />

        <article>
          <header>
            <h2>Films</h2>
          </header>
          <p>list of studio ghibli films lorem ipsum dolar summet</p>
          {this.composeBlurbCards(this.state.films, "film")}
        </article>

        <article>
          <header>
            <h2>Characters</h2>
          </header>
          <p>
            list of characters from studio ghibli films lorem ipsum dolar summet
          </p>
          {this.composeBlurbCards(this.state.people, "people")}
        </article>

        <article>
          <header>
            <h2>Locations</h2>
          </header>
          <p>
            list of locations from studio ghibli films lorem ipsum dolar summet
          </p>
          {this.composeBlurbCards(this.state.locations, "location")}
        </article>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// document.getElementById("app").innerHTML = `
// <h1>Hello Parcel!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.
// </div>
// `;
