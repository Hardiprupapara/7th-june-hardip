import React, { Component } from "react";
import styledComponents from "styled-components";

class StyleCompo extends Component {
  render() {
    const Button = styledComponents.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0.5em 1em;
      padding: 0.25em 1em;
    `;
    return (
      <div>
        <Button>Click Here</Button>
      </div>
    );
  }
}

export default StyleCompo;
