import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { HeaderProvider } from "./contexts/HeaderContext";
import { ClientInfoProvider } from "./contexts/ClientInfoContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <ClientInfoProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/form" component={Form} />
            </Switch>
          </ClientInfoProvider>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
