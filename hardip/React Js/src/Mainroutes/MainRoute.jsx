import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Link from "../Pages/link.jsx";
import HomePage from "../Pages/HomePage.jsx";
import Action from "../Pages/Action.jsx";
import Another from "../Pages/Another.jsx";
import Something from "../Pages/Something.jsx";
import Example from "../Pages/Example.jsx";
const Classcomponent = React.lazy(() =>
  import("./../Pages/class&functicompo/ClassRoute.jsx")
);
const FunctionalComponent = React.lazy(() =>
  import("./../Pages/class&functicompo/FunctionRoutes")
);
const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/link",
    element: <Link />,
  },
  {
    path: "/example",
    element: <Example />,
    children: [
      {
        path: "classcomponent/*",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Classcomponent />
          </Suspense>
        ),
      },
      {
        path: "functionalComponent/*",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <FunctionalComponent />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/action",
    element: <Action />,
  },
  {
    path: "/another",
    element: <Another />,
  },
  {
    path: "/something",
    element: <Something />,
  },
]);

export default MainRoute;
