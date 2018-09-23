import React from "react";
// Owned imports
import FilmPanelContent from "./film-panel-content";

class PanelWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.characterNumberText = this.characterNumberText.bind(this);
    this.noCharactersMessage = this.noCharactersMessage.bind(this);
  }

  characterNumberText(people) {
    if (people && Array.isArray(people)) {
      return `(${people.length})`;
    }
  }

  noCharactersMessage(people) {
    if (people && Array.isArray(people)) {
      if (people.length === 0) {
        return <p>No character data had been added to this film yet</p>;
      }
    }
  }

  render() {
    return (
      <div>
        <FilmPanelContent {...this.props} />
        {/*<PannelContentPeople {...this.props} />*/}
      </div>
    );
  }
}

export default PanelWrapper;
