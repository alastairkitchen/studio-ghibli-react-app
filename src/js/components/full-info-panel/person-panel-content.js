import React from "react";

class PersonPanelContent extends React.Component {
  constructor(props) {
    super(props);

    this.noFilmsMessage = this.noFilmsMessage.bind(this);
  }

  noFilmsMessage(films) {
    if (films && Array.isArray(films)) {
      if (films.length === 0) {
        return <p>No film data had been added to this character yet</p>;
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image_src} alt="" />
        <p>Age: {this.props.age}</p>
        <p>Gender: {this.props.gender}</p>
        <p>Eye Colour: {this.props.eye_color}</p>
        <p>Hair Colour: {this.props.hair_color}</p>

        <p>Films</p>
        {this.noFilmsMessage(this.props.films)}
        {this.props.composeBlurbCards(this.props.films, "film")}
      </div>
    );
  }
}

export default PersonPanelContent;
