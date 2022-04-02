import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import FinalPage from "FinalPage.js";
import TeamPage from "TeamPage.js";
import Events from "Events.js";
import AdditionalPage from "AdditionalPage.js";

import { AppContextProvider } from "context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route path="/events/:type">
            <Events />
          </Route>
          <Route path="/team-page">
            <TeamPage />
          </Route>
          <Route path="/additional-info">
            <AdditionalPage />
          </Route>
          <Route path="/">
            <FinalPage />
          </Route>
        </Switch>
        <ToastContainer />
      </Router>
    </AppContextProvider>
  );
}
