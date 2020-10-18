import React from "react";
// import { Navigate } from 'react-router-dom';
import Main from "../views/Main";
import B2s from "../views/B2s";
import Elimination from "../views/Elimination";
import Interpolation from "../views/Interpolation";
import Differentiation from "../views/Differentiation";
import Integration from "../views/Integration";
import RootFinding from "../views/RootFinding";

const routes = [
  {
    path: '/',
    children: [
      { path: '/', element: <Main/>},
    ]
  },

  {
    path: 'rungnapacommath',
    children: [
      { path: '/', element: <Main/>},

      { path: 'unit1', element: <B2s/>},
      { path: 'unit2', element: <Elimination/>},
      { path: 'unit3', element: <Interpolation/>},
      { path: 'unit4', element: <Differentiation/>},
      { path: 'unit5', element: <Integration/>},
      { path: 'unit6', element: <RootFinding/>},
    ]
  },
];

export default routes;
