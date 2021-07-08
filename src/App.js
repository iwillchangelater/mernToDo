import React from "react";
import { Route, Switch } from "react-router-dom";
import { ListProvider } from "./context/ListContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
      <Switch>
        <ListProvider>
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
        </ListProvider>
      </Switch>
    </div>
  );
}

export default App;
