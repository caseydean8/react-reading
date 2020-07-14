import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Books />
        <NoMatch /> */}
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route path="/books/:id" component={Detail} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Params() {
//   useParams();
// }

export default App;
