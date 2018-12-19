import React from "react";

class BlurbCard extends React.Component {
  render() {
    // --------------------------------------------
    // Render film cards
    // --------------------------------------------

    if (this.props.cardType === "film") {
      let imageStyle = {
        backgroundImage: "url(" + this.props.imageUrl + ")"
      };

      return (
        <div>
          <div className="blurb-card">
            <div className="blurb-card__bg-image" style={imageStyle} />
            <div className="blurb-card__content">
              <p className="blurb-card__text blurb-card__title">
                {this.props.title}
              </p>
              <p className="blurb-card__text">{this.props.director}</p>
              <p className="blurb-card__text">{this.props.release_date}</p>
              <button
                type="button"
                onClick={() => {
                  this.props.openPanel(this.props.id, this.props.cardType);
                }}
              >
                More details
              </button>
            </div>
          </div>
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
          <button
            type="button"
            onClick={() => {
              this.props.openPanel(this.props.id, this.props.cardType);
            }}
          >
            More details
          </button>
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
