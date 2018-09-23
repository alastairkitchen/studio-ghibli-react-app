import React from "react";
// Owned imports
import FilmPanelContent from "./film-panel-content";
import PersonPanelContent from "./person-panel-content";

class FullInfoPanel extends React.Component {
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

  generatePanelContent(panelType) {

    if(panelType === "film") {
      return <FilmPanelContent {...this.props} composeBlurbCards={this.props.composeBlurbCards}/>
    }

    if (panelType === "person") {
      return <PersonPanelContent {...this.props} composeBlurbCards={this.props.composeBlurbCards}/>
    }

  }

  render() {
    return (
      <div>
        {this.generatePanelContent(this.props.panelType)}
      </div>
    );
  }
}

export default FullInfoPanel;
