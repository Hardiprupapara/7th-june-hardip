import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderFile from "../Header/HeaderFile";

const Example = () => {
  return (
    <>
      <HeaderFile />
      <div className="container">
        <div className="row my-3">
          <div className="col-6">
            <Link to="classcomponent">Classcomponent</Link>
          </div>
          <div className="col-6">
            <Link to="FunctionalComponent">FunctionalComponent</Link>
          </div>
          <div className="row my-3">
            <div className="col">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
