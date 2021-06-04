import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/Main";
import RouteWithLayout from "./components/shared/RouteWithLayout";

import NoPage from "./pages/404";

const AppRouter = () => (
  <Switch>
    <RouteWithLayout layout={Main} exact path="/" component={NoPage} />
    <Route>
      <NoPage />
    </Route>
  </Switch>
);

export default AppRouter;
