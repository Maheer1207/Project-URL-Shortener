import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from "./component/Form";

// The function is just to direct any app with "/" or "/app" to the component "Form"
// Since the app will be single page app, no matter what the user comes with, either "/" or "/app" the user will be redirected to the component "Form"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Form} />
              <Route path="/app" component={Form} />
            </Switch>
          </div>
        </div>
      </div >
    </Router>
  );
}

export default App;
