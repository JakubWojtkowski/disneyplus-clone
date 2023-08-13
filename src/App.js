import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <React.StrictMode>
          <Header />
          <Switch>
            <Route path="/detail/:id">
              <Detail />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.StrictMode>
      </Router>
    </div>
  );
}

export default App;
