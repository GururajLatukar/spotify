import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          path="/dashboard"
          component={() => (
            <Layout>
              <Dashboard />
            </Layout>
          )}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
