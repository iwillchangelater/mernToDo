import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" render={Home} />
        <Route path="/register" render={Register} />
        <Route path="/" render={Login} />
      </Switch>
    </div>
  );
}

export default App;
