import React from "react";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Error from "./Pages/Error";
import SingleRoom from "./Pages/SingleRoom";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/rooms/:id" component={SingleRoom} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
