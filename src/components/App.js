import React from "react";
import Router from "components/Router";
import GlobalStyles from "./GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
        <Router/>
        <GlobalStyles/>
      </>
    );
  }
}

export default App;
