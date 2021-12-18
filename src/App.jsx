import { Route, Switch } from "react-router-dom";
import ProfileNavigation from "./components/ProfileNavigation/ProfileNavigation";
import InvoiceDetail from "./pages/InvoiceDetail";
import Main from "./components/Main/Main";
import "./Sass/App.css"

function App() {
  return (
    <div className="app__container">
      <Switch>
        <Route path="/invoice-detail">
          <InvoiceDetail />
        </Route>
        <Route path="/">
          <ProfileNavigation />
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
