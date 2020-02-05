import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
