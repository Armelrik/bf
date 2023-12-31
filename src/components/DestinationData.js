import React, { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component{
    render(){
        return(
        <div className={this.props.className}>
            <div className='des-text'>
                <h2>{this.props.heading}</h2>
                <p>
                    {this.props.text}
                </p>
            </div>

            <div className='image'>
                <img alt='image1' src={this.props.img1} />
                {/* <h4>{this.props.headline1}</h4> */}
                <img alt='image2' src={this.props.img2} />
                {/* <h4>{this.props.headline2}</h4> */}
            </div>
        </div>
        )
    }
}

export default DestinationData;
