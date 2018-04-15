import React from "react";

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  handleChange = e => {
    this.setState({ user: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.user}, welcome to {this.props.name}'s blog!
        </h1>
        <input
          onChange={this.handleChange}
          placeholder="Enter Your name here!"
        />
      </div>
      /*
       <h1>
          Hello {this.state.user}, welcome to {this.props.name}'s blog!
        </h1>
        <input
          onChange={this.handleChange}
          placeholder="Enter your name here!!!"
        />
      */
    );
  }
}
