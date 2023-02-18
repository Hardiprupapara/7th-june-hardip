import React, { createContext, useContext, useState } from "react";
import "./Usecontext.css";

const ThemeContext = createContext("light");

const UseContextEffact = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form>form children data</Form>
      </ThemeContext.Provider>
      <button
        className="btn btn-primary my-2"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </button>
    </>
  );
};
function Form({ children }) {
  return (
    <Panel title="Welcome">
      {children}
      {/* for use see the form children data  which is under the panel tag*/}
      <br></br>
      <br></br>
      <br></br>
      <button className="mx-3 btn-primary btn">Sign up</button>
      <button className="mx-3 btn-primary btn">Log in</button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default UseContextEffact;
