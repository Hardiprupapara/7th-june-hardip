import React, { Component } from "react";

export default class UnControledCompo extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.input2 = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.input);
    console.log(this.input.current);
    console.log(this.input2.current);
    console.log(this.input.current.value);
    console.log(this.input2.current.value);
  };

  render() {
    return (
      <>
        UnControledCompo
        <form method="post" onSubmit={this.handleSubmit}>
          <input type="text" ref={this.input} name="uname" id="uname" />
          <input type="submit" name="btn" id="btn" />
          <input type="text" ref={this.input2} name="lname" id="lname" />
          <input type="submit" name="btn" id="btn" />
        </form>
      </>
    );
  }
}
