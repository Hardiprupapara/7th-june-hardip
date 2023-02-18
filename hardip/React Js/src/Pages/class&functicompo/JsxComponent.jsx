import React, { Component } from "react";

class JsxComponent extends Component {
  render() {
    // const heading = "<h1>jsx page data</h1>"; //see the string
    // const heading = <h1>jsx page data</h1>; // print the data in the tag
    let something = "my site title";
    // const heading = "<h1>" + something + "</h1>"; //for other data print
    const heading = `<h1>${something}</h1>`;
    // const heading = <h1>{something}</h1>;
    const user = {
      firstname: "Hardip",
      lastname: " rupapara",
    };
    return (
      <div>
        {heading}
        <br />
        4+5={4 + 5}
        {/* for printing data */}
        <p>
          Full name:{user.firstname}
          {user.lastname}
        </p>
      </div>
    );
  }
}

export default JsxComponent;
