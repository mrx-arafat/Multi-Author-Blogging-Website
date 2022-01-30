import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <h3>Hello Brother</h3>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
