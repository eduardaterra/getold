import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { HeaderProvider } from "./contexts/HeaderContext";
import { RetirementProvider } from "./contexts/RetirementContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <RetirementProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/form" component={Form} />
            </Switch>
          </RetirementProvider>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
