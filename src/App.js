import React from "react";
import HomePage from "./pages/homepage/hompage.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./components/shop/shop.jsx";

import Header from "./components/header/header.jsx";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
