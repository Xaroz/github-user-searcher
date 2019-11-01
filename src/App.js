import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage";
import UserPage from "./UserPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:user" component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
