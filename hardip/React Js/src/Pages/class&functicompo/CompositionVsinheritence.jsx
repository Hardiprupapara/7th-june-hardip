import React, { Component } from "react";

class CompositionVsinheritence extends Component {
  render() {
    return (
      <>
        <DialogAnything title="<h1>testing</h1>" data="8823">
          Lorem ipsum dolor <b> sit amet consectetur</b> adipisicing elit.
          Maxime distinctio autem at saepe ex ipsum vero quia quaerat itaque.
          Illum iure inventore ullam similique hic eveniet voluptatem sapiente
          quae nisi.
        </DialogAnything>
      </>
    );
  }
}
function DialogAnything(props) {
  console.log(props);
  return (
    <div style={{ border: "1px solid" }}>
      <h2>{props.title}</h2>
      <h2>{props.data}</h2>
      <p>{props.children}</p>
    </div>
  );
}

export default CompositionVsinheritence;
