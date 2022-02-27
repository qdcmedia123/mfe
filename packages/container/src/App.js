import {
  createGenerateClassName, StylesProvider
} from "@material-ui/core/styles";
import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
import Progress from "./components/progress";
import './style.css';
import './style.scss';

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

// New Task
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);


  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={() => setIsSignedIn(true)}/>
            </Route>
            <Route path="/" component={MarketingAppLazy}></Route>
          </Switch>
          </Suspense>
        
         
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
