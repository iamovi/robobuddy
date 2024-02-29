import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
        return <h1 className="load">Loaging Robots...</h1>
    } else {
    return (
      <div className="App">
        <h1>RoboBuddy.</h1>
        <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots} />
      </div>
    );
    }
  }
}
export default App;
