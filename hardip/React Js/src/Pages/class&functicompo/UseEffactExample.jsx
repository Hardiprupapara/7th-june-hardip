import React, { useEffect, useState } from "react";

const UseEffactExample = () => {
  const [statedata, setData] = useState("something");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useeffact called");
  });
  let data = "something";
  let btnClick = () => {
    console.log("btnClick called");
    data = "Checking";
    console.log(data);
    setData("data");
  };
  let increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      simple variable data : {data}
      <br />
      State data : {statedata}
      <br />
      <button onClick={btnClick}>Click</button>
      <br />
      <h2>increment decrement</h2>
      <button onClick={increment}>increment</button> {count}{" "}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
      <h2>What is React useEffect Hook? </h2>
      <p>
        useEffect hook is part of React's Hooks API. The core principle of this
        hook is to let you perform side effects in your functional components.
        The useEffect hook is a smooth combination of React's lifecycle methods
        like componentDidMount, componentDidUpdate and componentWillUnmount.
        According to React documentation, the useEffect hook was developed to
        overcome some challenges posed by the life cycle methods of ES6 class
        components.{" "}
      </p>
      <p>
        Sometimes, we want to run some code after the DOM has been updated. It
        can be anything, showing pop-ups, sending API requests, logging users’
        information etc. and such functions don’t require cleanup to be
        performed. They are just hit-once functions and then we forget about
        them. Such places are the best examples to use the useEffect hook.
      </p>
      <h3>Basic Usage of useEffect in React </h3>
      <ul>
        <li>
          <span data-contrast="auto" lang="EN">
            Before using useEffect hook, you need to know exactly when the
            component will be (re)rendered, as effects are executed after each
            rendering cycle.
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
        <li>
          <span data-contrast="auto" lang="EN">
            Effects are always run after rendering, but there is an option to
            opt&nbsp;out of this behavior.
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
        <li>
          <span data-contrast="auto" lang="EN">
            Rejecting or skipping an effect requires understanding basic
            JavaScript concepts about values. The effect will only run again if
            at least one of the values specified in the effect's dependencies
            has changed since the last rendering cycle.
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
        <li>
          <span data-contrast="auto" lang="EN">
            Components should not be re-rendered unnecessarily. This is another
            strategy for skipping unnecessary repetitions of effects.
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
        <li>
          <span data-contrast="auto" lang="EN">
            It should be understood that functions&nbsp;defined in the body of a
            function component are rebuilt every render cycle. This has
            implications when used within effects. There is a strategy to deal
            with this (pull it up outside the component, define it inside the
            effect, use&nbsp;useCallback).
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
        <li>
          <span data-contrast="auto" lang="EN">
            You should understand basic JavaScript concepts such as old
            closures. If you don't understand this, you can struggle to resolve
            issues with stale props and state values in your effects. I have a
            strategy to solve this. B. Using the Effect Dependency Array
            or&nbsp;useRef&nbsp;hooks.
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
        <li>
          <span data-contrast="auto" lang="EN">
            Don't ignore suggestions from the React Hooks ESLint plugin. Don't
            blindly remove dependencies (ignoring ESLint warnings blindly) or
            carelessly use ESLint's disabled comments. An error has likely
            occurred.
          </span>
          <span data-ccp-props='{"201341983":0,"335551550":6,"335551620":6,"335559739":240,"335559740":276}'>
            &nbsp;
          </span>
        </li>
      </ul>
      <h2>Cleaning up an effect</h2>
      <p>
        Often, effects create resources that need to be cleaned up before the
        component leaves the screen, such as a subscription or timer ID. To do
        this, the function passed to useEffect may return a clean-up function.
        For example, to create a subscription:
      </p>
      <h2>Conditionally firing an effect</h2>
      <p>
        The default behavior for effects is to fire the effect after every
        completed render. That way an effect is always recreated if one of its
        dependencies changes.
      </p>
      <p>
        However, this may be overkill in some cases, like the subscription
        example from the previous section. We don’t need to create a new
        subscription on every update, only if the source prop has changed.
      </p>
      <p>
        To implement this, pass a second argument to useEffect that is the array
        of values that the effect depends on. Our updated example now looks like
        this:
      </p>
    </>
  );
};

export default UseEffactExample;
