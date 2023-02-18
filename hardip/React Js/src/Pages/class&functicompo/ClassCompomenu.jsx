import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class ClassCompomenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="classcompointro">Class Compo Intro</Link>
          </li>
          <li>
            <Link to="JsxComponent">Jsx</Link>
          </li>
          <li>
            <Link to="ClassComponent">ClassComponent</Link>
          </li>
          <li>
            <Link to="PropsInClassCompo">PropsInClassCompo</Link>
          </li>
          <li>
            <Link to="StateInClassCompo">StateInClassCompo</Link>
          </li>
          <li>
            <Link to="StateLifeCycle">StateLifeCycle</Link>
          </li>
          <li>
            <Link to="ConditionalRendringCompo">ConditionalRendringCompo</Link>
          </li>
          <li>
            <Link to="ListandKey">ListandKey</Link>
          </li>
          <li>
            <Link to="ControledCompo">ControledCompo</Link>
          </li>
          <li>
            <Link to="UnControledCompo">UnControledCompo</Link>
          </li>
          <li>
            <Link to="SpredvsRestData">Spred vs RestData</Link>
          </li>
          <li>
            <Link to="CompositionVsinheritence">
              Composition Vs inheritence
            </Link>
          </li>
          <li>
            <Link to="Api">Ajax & Api</Link>
          </li>
          <li>
            <Link to="CssExample">Css Example</Link>
          </li>
          <li>
            <Link to="StyleCompo">StyleComponent</Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}
