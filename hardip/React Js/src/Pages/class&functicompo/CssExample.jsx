import React, { Component } from "react";

class CssExample extends Component {
  render() {
    return (
      <div>
        css example
        <p style={{ color: "red", width: "500px" }}>
          Here we're saying that when the primary property is set we want to add
          some more css to our component, in this case change the background and
          color.
        </p>
      </div>
    );
  }
}

export default CssExample;
