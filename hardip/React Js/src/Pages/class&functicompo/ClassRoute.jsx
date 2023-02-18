import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ClassCompomenu from "./ClassCompomenu";
import ClassComponent from "./Classcomponent";
import JsxComponent from "./JsxComponent";
import PropsInClassCompo from "./PropsInClassCompo";
import StateInClassCompo from "./StateInClassCompo";
import StateLifeCycle from "./StateLifeCycle";
import WelcomeToClassCompo from "./WelcomeToClassCompo";
import ConditionalRendringCompo from "./ConditionalRendringCompo.jsx";
import ListandKey from "./ListandKey.jsx";
import ControledCompo from "./ControledCompo.jsx";
import UnControledCompo from "./UnControledCompo.jsx";
import SpredvsRestData from "./SpredvsRestData.jsx";
import CompositionVsinheritence from "./CompositionVsinheritence.jsx";
import Api from "./Api.jsx";
import CssExample from "./CssExample.jsx";
import StyleCompo from "./StyleCompo.jsx";

class ClassRoute extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ClassCompomenu></ClassCompomenu>
            </div>
            <div className="col-6">
              <Routes>
                {/* <Route path="/" element={<ClassCompomenu />} /> */}
                <Route
                  path="classcompointro"
                  element={<WelcomeToClassCompo />}
                />
                <Route path="ClassComponent" element={<ClassComponent />} />
                <Route path="jsxComponent" element={<JsxComponent />} />
                <Route
                  path="PropsInClassCompo"
                  element={<PropsInClassCompo />}
                />
                <Route
                  path="StateInClassCompo"
                  element={<StateInClassCompo />}
                />
                <Route path="StateLifeCycle" element={<StateLifeCycle />} />
                <Route
                  path="ConditionalRendringCompo"
                  element={<ConditionalRendringCompo />}
                />
                <Route path="ListandKey" element={<ListandKey />} />
                <Route path="ControledCompo" element={<ControledCompo />} />
                <Route path="UnControledCompo" element={<UnControledCompo />} />
                <Route path="SpredvsRestData" element={<SpredvsRestData />} />
                <Route
                  path="CompositionVsinheritence"
                  element={<CompositionVsinheritence />}
                />
                <Route />
                <Route path="Api" element={<Api />} />
                <Route path="CssExample" element={<CssExample />} />
                <Route path="StyleCompo" element={<StyleCompo />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ClassRoute;
