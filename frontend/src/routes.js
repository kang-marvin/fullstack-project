import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";

import NotFound from "./errors/not_found";
import Dashboard from "./components/dashboard"

const routes = () => {
  return  (
    <App>
      <Suspense fallback={null}>
        <Switch>
          {/* Root path */}
          <Route path="/" exact component={Dashboard} />

          {/* Error handling */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </App>
  )
}

export default routes;