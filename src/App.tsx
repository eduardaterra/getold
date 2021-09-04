import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

import { HeaderProvider } from "./contexts/HeaderContext";
import { FormValidationProvider } from "./contexts/FormValidationContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <FormValidationProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/form" component={Form} />
              <Route exact path="/result" component={Result} />
              <Route component={NotFound} />
            </Switch>
          </FormValidationProvider>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
