import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Shopage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route
          exact={true}
          // or just leaving it as exact
          path="/"
          component={Homepage}
        />
        <Route exact path="/shop" component={Shopage} />
      </Switch>
    </div>
  );
}

export default App;
