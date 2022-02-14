import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "zero to master l-36",
      monsters: [
        { name: "Frankenstein", id: "monster1" },
        { name: "Dracula", id: "monster2" },
        { name: "Zombie", id: "monster3" },
      ],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonbody = await response.json();
    this.setState({ monsters: jsonbody });
  }
  render() {
    return (
      <div className="App">
        <div>{this.state.string}</div>
        <CardList monsters={this.state.monsters} />
        <button onClick={() => this.setState({ string: "Changed" })}>
          Change Title
        </button>
      </div>
    );
  }
}

export default App;