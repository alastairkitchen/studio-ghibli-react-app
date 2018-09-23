import React from "react";

class FilmPanelContent extends React.Component {
  constructor(props) {
    super(props);

    this.characterNumberText = this.characterNumberText.bind(this);
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
        <h1>{this.props.title}</h1>
        <img src={this.props.image_src} alt="" />
        <p>{this.props.description}</p>
        <p>Director: {this.props.director}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Release Date: {this.props.release_date}</p>
        <p>Rotton Tomatoes Rating: {this.props.rt_score}</p>
        <p>
          Rotton Tomatoes Link:{" "}
          <a href={this.props.rt_link}>{this.props.rt_link}</a>
        </p>

        <h2>Characters {this.characterNumberText(this.props.people)}</h2>
        {this.noCharactersMessage(this.props.people)}
        {this.props.composeBlurbCards(this.props.people, "people")}
      </div>
    );
  }
}

export default FilmPanelContent;
