import { Route, Switch } from "react-router-dom";

// Import style
import "./style/App.scss";

// Import Pages
import LandingPage from "./pages/LandingPage";
import SectionPage from "./pages/SectionPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/pages/:name" exact>
          <SectionPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
