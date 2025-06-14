import React, { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p id="id1" className="short-text">
            {this.props.text}
          </p>
          {/* <button onClick={document.getElementById("styl").style.color = "blue"}>{this.props.button}</button> */}
          <button
            type="button"
            onclick="document.getElementById('id1').style.className = 'long-text'"
          >
            {this.props.button}
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
