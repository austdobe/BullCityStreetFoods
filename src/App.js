import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homepage from "./components/pages/homepage"
import NavBar from "./components/NavBar";
import NoMatch from './components/pages/NoMatch'
import calendar from './components/pages/calendar'
import menu from './components/pages/menu'

const styling={
    AppBackground:{
      backgroundColor: "#4B0082"
    }
}

function App() {
  return (
      <Router style={styling.AppBackground}>
          <Switch>
            <Route exact path="/" component={homepage} />
            <Route exact path="/menu" component={menu} />
            <Route exact path="/calendar" component={calendar} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
  );
}

export default App;
