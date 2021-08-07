import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
