import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Shopage from "./pages/shop/shop.component";


const HATS = () => (
  <div>
    <h1>HELLO HATS</h1>
  </div>
);

function App() {
  return (
    <div>
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
