import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import About from "./About";
import Nav from "./Nav";
import Project from "./Project";

const myUrls = [
  "http://www.placepuppy.net/7p/400/250",
  "https://i.imgflip.com/opmbo.jpg",
  "http://media.sbmania.net/pictures/48b/54.png",
  "https://i.imgur.com/uWteCty.gif"
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Victor"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Nav github="#" linkedin="#" />
        <About myPhoto="http://www.placepuppy.net/7p/400/250" />
        <Project
          name="Meme Generator"
          description="Letting our dreams be memes"
          image="https://i.imgflip.com/opmbo.jpg"
        />
        <Project
          name="Sophisticated Algorithm"
          description="Fancy Computer Science Algorithm only us geniuses can understand :)"
          image="http://media.sbmania.net/pictures/48b/54.png"
        />
        <Project
          name="Nested For loop triangle"
          description="Triangle of made of * stars"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
    <Hello name={this.state.name} />
    <Nav github="#" linkedin="#" />
    <About myPhoto="http://www.placepuppy.net/7p/400/250" />
    <Project
      name="Meme Generator"
      description="Letting our dreams be memes"
      image="https://i.imgflip.com/opmbo.jpg"
    />
    <Project
      name="Sophisticated Algorithm"
      description="Fancy Computer Science Algorithm only us geniuses can understand :)"
      image="http://media.sbmania.net/pictures/48b/54.png"
    />
    <Project
      name="Nested For loop triangle"
      description="Triangle of made of * stars"
      image="https://i.imgur.com/uWteCty.gif"
      url="http://github.com"
    />
*/
