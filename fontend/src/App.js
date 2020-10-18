import React from 'react';
import routes from "./route";
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(routes);
  return <div>{routing}</div>;
}

export default App;
