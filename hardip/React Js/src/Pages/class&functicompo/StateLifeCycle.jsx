import React, { Component } from "react";

class StateLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: "init",
      valueincrementdta: 0,
      turnoff: true,
    };
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  componentDidMount() {
    console.log("componentDidMount");
  }

  //   componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps");
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  //   componentWillUpdate(nextProps, nextState) {
  //     console.log("componentWillUpdate");
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
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

export default StateLifeCycle;
