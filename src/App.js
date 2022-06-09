import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AW } from "./AllStyle";
import Add from "./page/Add";
import Mydic from "./page/Mydic";
import Test from "./page/Test";

function App() {
  return (
    <AW>
      <Router>
        <Switch>
          <Route path="/">
            <Add />
          </Route>
          <Route path="/mydic">
            <Mydic />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </AW>
  );
}

export default App;
