import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuModal from "./components/MenuModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuModal />
        <Switch>
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
