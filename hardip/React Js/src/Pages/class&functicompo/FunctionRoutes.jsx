// import React, { Component } from "react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import FunctionalCompoMenu from "./functionalcompoMenu/FunctionalCompoMenu.jsx";
import Clock from "./Clock.jsx";
import Functionfile from "./Functionfile.jsx";
import ChangeBgColor from "./ChangeBgColor.jsx";
import UseContextEffact from "./UseContextEffact.jsx";
import UseEffactExample from "./UseEffactExample.jsx";
import UseReducer from "./UseReducer.jsx";
import UseCallBack from "./UseCallBack.jsx";
const FunctionRoutes = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Routes>
              <Route path="/Functionfile" element={<Functionfile />}></Route>
              <Route path="/clock" element={<Clock />}></Route>
              <Route path="/ChangeBgColor" element={<ChangeBgColor />}></Route>
              <Route
                path="/UseContextEffact"
                element={<UseContextEffact />}
              ></Route>
              <Route
                path="/UseEffactExample"
                element={<UseEffactExample />}
              ></Route>
              <Route path="UseReducer" element={<UseReducer />}></Route>
              <Route path="UseCallBack" element={<UseCallBack />}></Route>
            </Routes>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
                <Link to="functionfile">Functionfile</Link>
              </li>
              <li>
                <Link to="clock">Clock</Link>
              </li>
              <li>
                <Link to="ChangeBgColor">ChangeBgColor</Link>
              </li>
              <li>
                <Link to="UseEffactExample">UseEffactExample</Link>
              </li>
              <li>
                <Link to="UseContextEffact">UseContextEffact</Link>
              </li>
              <li>
                <Link to="UseReducer">UseReducer</Link>
              </li>
              <li>
                <Link to="UseCallBack">UseCallBack</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionRoutes;
