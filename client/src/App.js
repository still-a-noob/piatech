import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact component={Login} path="/login" />
            <Route exact component={Register} path="/register" />
            <Route exact component={Dashboard} path="/dashboard" />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
