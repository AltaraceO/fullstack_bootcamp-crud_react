import React, { createRef } from "react";
import "./App.css";
import axios from "axios";
import Add from "./component/Add";

class App extends React.Component {
  state = { people: [], first: "", last: "" };
  btnRef = createRef();

  componentDidMount = async () => {
    const { data } = await axios.get(
      "https://61c386e69cfb8f0017a3ebf0.mockapi.io/people"
    );

    this.setState({ people: data });
  };

  add = async (first, last) => {
    const newPerson = {
      first: first,
      last: last,
    };
    const { data } = await axios.post(
      "https://61c386e69cfb8f0017a3ebf0.mockapi.io/people",
      newPerson
    );

    console.log(data);

    this.setState((state) => {
      return { people: [...state.people, data] };
    });
  };

  remove = async (id) => {
    await axios.delete(
      `https://61c386e69cfb8f0017a3ebf0.mockapi.io/people/${id}`
    );
    console.log(id, this.state.people);
    const newArr = [];
    this.state.people.map((person) => {
      if (person.id !== id) {
        console.log("hi");
        newArr.push(person);
      }
    });
    console.log(newArr);

    this.setState({ people: newArr });
  };

  showInfo = () => {
    return (
      <div>
        {this.state.people.map((person) => {
          return (
            <div key={person.id}>
              {person.first}
              <span> </span>
              {person.last}
              <button onClick={(e) => this.remove(person.id)}>Delete</button>
              {/* <Update id={person} onUpdate={this.update} /> */}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Add func={this.add} />
        {this.state.people && this.showInfo()}
      </div>
    );
  }
}

export default App;
