import store from "../redux/store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./static/Main";
import First from "./static/First";
import Second from "./static/Second";
import NotFound from './static/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />

          <Route exact path="/first" component={First} />
          <Route exact path="/second" component={Second} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
