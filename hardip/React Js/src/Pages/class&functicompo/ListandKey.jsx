import React, { Component } from "react";

export default class ListandKey extends Component {
  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    // arr.map((numb) => console.log(numb));
    let DataofArray = arr.map((value, key) => {
      console.log(key);
      return <li key={key}>{value}</li>;
    });
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm.",
      },
    ];
    let content = posts.map((data, key) => {
      // console.log(data);
      // console.log(data.id);
      // console.log(data.title);
      // console.log(data.content);
      return (
        <tr key={key}>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.content}</td>
        </tr>
      );
    });
    return (
      <>
        {DataofArray}
        <table className="table table-bordered">
          <tbody> {content}</tbody>
        </table>
      </>
    );
  }
}
