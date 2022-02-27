import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import Test from "./components/Test.jsx";
import AuthApp from './components/AuthApp';

import './style.scss';
import './style.css';
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

// New Task
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp}></Route>
            <Route path="/" component={MarketingApp}></Route>
          </Switch>
         
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
