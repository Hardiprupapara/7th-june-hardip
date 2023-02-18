import React, { Component } from "react";
import { json } from "react-router-dom";
import JsxComponent from "./JsxComponent";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FetchData: {},
    };

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        this.setState({ FetchData: result });
      });
  }

  render() {
    console.log("FetchData ", this.state.FetchData);
    return (
      <>
        api calling
        {JSON.stringify(this.state.FetchData)}
      </>
    );
  }
}

export default Api;
