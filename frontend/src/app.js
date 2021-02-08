import React, { Component } from "react";
import Register from "./components/register";
import Login from "./components/login";
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Register</Link>
          <Link to="/register">Login</Link>
        </div>
        <HashRouter>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </HashRouter>
      </div>
    );
  }
}
export default App;
