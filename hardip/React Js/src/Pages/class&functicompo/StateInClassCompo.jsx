import React, { Component } from "react";

class StateInClassCompo extends Component {
  dataMember = "something data member";
  constructor(props) {
    super(props);
    this.state = { 
      stateData: "init",
      valueincrementdta: 0,
      turnoff: true,
    };
  }

  ClickHandleSomething = () => {
    console.log("called");
    this.dataMember = "change data";
    this.setState({
      stateData: "otherdata",
    });
  };
  incrementdata = () => {
    this.setState({ valueincrementdta: this.state.valueincrementdta + 1 });
  };
  render() {
    let data = "something....";
    return (
      <div>
        {data} <br></br>
        {this.dataMember}
        <br />
        {this.state.stateData}
        <button onClick={this.ClickHandleSomething}>click</button>
        <br />
        <button onClick={this.incrementdata}>increment</button>
        {this.state.valueincrementdta}
        <button
          onClick={() => {
            this.setState({
              valueincrementdta: this.state.valueincrementdta - 1,
            });
          }}
        >
          decrement
        </button>
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            this.setState({
              turnoff: !this.state.turnoff,
            });
          }}
        >
          {this.state.turnoff ? "on" : "off"}
        </button>
      </div>
    );
  }
}

export default StateInClassCompo;
