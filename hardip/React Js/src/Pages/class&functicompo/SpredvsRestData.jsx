import React, { Component } from "react";

class SpredvsRestData extends Component {
  getData = (a, ...data) => {
    console.log("getData", data);
    // console.log(data[0]);
  };
  getDataSpread = (a, b, c) => {
    // document.write(a, b, c);
    console.log(a, b, c);
  };
  render() {
    let array = [10, 11, 12];
    return (
      <>
        SpredvsRestData(console)
        {this.getData(10, 20, 30, 40, 50)}
        {/* {this.getDataSpread(array)} */}
        {this.getDataSpread([10, 30, 50])}
      </>
    );
  }
}

export default SpredvsRestData;
