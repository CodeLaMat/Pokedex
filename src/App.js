import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import Pokelist from "./components/Pokelist";
import About from "./components/About";
import Pokesingle from "./components/Pokesingle";
import "./App.css";

//This is for letting Route to acknowledge the class componenet

const Routerwrapper = (props) => {
  const params = useParams();
  return <Pokesingle params={params} {...props} />;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {" "}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/pokelist" element={<Pokelist />} />
              <Route path="pokelist/:pokesingle" element={<Routerwrapper />} />

              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
