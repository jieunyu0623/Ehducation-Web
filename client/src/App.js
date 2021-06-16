import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import MyPage from "./components/pages/MyPage";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <Fragment>
      <div className="main">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/:id" component={MyPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
