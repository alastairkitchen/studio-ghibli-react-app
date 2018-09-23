import React from "react";

class BlurbCard extends React.Component {
  render() {
    // --------------------------------------------
    // Render film cards
    // --------------------------------------------

    if (this.props.cardType === "film") {
      return (
        <div>
          <p>{this.props.title}</p>
          <p>{this.props.director}</p>
          <p>{this.props.release_date}</p>
          <p>{this.props.rt_score}</p>
          <button
            type="button"
            onClick={() => {
              this.props.openPanel(this.props.id, this.props.cardType);
            }}
          >
            More details
          </button>
        </div>
      );
    }

    // --------------------------------------------
    // Render person cards
    // --------------------------------------------

    if (this.props.cardType === "people") {
      return (
        <article>
          <p>{this.props.name}</p>
          <p>{this.props.age}</p>
          <p>{this.props.gender}</p>
          <button type="button"
            onClick={() => {
              this.props.openPanel(this.props.id, this.props.cardType);
            }}
          >
            More details</button>
        </article>
      );
    }

    if (this.props.cardType === "location") {
      return (
        <article>
          <p>{this.props.name}</p>
          <p>{this.props.climate}</p>
          <p>{this.props.terrain}</p>
          <button type="button">More details</button>
        </article>
      );
    }

    if (!this.props.cardType) {
      return <p>Sorry there was an error</p>;
    }
  }
}

export default BlurbCard;
