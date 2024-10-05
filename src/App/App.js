import React from 'react';
import './App';
import MDMApp from 'swfrontend/MDMApp'
import getRoutes from "../App/ScreenRouters";
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter><MDMApp routes={getRoutes} /></BrowserRouter>
  )
};

export default App;