import React from "react";
import { EuiProvider, EuiThemeProvider } from "@elastic/eui";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" },
    },
  };
  return (
    <EuiProvider>
      <EuiThemeProvider modify={overrides}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App;
