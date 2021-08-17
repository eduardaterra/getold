import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { HeaderProvider } from "./contexts/HeaderContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
          </Switch>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
