import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <img alt="me" width="200" height="200" src={this.props.myPhoto} />
        </div>
        <div>
          <h3>
            Hi! This is the blog of a student doing the CS major that is trying
            to learn react!!!!!1
          </h3>
        </div>
      </div>

      /*
     <div id="about-me-image">
          <img alt="me" width="200" height="200" src={this.props.myPhoto} />
        </div>
        <div id="about-me-text">
          <h3>
            Hi! This is the blog of a student doing the CS major that is trying
            to learn react!!!!!1
          </h3>
        </div>
    */
    );
  }
}
