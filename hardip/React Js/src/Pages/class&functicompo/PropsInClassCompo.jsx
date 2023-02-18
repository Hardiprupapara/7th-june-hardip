import React, { Component } from "react";
import CustomCard from "./ComponentForCard";

class PropsInClassCompo extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <CustomCard
              productTitle="Apple iPhone 13 (128GB) - Pink"
              imgsrc={process.env.PUBLIC_URL + "/ProdIphone13.webp"}
            />
            {/* this use for import img from public folder */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <CustomCard
              productTitle="Apple iPhone 14 Pro 1TB Gold"
              imgsrc="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31Vle5fVdaL._SY445_SX342_QL70_FMwebp_.jpg"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <CustomCard
              productTitle="Apple iPhone 14 Plus 256GB Blue"
              imgsrc="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31laW9Ex46L._SY445_SX342_QL70_FMwebp_.jpg"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <CustomCard
              productTitle="Apple iPhone 13 Pro (1TB) - Silver"
              imgsrc="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/617FFRO3vcL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </div>
        </div>
      </>
    );
  }
}

export default PropsInClassCompo;
