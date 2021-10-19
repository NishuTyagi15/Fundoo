import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import SignUp from '../src/pages/Registration/SignUp';
import SignIn from '../src/pages/Login/SignIn';
import ResetPass from './pages/ResetPassword/ResetPass';
import ForgotEmail from '../src/pages/ForgotEmail/ForgotEmail';
import Home from '../src/pages/Dashboard/Home';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/resetpassword" component={ResetPass} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/forgotemail" component={ForgotEmail} />
          <Route path="/home" component={Home} />
          <Route path="/dash" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
