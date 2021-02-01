import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "routes/Home";
import TV from "routes/TV";
import Search from "routes/Search";
import Detail from "routes/Detail";
import Header from "./Header";

const router = () => (
  <Router>
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tv" exact component={TV}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/movie/:id" exact component={Detail}/>
        <Route path="/show/:id" exact component={Detail}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </>
  </Router>
);

export default router;
