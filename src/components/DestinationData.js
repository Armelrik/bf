import React, { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false, // État initial : texte court affiché
    };
  }

  toggleText = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore, // Inversion de l'état
    }));
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p className={this.state.showMore ? "long-text" : "short-text"}>
            {this.props.text}
          </p>

          <button type="button" onClick={this.toggleText}>
            {this.state.showMore ? this.props.button2 : this.props.button1}
          </button>
        </div>

        <div className="image">
          <img alt="image1" src={this.props.img1} />
          <img alt="image2" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
